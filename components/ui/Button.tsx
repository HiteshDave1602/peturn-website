import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light" | "ghost";

const variantClass = {
  primary: "",
  secondary: "secondary",
  light: "light",
  ghost: "ghost",
} as const satisfies Record<ButtonVariant, string>;

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export function buttonClassName(variant: ButtonVariant = "primary", className = "") {
  return ["button", variantClass[variant], className].filter(Boolean).join(" ");
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClassName(variant, className)} {...props}>
      {children}
    </a>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}
