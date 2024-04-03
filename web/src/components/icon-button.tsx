import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  const color = transparent
    ? "bg-black/20 border border-white/10 rounded-md p-1.5 disabled:opacity-50"
    : "bg-white/10 border border-white/10 rounded-md p-1.5 disabled:opacity-50";

  return (
    <button {...props} className={color}>
      {props.children}
    </button>
  );
}
