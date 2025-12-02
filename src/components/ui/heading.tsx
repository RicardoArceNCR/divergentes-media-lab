import React from "react";
import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  variant?: "hero" | "title" | "section";
}

const styles = {
  hero: `
    font-display 
    text-[94px]
    leading-[77px]
    tracking-[-0.03em]
    uppercase
  `,
  title: `
    font-display 
    text-5xl 
    leading-tight
    uppercase
  `,
  section: `
    font-display 
    text-3xl 
    leading-snug
    uppercase
  `,
};

const baseColors = {
  hero: "text-brand-navy",
  title: "text-brand-navy",
  section: "text-brand-navy",
};

export function Heading({
  as = "h2",
  variant = "title",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        styles[variant],
        baseColors[variant],
        className    
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
