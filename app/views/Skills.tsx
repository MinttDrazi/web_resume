import ContentBlock from "~/components/ContentBlock";
import List from "~/components/List";
import { SKILLS } from "~/constants/skills";

export default function Skills() {
  return (
    <ContentBlock title="Dovednosti">
      <List items={SKILLS} markColor={"peach"} />
    </ContentBlock>
  );
}
