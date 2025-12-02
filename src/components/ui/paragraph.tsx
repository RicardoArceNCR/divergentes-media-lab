import React from "react";
import clsx from "clsx";

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "large";
}

const styles = {
  body: `
    font-body
    text-[24px]
    leading-tight
    tracking-[0.035em]
    text-brand-navy
  `,
  large: `
    font-body
    text-[28px]
    leading-tight
    tracking-[0.035em]
    text-brand-navy
  `,
};

export function Paragraph({
  variant = "body",
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p className={clsx(styles[variant], className)} {...props}>
      {children}
    </p>
  );
}
