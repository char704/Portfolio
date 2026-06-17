import ContactSection from '../features/contact/ContactSection.jsx';
import AchievementSection from '../features/achievement/AchievementSection.jsx';
import AboutSection from '../features/about/AboutSection.jsx';
import ExperienceSection from '../features/experience/ExperienceSection.jsx';
import HeroSection from '../features/hero/HeroSection.jsx';
import ProjectsSection from '../features/projects/ProjectsSection.jsx';
import SkillsSection from '../features/skills/SkillsSection.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import SiteFrame from '../layouts/SiteFrame.jsx';

export default function Home() {
  return (
    <MainLayout>
      <SiteFrame />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementSection />
        <ContactSection />
      </main>
    </MainLayout>
  );
}
