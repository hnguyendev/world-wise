import { create } from "zustand";

interface ModalStoreInterface {
  cityId?: string;
  isOpen: boolean;
  openModal: (cityId: string) => void;
  closeModal: () => void;
}

const useModal = create<ModalStoreInterface>((set) => ({
  cityId: undefined,
  isOpen: false,
  openModal: (cityId: string) => set({ isOpen: true, cityId }),
  closeModal: () => set({ isOpen: false, cityId: undefined }),
}));

export default useModal;
