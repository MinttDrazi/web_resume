import ContentBlock from "~/components/ContentBlock";
import LanguageRow from "~/components/LanguageRow";
import { LANGUAGES } from "~/constants/languages";

export default function Languages() {
  return (
    <ContentBlock
      title="Jazyky"
      innterClass="grid grid-cols-[auto_1fr] gap-y-3 gap-x-10"
    >
      {LANGUAGES.map((l) => (
        <LanguageRow key={l.language} language={l.language} level={l.level} />
      ))}
    </ContentBlock>
  );
}
