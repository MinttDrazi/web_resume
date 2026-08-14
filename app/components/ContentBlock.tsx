import { cn } from "~/utils/cn";
import H2 from "./typography/H2";

interface ContentBlockProps {
  children: React.ReactNode;
  title?: string;
  outerClass?: string;
  innterClass?: string;
}

export default function ContentBlock({
  children,
  title,
  outerClass,
  innterClass,
}: ContentBlockProps) {
  return (
    <div className={cn("space-y-3", outerClass)}>
      {title && <H2>{title}</H2>}
      <div className={cn(innterClass)}>{children}</div>
    </div>
  );
}
