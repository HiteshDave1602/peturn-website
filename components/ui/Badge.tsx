import type { HTMLAttributes, ReactNode } from "react";

export function Badge({ children, className = "", ...props }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={["badge", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </span>
  );
}
