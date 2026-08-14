import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const h1Variants = cva("text-5xl uppercase font-extrabold", {
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

interface H1Props extends VariantProps<typeof h1Variants> {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, color, className }: H1Props) {
  return <h1 className={cn(h1Variants({ color, className }))}>{children}</h1>;
}
