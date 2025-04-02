import { create } from "zustand";

type ListingDialogStateTypes = {
  error: {
    open: boolean;
    setOpen: (open: boolean) => void;
    errorMessage?: string;
    setErrorMessage: (msg: string) => void;
  };
  success: {
    open: boolean;
    setOpen: (open: boolean) => void;
    listingId?: string;
    listingTitle?: string;
    setDetails: (listingId: string, listingTitle: string) => void;
  };
};

export const ListingDialogStates = create<ListingDialogStateTypes>((set) => ({
  error: {
    open: false,
    setOpen: (open) => set((state) => ({ error: { ...state.error, open } })),
    errorMessage: undefined,
    setErrorMessage: (msg: string) =>
      set((state) => ({ error: { ...state.error, errorMessage: msg } })),
  },
  success: {
    open: false,
    setOpen: (open) =>
      set((state) => ({ success: { ...state.success, open } })),
    listingId: undefined,
    listingTitle: undefined,
    setDetails: (listingId: string, listingTitle: string) =>
      set((state) => ({
        success: { ...state.success, listingId, listingTitle },
      })),
  },
}));
