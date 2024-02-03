import AboutMeSection from "@/app/components/AboutMeSection";
import { HomeSection } from "@/app/components/HomeSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ContactMeSection } from "./components/ContactMeSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1 items-center gap-28">
        <HomeSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>
    </>
  );
}
