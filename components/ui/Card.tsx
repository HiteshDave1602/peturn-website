import type { HTMLAttributes, ReactNode } from "react";

export function Card({ children, className = "", ...props }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLElement>) {
  return (
    <article className={["card", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </article>
  );
}
