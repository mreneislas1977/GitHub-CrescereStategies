import { ModalProvider } from './ModalContext'; 

export default function Layout({ children }) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
}
