import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const h2Variants = cva("text-2xl sm:text-3xl uppercase font-extrabold", {
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

interface H2Props extends VariantProps<typeof h2Variants> {
  children: React.ReactNode;
  className?: string;
}

export default function H2({ children, color, className }: H2Props) {
  return <h2 className={cn(h2Variants({ color, className }))}>{children}</h2>;
}
