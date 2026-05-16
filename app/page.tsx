import MatrixBackground  from "@/components/MatrixBackground";
import Navbar           from "@/components/Navbar";
import HeroSection      from "@/components/HeroSection";
import AboutSection     from "@/components/AboutSection";
import SkillsSection    from "@/components/SkillsSection";
import ProjectsSection  from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection   from "@/components/ContactSection";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: '#050B14', position: 'relative' }}>
      <MatrixBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
