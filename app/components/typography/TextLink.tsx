import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const outerLinkVariants = cva(
  "font-medium hover:underline hover:cursor-pointer",
  {
    variants: {
      color: {
        default: "text-navy decoration-burnt-peach",
        coral: "text-burnt-peach decoration-navy",
      },
      size: {
        xs: "text-xs",
        default: "text-xs sm:text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  },
);

interface OuterLinkProps extends VariantProps<typeof outerLinkVariants> {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export default function OuterLink({
  link,
  children,
  color,
  size,
  className,
}: OuterLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(outerLinkVariants({ color, size, className }))}
    >
      {children}
    </a>
  );
}
