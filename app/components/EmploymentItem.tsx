import type { Employment } from "~/types";
import List from "./List";
import Text from "./Text";
import H5 from "./typography/H5";

interface EmploymentItemProps {
  employment: Employment;
}

export default function EmploymentItem({ employment }: EmploymentItemProps) {
  return (
    <div className="grid sm:grid-cols-[auto_1fr] gap-y-1 gap-x-10 pb-4">
      <Text size={"lg"}>
        {employment.from}
        {" - "}
        {employment.to}
      </Text>
      <div>
        <H5>{employment.company}</H5>
        <Text size={"base"} color={"coral"}>
          {employment.position}
        </Text>
        <List items={employment.duties} className="mt-2" />
      </div>
    </div>
  );
}
