import Text from "./Text";

interface TechStackItemProps {
  tech: string;
}

export default function TechStackItem({ tech }: TechStackItemProps) {
  return <Text className="px-3 py-2 rounded-sm bg-blush">{tech}</Text>;
}
