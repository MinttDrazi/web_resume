import type { Employment } from "~/types";
import List from "./List";
import Text from "./Text";
import H5 from "./typography/H5";

interface EmploymentItemProps {
  employment: Employment;
}

export default function EmploymentItem({ employment }: EmploymentItemProps) {
  return (
    <div className="grid sm:grid-cols-[190px_1fr] gap-y-1 gap-x-10 pb-4">
      <div className="flex gap-2 h-min">
        <div className="flex items-baseline gap-x-1 sm:block">
          <Text size={"lg"}>{employment.fromYear}</Text>
          <Text className="font-normal order-first" color={"coral"}>
            {employment.fromMonth}
          </Text>
        </div>
        <Text size={"lg"}>-</Text>
        <div className="flex items-baseline gap-x-1 sm:block">
          <Text size={"lg"}>{employment.toYear}</Text>
          <Text className="font-normal order-first" color={"coral"}>
            {employment.toMonth}
          </Text>
        </div>
      </div>

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
