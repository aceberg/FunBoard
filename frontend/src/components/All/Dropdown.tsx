import { JSX, createSignal, onMount, onCleanup, splitProps } from "solid-js";

interface DropdownProps {
  label: JSX.Element | string;
  children: JSX.Element;
  class?: string;
}

export default function Dropdown(props: DropdownProps) {
  const [local, rest] = splitProps(props, ["label", "children", "class"]);
  const [open, setOpen] = createSignal(false);
  let dropdownRef: HTMLDivElement | undefined;

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef && !dropdownRef.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEsc);
  });

  return (
    <div
      class={`relative inline-block ${local.class ?? ""}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open())}
        {...rest}
      >
        {local.label}
      </button>

      {open() && (
        <div class="absolute left-0 top-full mt-2 z-20">
          <div class="border overflow-y-auto max-h-70">{local.children}</div>
        </div>
      )}
    </div>
  );
}
