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
      default: "text-xs sm:text-sm",
      base: "text-sm sm:text-base",
      lg: "text-base sm:text-lg",
      xl: "text-lg sm:text-xl",
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
