import type { Route } from "./+types/home";
import Introduction from "~/views/Introduction";
import ContactInfo from "~/views/ContactInfo";
import Languages from "~/views/Languages";
import Education from "~/views/Education";
import Skills from "~/views/Skills";
import Employment from "~/views/Employment";
import Techstack from "~/views/Techstack";
import Photo from "~/views/Photo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <Introduction />
      <ContactInfo />
      <Education />
      <Skills />

      <Employment />
      <div className="space-y-10 order-last">
        <Techstack />
        <Languages />
      </div>
      {/* <div className="space-y-10">
        
      </div> */}
      {/* <div className="space-y-10 lg:min-w-96"> */}
      {/* <Photo /> */}

      {/* </div> */}
    </div>
  );
}
