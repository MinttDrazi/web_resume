import ContentBlock from "~/components/ContentBlock";
import { SKILLS } from "~/constants/skills";

export default function Skills() {
  return (
    <ContentBlock title="Dovednosti">
      <ul className="text-sm font-medium list-disc text-navy list-inside pl-0.5 marker:text-burnt-peach">
        {SKILLS.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </ContentBlock>
  );
}
