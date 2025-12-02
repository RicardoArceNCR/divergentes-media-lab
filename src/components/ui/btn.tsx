// src/components/ui/btn.tsx
import React from "react";
import clsx from "clsx";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "inline-flex items-center justify-center gap-x-2 rounded-md font-semibold leading-6 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-navy";

const variants: Record<NonNullable<BtnProps["variant"]>, string> = {
  // Botón principal: rojo de marca
  primary:
    "bg-brand-red text-white shadow-md hover:shadow-lg hover:bg-brand-red/90 active:bg-brand-red/80 focus-visible:ring-brand-red",

  // Botón secundario: borde azul, fondo blanco
  secondary:
    "border border-brand-navy bg-white text-brand-navy hover:bg-brand-navy hover:text-white active:bg-brand-navy/90 focus-visible:ring-brand-navy",

  // Ghost: sin borde, texto azul, buen para links tipo “Big Button”
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-navy/5 active:bg-brand-navy/10 focus-visible:ring-brand-navy",
};

const sizes: Record<NonNullable<BtnProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export default function Btn({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: BtnProps) {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
