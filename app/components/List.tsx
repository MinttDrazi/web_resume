import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const listVariants = cva("text-xs sm:text-sm font-medium list-disc pl-4.5", {
  variants: {
    textColor: {
      default: "text-navy",
      peach: "text-burnt-peach",
    },
    markColor: {
      default: "marker:text-navy",
      peach: "marker:text-burnt-peach",
    },
  },
  defaultVariants: {
    textColor: "default",
    markColor: "default",
  },
});

interface ListProps extends VariantProps<typeof listVariants> {
  items: string[];
  className?: string;
}

export default function List({
  items,
  textColor,
  markColor,
  className,
}: ListProps) {
  return (
    <ul className={cn(listVariants({ textColor, markColor, className }))}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
