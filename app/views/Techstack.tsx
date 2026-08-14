import ContentBlock from "~/components/ContentBlock";
import TechStackItem from "~/components/TechStackItem";
import { TECHSTACK } from "~/constants/techstack";

export default function Techstack() {
  return (
    <ContentBlock title="Techstack" innterClass="flex flex-wrap gap-4">
      {TECHSTACK.map((tech, index) => (
        <TechStackItem key={index} tech={tech} />
      ))}
    </ContentBlock>
  );
}
