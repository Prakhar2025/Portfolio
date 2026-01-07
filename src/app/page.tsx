// Single-page portfolio with all sections
import {
  HomeSection,
  WorkSection,
  SkillsSection,
  AchievementsSection,
  AboutSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <HomeSection />
      <WorkSection />
      <SkillsSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
