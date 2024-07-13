import { useEffect, useRef } from 'preact/hooks';

interface Props { 
  isOpen: boolean, 
  setIsOpen: any,
  children: any,
}

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      if (isOpen) {
        modalRef.current?.showModal();
      } else {
        modalRef.current?.close();
      }
    }, [isOpen]);
    
    return (
      <dialog
        ref={modalRef}
        class="invisible pointer-events-none fixed grid h-full w-full max-h-none max-w-none m-0 p-0 inset-0 justify-items-center overscroll-contain z-[5] bg-transparent overflow-y-hidden open:pointer-events-auto open:visible backdrop:bg-[rgba(0,0,0,0.5)]" 
      >
        {children}
      </dialog>
  );
};

export default Modal;
