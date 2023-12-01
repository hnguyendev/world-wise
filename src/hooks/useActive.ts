import { create } from "zustand";

interface ActiveStoreInterface {
  cityId?: string;
  setActive: (cityId: string) => void;
}

const useActive = create<ActiveStoreInterface>((set) => ({
  cityId: undefined,
  setActive: (cityId: string) => set({ cityId }),
}));

export default useActive;
