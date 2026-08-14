import Text from "./Text";

interface LanguageRow {
  language: string;
  level: string;
}

export default function LanguageRow({ language, level }: LanguageRow) {
  return (
    <>
      <Text className="font-semibold">{language}</Text>
      <Text color={"coral"}>{level}</Text>
    </>
  );
}
