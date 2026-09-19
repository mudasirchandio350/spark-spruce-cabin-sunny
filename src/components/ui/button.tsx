import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-[transform,background-color,color,opacity,box-shadow,border-color] duration-200 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg font-semibold shadow-[0_2px_14px_rgba(255,107,107,0.28)] hover:bg-primary-hover hover:shadow-[0_4px_24px_rgba(255,107,107,0.45)] ring-1 ring-white/25 active:shadow-none",
        secondary:
          "bg-bg-elevated/80 text-fg ring-1 ring-fg/15 hover:bg-bg-subtle hover:ring-primary/40 hover:text-white backdrop-blur-xs",
        inverted: "bg-paper-ink text-paper hover:bg-paper-ink/90 shadow-sm",
        ghost: "bg-transparent text-fg hover:bg-primary/10 hover:text-primary",
      },
      size: {
        default: "h-11 rounded-md px-5 text-sm",
        lg: "h-12 rounded-lg px-6 text-sm",
        sm: "h-9 rounded-sm px-3.5 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
