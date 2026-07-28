import type { HTMLAttributes, ReactNode } from "react";

export function Section({ children, className = "", ...props }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLElement>) {
  return (
    <section className={["section", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </section>
  );
}
