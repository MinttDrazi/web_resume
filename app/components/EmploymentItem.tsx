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
    <div className="grid grid-cols-[auto_1fr] gap-x-10 pb-4">
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
        <ul className="mt-2 text-sm font-medium list-disc text-navy list-inside pl-0.5">
          {duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
