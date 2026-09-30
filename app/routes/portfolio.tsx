import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";
import ProjectItem from "~/components/ProjectItem";
import { PROJECTS } from "~/constants/projects";
import useI18n from "~/i18n/useI18n";
import type { Route } from "./+types/portfolio";
import { translations } from "~/i18n/translations";
import { DEFAULT_LANG, supportedLang } from "~/i18n";

export function meta({ params }: Route.MetaArgs) {
  const lang = supportedLang.find((l) => l === params.lang) ?? DEFAULT_LANG;
  const t = translations[lang];

  return [{ title: `${import.meta.env.VITE_FULL_NAME} | ${t.nav.portfolio}` }];
}

export default function Portfolio() {
  const { lang, t } = useI18n();
  return (
    <div className="max-w-7xl mx-auto space-y-2">
      <H1>{t.portfolio.title}</H1>
      <H5 color={"coral"}>{t.portfolio.subtitle}</H5>
      <Text className="lg:w-2/3 text-justify">{t.portfolio.description}</Text>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-14 mt-20 divide-y-2 md:divide-y-0 lg:divide-y-2 divide-blush space-y-10 md:space-y-7 lg:space-y-10 xl:space-y-20">
        {PROJECTS[lang].map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
