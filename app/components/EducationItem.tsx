import Text from "./Text";
import H5 from "./typography/H5";

interface EducationItemProps {
  school: string;
  specialization: string;
  from: number;
  to: number;
  level: string;
}

export default function EducationItem({
  school,
  specialization,
  from,
  to,
  level,
}: EducationItemProps) {
  return (
    <div className="pb-4">
      <div className="grid grid-cols-[120px_1fr] gap-x-10">
        <Text size={"lg"}>
          {from}
          {" - "}
          {to}
        </Text>
        <H5>{school}</H5>
      </div>
      <div className="grid grid-cols-[120px_1fr] items-center gap-x-10">
        <Text size={"base"} color={"coral"}>
          {level}
        </Text>
        <Text>{specialization}</Text>
      </div>
    </div>
  );
}
