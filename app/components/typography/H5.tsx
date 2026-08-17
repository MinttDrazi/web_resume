import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const h5Variants = cva("text-base sm:text-lg font-bold", {
  variants: {
    color: {
      default: "text-navy",
      coral: "text-burnt-peach",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

interface H5Props extends VariantProps<typeof h5Variants> {
  children: React.ReactNode;
  className?: string;
}

export default function H5({ children, color, className }: H5Props) {
  return <h5 className={cn(h5Variants({ color, className }))}>{children}</h5>;
}
