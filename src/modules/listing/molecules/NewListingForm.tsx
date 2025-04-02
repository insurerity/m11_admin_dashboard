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
  useInsertListingMutation,
  useUpdateListingByPkMutation,
} from "@/graphql/generated";
import { NewListingSchema, NewListingSchemaType } from "../schema";
import { useListingDialog } from "../hooks";
import { SuccessDialog } from "./dialogs/listingSuccess";
import { LoadingSpinner } from "@/components/ui/loading";
import { uploadToFirebase } from "@/lib/upload";
import { Route } from "@/routes/listings/new";

export function NewListingForm() {
  const listing = Route.useLoaderData() as
    | ListingByPkQuery["listing_by_pk"]
    | undefined;

  console.log("id", listing);
  const { error, success } = useListingDialog();
  const { setOpen: setOpenError, setErrorMessage } = error;
  const { setOpen, setDetails } = success;
  const [actionCreateListing, { loading }] = useInsertListingMutation();
  const [insertListingImages] = useAddListingImagesMutation();
  const [actionUpdateListing] = useUpdateListingByPkMutation();
  // Initialize the form with default values
  const form = useForm<NewListingSchemaType>({
    resolver: zodResolver(NewListingSchema),
    // @ts-expect-error - i know what im doing
    defaultValues: {
      ...listing,
    },
  });

  function onSubmit(data: NewListingSchemaType) {
    if (listing) {
      return updateListing(data);
    }
    console.log("Form submitted:", data);
    const { images, ...rest } = data;

    actionCreateListing({
      variables: {
        ...rest,
      },
      onCompleted: async (data) => {
        if (data) {
          console.log("data from inserting listing", data);
          const listingId = data?.insert_listing?.returning[0]?.id;

          try {
            const uploadedFiles = await uploadToFirebase(images);
            if (uploadedFiles) {
              await insertListingImages({
                variables: {
                  objects: uploadedFiles.map((url) => ({
                    listing_id: listingId,
                    image_url: url,
                  })),
                },
              });
            }

            console.log("uploaded files", uploadedFiles);
            setOpen(true);
            setDetails(
              listingId as string,
              data?.insert_listing?.returning[0]?.title as string,
              `Listing created successfully. ${uploadedFiles.length} images uploaded.`
            );
            console.log("data from inserting listing", data);
          } catch {
            setOpen(true);
            setDetails(
              listingId as string,
              data?.insert_listing?.returning[0]?.title as string,
              `Listing created successfully. But there was an error uploading images.`
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
    actionUpdateListing({
      variables: {
        id: listing?.id,
        _set: {
          ...data,
        },
      },
    });
  }
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

        <div className="grid gap-6 md:grid-cols-2">
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

        <FormField
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
            {loading ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner />
              </span>
            ) : (
              "Add Listing"
            )}
          </Button>
        </div>
      </form>

      <SuccessDialog onCreateAnother={() => setOpen(false)} />
    </Form>
  );
}

interface ImageUploaderProps {
  value: File[];
  onChange: (files: File[]) => void;
}

function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    onDrop: (acceptedFiles) => {
      onChange([...value, ...acceptedFiles]);
    },
  });

  const removeImage = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);
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

      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {value.map((file, index) => (
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
