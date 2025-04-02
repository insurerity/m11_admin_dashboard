import { useStore } from "zustand";

import { ListingDialogStates } from "./state";

export function useListingDialog() {
  const error = useStore(ListingDialogStates, (state) => state.error);
  const success = useStore(ListingDialogStates, (state) => state.success);

  return {
    error,
    success,
  };
}
