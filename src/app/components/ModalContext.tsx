'use client';
import React, { createContext, useContext, useState } from 'react';
const ModalContext = createContext({ isModalOpen: false, openModal: () => {}, closeModal: () => {} });
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
