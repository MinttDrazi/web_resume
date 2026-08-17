import ContentBlock from "~/components/ContentBlock";
import List from "~/components/List";
import { SKILLS } from "~/constants/skills";

export default function Skills() {
  return (
    <ContentBlock title="Dovednosti" outerClass="order-2 lg:order-0">
      <List items={SKILLS} markColor={"peach"} />
    </ContentBlock>
  );
}
