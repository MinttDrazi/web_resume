import List from "./List";
import Text from "./Text";
import H5 from "./typography/H5";

interface EmploymentItemProps {
  company: string;
  position: string;
  from: number;
  to: number;
  duties: string[];
}

export default function EmploymentItem({
  company,
  position,
  from,
  to,
  duties,
}: EmploymentItemProps) {
  return (
    <div className="grid sm:grid-cols-[auto_1fr] gap-y-1 gap-x-10 pb-4">
      <Text size={"lg"}>
        {from}
        {" - "}
        {to}
      </Text>
      <div>
        <H5>{company}</H5>
        <Text size={"base"} color={"coral"}>
          {position}
        </Text>
        <List items={duties} className="mt-2" />
      </div>
    </div>
  );
}
