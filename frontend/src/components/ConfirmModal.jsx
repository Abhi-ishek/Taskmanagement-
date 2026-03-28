import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;
  return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/10 backdrop-blur-sm p-4">
  <div className="w-full max-w-[400px] rounded-2xl border border-white/80  p-8 text-center shadow-2xl shadow-black/50">
    
    <h3 className="text-xl font-bold text-white mb-2">
      {title || "Are you sure?"}
    </h3>
    
    <p className="text-gray-100 text-sm leading-relaxed">
      {message}
    </p>

    <div className="mt-8 flex gap-3 justify-center">
      <button 
        className="flex-1 px-5 py-2.5 rounded-xl bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition-colors active:scale-95" 
        onClick={onClose}
      >
        Cancel
      </button>
      
      <button 
        className="flex-1 px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20 active:scale-95" 
        onClick={() => { onConfirm(); onClose(); }}
      >
        Confirm
      </button>
    </div>
  </div>
</div>
  )
};

export default ConfirmModal;