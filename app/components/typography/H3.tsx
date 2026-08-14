import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const h3Variants = cva("text-2xl uppercase font-extrabold", {
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

interface H3Props extends VariantProps<typeof h3Variants> {
  children: React.ReactNode;
  className?: string;
}

export default function H3({ children, color, className }: H3Props) {
  return <h3 className={cn(h3Variants({ color, className }))}>{children}</h3>;
}
