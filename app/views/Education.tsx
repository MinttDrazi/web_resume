import ContentBlock from "~/components/ContentBlock";
import EducationItem from "~/components/EducationItem";
import { EDUCATION } from "~/constants/education";

export default function Education() {
  return (
    <ContentBlock
      title="Vzdělání"
      innterClass="space-y-4 divide-y-2 divide-blush"
    >
      {EDUCATION.map((edu) => (
        <EducationItem key={edu.school} education={edu} />
      ))}
    </ContentBlock>
  );
}
