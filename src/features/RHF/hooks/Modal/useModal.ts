import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";


export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  
  return context;
};