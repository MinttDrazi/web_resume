import ContentBlock from "~/components/ContentBlock";
import EmploymentItem from "~/components/EmploymentItem";
import { EMPLOYMENT } from "~/constants/employment";

export default function Employment() {
  return (
    <ContentBlock
      title="Zaměstnání"
      innterClass="space-y-4 divide-y-2 divide-blush"
    >
      {EMPLOYMENT.map((job) => (
        <EmploymentItem
          key={job.company}
          company={job.company}
          position={job.position}
          from={job.from}
          to={job.to}
          duties={job.duties}
        />
      ))}
    </ContentBlock>
  );
}
