import type { Education } from "~/types";
import Text from "./Text";
import H5 from "./typography/H5";

interface EducationItemProps {
  education: Education;
}

export default function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="pb-4">
      <div className="grid sm:grid-cols-[190px_1fr] gap-y-1 gap-x-10">
        <Text size={"lg"}>
          {education.from}
          {" - "}
          {education.to}
        </Text>
        <H5>{education.school}</H5>
      </div>
      <div className="grid sm:grid-cols-[190px_1fr] gap-y-1 items-center gap-x-10">
        <Text size={"base"} color={"coral"}>
          {education.level}
        </Text>
        <Text>{education.specialization}</Text>
      </div>
    </div>
  );
}
