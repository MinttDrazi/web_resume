import ContentBlock from "~/components/ContentBlock";
import List from "~/components/List";
import { SKILLS } from "~/constants/skills";
import useI18n from "~/i18n/useI18n";

export default function Skills() {
  const { lang, t } = useI18n();
  return (
    <ContentBlock title={t.sections.skills}>
      <List items={SKILLS[lang]} markColor={"peach"} />
    </ContentBlock>
  );
}
