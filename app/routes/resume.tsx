import type { Route } from "./+types/resume";
import Introduction from "~/views/Introduction";
import Contact from "~/views/Contact";
import Languages from "~/views/Languages";
import Education from "~/views/Education";
import Skills from "~/views/Skills";
import Employment from "~/views/Employment";
import Techstack from "~/views/Techstack";

export function meta({}: Route.MetaArgs) {
  return [{ title: `${import.meta.env.VITE_FULL_NAME} | Životopis` }];
}

export default function Resume() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-x-5 xl:gap-x-10 gap-y-10 lg:divide-x-2 divide-blush">
      <div className="space-y-10 lg:pr-5 xl:pr-10">
        <Introduction />
        <Education />
        <Employment />
      </div>
      <div className="space-y-10">
        <Contact />
        <Skills />
        <Techstack />
        <Languages />
      </div>
    </div>
  );
}
