'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define what the context looks like
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 2. Create the Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. The Provider (The "Power Station" for the app)
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 4. The Hook (The "Plug" for your buttons)
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
