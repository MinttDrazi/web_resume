import ContentBlock from "~/components/ContentBlock";
import LanguageRow from "~/components/LanguageRow";
import { LANGUAGES } from "~/constants/languages";
import useI18n from "~/i18n/useI18n";

export default function Languages() {
  const { lang, t } = useI18n();
  return (
    <ContentBlock
      title={t.sections.languages}
      innterClass="grid grid-cols-[auto_1fr] gap-y-3 gap-x-10"
    >
      {LANGUAGES[lang].map((l) => (
        <LanguageRow key={l.language} language={l.language} level={l.level} />
      ))}
    </ContentBlock>
  );
}
