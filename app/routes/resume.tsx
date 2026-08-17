import type { Route } from "./+types/resume";
import Introduction from "~/views/Introduction";
import ContactInfo from "~/views/ContactInfo";
import Languages from "~/views/Languages";
import Education from "~/views/Education";
import Skills from "~/views/Skills";
import Employment from "~/views/Employment";
import Techstack from "~/views/Techstack";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Životopis | ${import.meta.env.VITE_FULL_NAME}` }];
}

export default function Resume() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-10">
      <Introduction />
      <ContactInfo />
      <Education />
      <Skills />
      <Employment />
      <div className="space-y-10 sm:col-span-2 lg:col-span-1 sm:grid lg:block sm:grid-cols-2 lg:grid-cols-1 gap-x-10 order-last">
        <Techstack />
        <Languages />
      </div>
    </div>
  );
}
