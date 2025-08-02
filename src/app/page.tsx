import About from "@/app/pages/about";
import HeaderSection from "./components/head_section";
import Technologies from "./pages/technologies";
import Experience from "./pages/experience";
import Achievements from "./pages/achievements";
import Contact from "./pages/contact";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <About />
      <Technologies />
      {/* <Experience /> */}
      {/* <Achievements /> */}
      <Contact />
    </>
  );
}
