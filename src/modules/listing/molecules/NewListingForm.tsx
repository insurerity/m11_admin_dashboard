import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Upload, X, ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ListingByPkQuery,
  useAddListingImagesMutation,
  useDeleteListingImagesMutation,
  useInsertListingMutation,
  useUpdateListingByPkMutation,
} from "@/graphql/generated";
import { NewListingSchema, NewListingSchemaType } from "../schema";
import { useListingDialog } from "../hooks";
import { SuccessDialog } from "./dialogs/listingSuccess";
import { LoadingSpinner } from "@/components/ui/loading";
import { uploadToFirebase } from "@/lib/upload";
import { Route } from "@/routes/listings/new";
import {  useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COUNTRIES_AND_CITIES, CURRENCY_LIST } from "@/lib/const";

export function NewListingForm() {
  const listing = Route.useLoaderData() as
    | ListingByPkQuery["listing_by_pk"]
    | undefined;

  const { error, success } = useListingDialog();
  const [uploadingFiles, setUploadingFiles] = useState(false);
  const { setOpen: setOpenError, setErrorMessage } = error;
  const { setOpen, setDetails } = success;
  const [actionCreateListing, { loading }] = useInsertListingMutation();
  const [insertListingImages] = useAddListingImagesMutation();
  const [actionUpdateListing] = useUpdateListingByPkMutation();
  const [actionDeleteListingImages] = useDeleteListingImagesMutation();
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);

  console.log("listing", listing);
  // Initialize the form with default values
  const form = useForm<NewListingSchemaType>({
    resolver: zodResolver(NewListingSchema),
    defaultValues: listing
      ? { ...listing,
        country: listing.country ?? undefined, 
        city: listing.city ?? undefined ,
        rating: listing.rating ?? undefined,
        inquire_now_mail_to: listing.inquire_now_mail_to ?? undefined,
        summary: listing.summary ?? undefined,
        access: listing.access ?? undefined,
        interaction_with_guests: listing.interaction_with_guests ?? undefined,
        space: listing.space ?? undefined,
        transit: listing.transit ?? undefined,
        house_rules: listing.house_rules ?? undefined,
        neighborhood: listing.neighborhood ?? undefined,
        nickname: listing.nickname ?? undefined,
        currency: listing.currency ?? undefined,
        images: [] }
      : { images: [] },
  });

  console.log(form.formState.errors)

  function onSubmit(data: NewListingSchemaType) {
  console.log("Form data", data);
    if (listing) {
      return updateListing(data);
    }

    const { images, ...rest } = data;

    actionCreateListing({
      variables: {
        ...rest,
        inquire_now_mail_to: "info@m11collection.com",
      },
      onCompleted: async (data) => {
        if (data) {
          const listingId = data?.insert_listing?.returning[0]?.id;

          setUploadingFiles(true);

          if (images && images.length > 0) {
            try {
              const uploadedFiles = await uploadToFirebase(images);

              if (uploadedFiles) {
                await insertListingImages({
                  variables: {
                    objects: uploadedFiles.map((url) => ({
                      listing_id: listingId,
                      url,
                    })),
                  },
                });
              }

              setOpen(true);
              setUploadingFiles(false);
              setDetails(
                listingId as string,
                data?.insert_listing?.returning[0]?.title as string,
                `Listing created successfully. ${uploadedFiles.length} images uploaded.`
              );
            } catch {
              setUploadingFiles(false);
              setOpen(true);
              setDetails(
                listingId as string,
                data?.insert_listing?.returning[0]?.title as string,
                `Listing created successfully. But there was an error uploading images.`
              );
            }
          }

          // if no images were uploaded, just open the success dialog
          if (!images || images.length === 0) {
            setOpen(true);
            setUploadingFiles(false);
            setDetails(
              listingId as string,
              data?.insert_listing?.returning[0]?.title as string,
              "Listing created successfully."
            );
          }
        }
      },
      onError(error) {
        setOpenError(true);
        setErrorMessage("Error creating listing. Please try again.");
        console.log("An error occurred", error);
      },
    });
  }

  function updateListing(data: NewListingSchemaType) {
    const { images, ...rest } = data;
    actionUpdateListing({
      variables: {
        id: listing?.id,
        _set: {
          ...rest,
          inquire_now_mail_to: "info@m11collection.com",
        },
      },
      onCompleted: async (data) => {
        if (data) {
          setUploadingFiles(true);
          const listingId = data?.update_listing_by_pk?.id;

          // initiate images delete if images exist on the listing
          if (images && images.length > 0 && listing?.images) {
            await actionDeleteListingImages({
              variables: { _eq: listingId },
            });
          }

          // after deleting existing images, insert new images
          if (images && images.length > 0) {
            try {
              const uploadedFiles = await uploadToFirebase(images);

              if (uploadedFiles) {
                await insertListingImages({
                  variables: {
                    objects: uploadedFiles.map((url) => ({
                      listing_id: listingId,
                      url,
                    })),
                  },
                });
              }

              setOpen(true);
              setUploadingFiles(false);
              setDetails(
                listingId as string,
                data?.update_listing_by_pk?.title as string,
                `Listing updated successfully. ${uploadedFiles.length} images uploaded.`
              );
            } catch {
              setUploadingFiles(false);
              setOpen(true);
              setDetails(
                listingId as string,
                data?.update_listing_by_pk?.title as string,
                `Listing updated successfully. But there was an error uploading images.`
              );
            }
          }

          // if no images were uploaded, just open the success dialog
          if (!images || images.length === 0) {
            setOpen(true);
            setUploadingFiles(false);
            setDetails(
              listingId as string,
              data?.update_listing_by_pk?.title as string,
              "Listing updated successfully."
            );
          }
        }
      },
      onError() {
        setOpenError(true);
        setErrorMessage("Error updating listing. Please try again.");
      },
    });
  }

  useEffect(() => {
    if (listing) {
      setSelectedCountry(listing.country!);
    }
  }
  , [listing?.country]);


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Cozy apartment in downtown" {...field} />
                </FormControl>
                <FormDescription>
                  The main title of your listing.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nickname</FormLabel>
                <FormControl>
                  <Input placeholder="Downtown Loft" {...field} />
                </FormControl>
                <FormDescription>
                  A short nickname for your property.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="country"
             render={({ field }) => (
              <FormItem style={{ width: "100%" }}>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCountry(value);
                    }}
                    
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent >
                        {Object.keys(COUNTRIES_AND_CITIES)
                        .sort()
                        .map((country) => (
                          <SelectItem key={country} value={country}>
                          {country}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Country of Listing</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!selectedCountry}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCountry &&
                        COUNTRIES_AND_CITIES[selectedCountry].map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>The city of your listing.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FormField
            control={form.control}
            name="no_of_beds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Beds</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="no_of_bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Bathrooms</FormLabel>
                <FormControl>
                  <Input type="number" min="0.5" step="0.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="no_of_guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Guests</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">

        <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        CURRENCY_LIST.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per Night</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="99.99"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating (0-5)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    placeholder="4.5"
                    {...field}
                    value={field.value === undefined ? "" : field.value}
                    onChange={(e) => {
                      const value =
                        e.target.value === ""
                          ? undefined
                          : Number.parseFloat(e.target.value);
                      field.onChange(value);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
          control={form.control}
          name="inquire_now_mail_to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="contact@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Email address for inquiries about this listing.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className="grid gap-6 md:grid-cols-2">

        <FormField
          control={form.control}
          name="neighborhood"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Neighborhood</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the neighborhood.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="house_rules"
          render={({ field }) => (
            <FormItem>
              <FormLabel>House Rules</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the house rules.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="space"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Space</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the space.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transit"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Transit</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the transit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="access"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Guests Access</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the guests access.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interaction_with_guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Interaction with Guests</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the guests interaction.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Summary</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A  description of the summary.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <FormField
          control={form.control}
          name="isProd"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Publish to Marketplace
                </FormLabel>
                <FormDescription>
                  Toggle on to immediately publish this listing on the guesty
                  marketplace. Otherwise, it will be saved as a draft.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <ImageUploader value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormDescription>
                Upload images of your property. Drag and drop or click to select
                files.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row-reverse">
          <Button type="submit" className="w-full md:w-auto" disabled={loading}>
            {loading || uploadingFiles ? (
              <span className="flex items-center gap-2 w-full">
                <LoadingSpinner />
              </span>
            ) : (
              <span>{listing ? "Update Listing" : "Create Listing"}</span>
            )}
          </Button>
        </div>
      </form>

      <SuccessDialog onCreateAnother={() => setOpen(false)} />
    </Form>
  );
}

interface ImageUploaderProps {
  value: File[] | undefined;
  onChange: (files: File[]) => void;
}

function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    onDrop: (acceptedFiles) => {
      if (value) {
        onChange([...value, ...acceptedFiles]);
      }
    },
  });

  const removeImage = (index: number) => {
    if (value) {
      const newFiles = [...value];
      newFiles.splice(index, 1);
      onChange(newFiles);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium">
            {isDragActive
              ? "Drop the files here"
              : "Drag & drop images here or click to select"}
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPEG, PNG, WebP
          </p>
        </div>
      </div>

      {value && value?.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {value?.map((file, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-2">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <img
                    src={URL.createObjectURL(file) || "/placeholder.svg"}
                    alt={`Preview ${index}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute right-1 top-1 h-6 w-6"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {file.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
