import { createContext } from "react";

interface ModalContext {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}

export const ModalContext = createContext<ModalContext | null>(null);

