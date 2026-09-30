import ContentBlock from "~/components/ContentBlock";
import EducationItem from "~/components/EducationItem";
import { EDUCATION } from "~/constants/education";
import useI18n from "~/i18n/useI18n";

export default function Education() {
  const { lang, t } = useI18n();
  return (
    <ContentBlock
      title={t.sections.education}
      innterClass="space-y-4 divide-y-2 divide-blush"
    >
      {EDUCATION[lang].map((edu, index) => (
        <EducationItem key={`${edu.school} ${index}`} education={edu} />
      ))}
    </ContentBlock>
  );
}
