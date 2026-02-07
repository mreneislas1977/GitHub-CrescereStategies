'use client';
import { useModal } from "./ModalContext";
import { FaTimes } from 'react-icons/fa';
export default function ModalUI() {
  const { isModalOpen, closeModal } = useModal();
  if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative p-8">
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-crescere-green"><FaTimes size={24} /></button>
        <h2 className="text-2xl font-display font-bold text-crescere-green mb-2">Request A Briefing</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-200 rounded-sm" />
          <button className="w-full py-4 bg-crescere-green text-white font-bold">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
