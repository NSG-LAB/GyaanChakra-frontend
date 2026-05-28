import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-neon",
        ghost: "border border-white/10 bg-white/5 text-textPrimary hover:border-neon",
        outline: "border border-neon text-neon"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={twMerge(clsx(buttonVariants({ variant }), className))} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
