import { useSection } from "deco/hooks/useSection.ts";

interface Props {
  isOpen: boolean;
  // deno-lint-ignore no-explicit-any
  children: any;
  id?: string;
}

const Modal = ({ isOpen, children, id }: Props) => {
  return (
    <dialog
      id={id}
      open={isOpen}
      hx-put={useSection({ props: { isOpen: false } })}
      hx-target={`#${id}`}
      class="invisible pointer-events-none fixed grid h-full w-full max-h-none max-w-none m-0 p-0 bg-[#00000060] inset-0 justify-items-center overscroll-contain z-[5] overflow-y-hidden open:pointer-events-auto open:visible backdrop:bg-[rgba(0,0,0,0.5)]"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </dialog>
  );
};

export default Modal;
