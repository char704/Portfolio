import ContactSection from '../features/contact/ContactSection.jsx';
import AboutSection from '../features/about/AboutSection.jsx';
import HeroSection from '../features/hero/HeroSection.jsx';
import ProjectsSection from '../features/projects/ProjectsSection.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import SiteFrame from '../layouts/SiteFrame.jsx';

export default function Home() {
  return (
    <MainLayout>
      <SiteFrame />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </MainLayout>
  );
}
