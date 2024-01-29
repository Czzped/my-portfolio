import AboutMeSection from "@/components/AboutMeSection";
import { HomeSection } from "@/components/HomeSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1 items-center gap-2">
        <HomeSection />
        <AboutMeSection />
      </main>
    </>
  );
}
