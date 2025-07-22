import { ReactNode, useCallback, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);


  const toggleModal = useCallback(() => {
      isOpen ? closeModal() : openModal();
  }, [isOpen, openModal, closeModal]);
  
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, toggleModal}}>
      {children}
    </ModalContext.Provider>
  );
};