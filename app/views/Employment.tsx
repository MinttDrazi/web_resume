import ContentBlock from "~/components/ContentBlock";
import EmploymentItem from "~/components/EmploymentItem";
import { EMPLOYMENT } from "~/constants/employment";
import useI18n from "~/i18n/useI18n";

export default function Employment() {
  const { lang, t } = useI18n();
  return (
    <ContentBlock
      title={t.sections.employment}
      innterClass="space-y-4 divide-y-2 divide-blush"
    >
      {EMPLOYMENT[lang].map((job) => (
        <EmploymentItem key={job.company} employment={job} />
      ))}
    </ContentBlock>
  );
}
