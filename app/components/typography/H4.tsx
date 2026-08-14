import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const h4Variants = cva("text-xl font-extrabold", {
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

interface H4Props extends VariantProps<typeof h4Variants> {
  children: React.ReactNode;
  className?: string;
}

export default function H4({ children, color, className }: H4Props) {
  return <h4 className={cn(h4Variants({ color, className }))}>{children}</h4>;
}
