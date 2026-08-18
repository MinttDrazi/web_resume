import Text from "./Text";

interface TechStackItemProps {
  tech: string;
}

export default function TechStackItem({ tech }: TechStackItemProps) {
  return <Text className="px-3 py-2 rounded-lg bg-blush/50">{tech}</Text>;
}
