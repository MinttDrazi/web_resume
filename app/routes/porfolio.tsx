import type { Route } from "./+types/resume";
import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";
import ProjectItem from "~/components/ProjectItem";
import { PROJECTS } from "~/constants/projects";

export function meta({}: Route.MetaArgs) {
  return [{ title: `${import.meta.env.VITE_FULL_NAME} | Porfolio` }];
}

export default function Porfolio() {
  return (
    <div className="max-w-7xl mx-auto space-y-2">
      <H1>Porfolio</H1>
      <H5 color={"coral"}>Výběr mých projektů, webů a aplikací</H5>
      <Text className="lg:w-2/3 text-justify">
        Zde jsou ukázky webových stránek a aplikací, které jsem vyvíjel čistě
        sám nebo na kterých jsem se podílel. Jedná se jak o osobní projekty, tak
        o práce pro klienty. Ne všechny mé projekty jsou veřejně dostupné. Pokud
        chcete vědět více, kontaktujte mě.
      </Text>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-14 mt-20 divide-y-2 md:divide-y-0 lg:divide-y-2 divide-blush space-y-10 md:space-y-7 lg:space-y-10 xl:space-y-20">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
