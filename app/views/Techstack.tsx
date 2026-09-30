import ContentBlock from "~/components/ContentBlock";
import TechStackItem from "~/components/TechStackItem";
import { TECHSTACK } from "~/constants/techstack";
import useI18n from "~/i18n/useI18n";

export default function Techstack() {
  const { t } = useI18n();
  return (
    <ContentBlock
      title={t.sections.techstack}
      innterClass="flex flex-wrap gap-4"
    >
      {TECHSTACK.map((tech, index) => (
        <TechStackItem key={index} tech={tech} />
      ))}
    </ContentBlock>
  );
}
