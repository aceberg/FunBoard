import { createEffect, onCleanup } from "solid-js";
import CloseButton from "./CloseButton";

export default function Modal(_props: any) {

  let modalRef: HTMLDivElement | undefined;

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef && !modalRef.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const openModal = () => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
  };

  const closeModal = () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
    _props.onClose();
  };

  onCleanup(() => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  });

  createEffect(() => {
    if (_props.isOpen) {
        openModal();
    }
  });

  return (
    <>
      {_props.isOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            ref={modalRef}
            class={_props.modalClass + " relative shadow-xl w-full max-w-lg"}
          >
            <CloseButton closeModal={closeModal}></CloseButton>

            {_props.body}
          </div>
        </div>
      )}
    </>
  );
}
