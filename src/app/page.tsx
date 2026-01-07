// Single-page portfolio with all sections
import {
  HeroSection,
  WorkSection,
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
      <SkillsSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
