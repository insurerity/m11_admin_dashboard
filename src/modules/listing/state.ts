import { create } from "zustand";

type ListingDialogStateTypes = {
  error: {
    open: boolean;
    setOpen: (open: boolean) => void;
    errorMessage?: string;
    setErrorMessage: (msg: string) => void;
  };
  delete: {
    showDelete: boolean;
    setShowDelete: (open: boolean) => void;
  };
  success: {
    open: boolean;
    setOpen: (open: boolean) => void;
    listingId?: string;
    listingTitle?: string;
    successMessage?: string;
    setDetails: (
      listingId: string,
      listingTitle: string,
      successMsg: string
    ) => void;
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
  delete: {
    showDelete: false,
    setShowDelete: (open) =>
      set((state) => ({ delete: { ...state.delete, showDelete: open } })),
  },
  success: {
    open: false,
    setOpen: (open) =>
      set((state) => ({ success: { ...state.success, open } })),
    listingId: undefined,
    listingTitle: undefined,
    setDetails: (listingId: string, listingTitle: string, successMsg: string) =>
      set((state) => ({
        success: {
          ...state.success,
          listingId,
          listingTitle,
          successMessage: successMsg,
        },
      })),
  },
}));
