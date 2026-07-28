import type { HTMLAttributes, ReactNode } from "react";

export function Container({ children, className = "", ...props }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["container", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}
