import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const textVariants = cva("font-medium", {
  variants: {
    color: {
      default: "text-navy",
      coral: "text-burnt-peach",
    },
    size: {
      xs: "text-xs",
      default: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, color, size, className }: TextProps) {
  return (
    <p className={cn(textVariants({ color, size, className }))}>{children}</p>
  );
}
