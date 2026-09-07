import { SquareArrowOutUpRight } from "lucide-react";
import Text from "./Text";
import H2 from "./typography/H2";
import H5 from "./typography/H5";
import OuterLink from "./typography/TextLink";
import type { Project } from "~/types";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-4 content-start lg:gap-20 pb-10 md:pb-7 lg:pb-10 xl:pb-20">
      <div className="xl:py-2 flex flex-col lg:justify-between">
        <div className="space-y-2">
          <H5 color={"coral"}>{project.year}</H5>
          <H2>{project.name}</H2>
          <Text className="text-justify">{project.text}</Text>
          <div className="mt-4 flex flex-wrap gap-4">
            {project.techstack.map((t) => (
              <Text key={t} className="px-3 py-2 rounded-lg bg-blush/50">
                {t}
              </Text>
            ))}
          </div>
        </div>

        <div className="flex gap-8 mt-8">
          {project.links?.map((link) => (
            <OuterLink
              key={link.url}
              link={link.url}
              color={"coral"}
              className="flex items-center gap-1"
            >
              {link.text}
              <SquareArrowOutUpRight size={12} />
            </OuterLink>
          ))}
        </div>
      </div>

      <img
        src={project.image}
        className="outline-blush/50 outline-4 order-first lg:order-0 rounded-xl"
      />
    </div>
  );
}
