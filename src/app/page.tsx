// Single-page portfolio with all sections
import {
  HeroSection,
  WorkSection,
  ExperienceSection,
  ResearchSection,
  SkillsSection,
  AchievementsSection,
  AboutSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
