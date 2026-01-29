// Single-page portfolio with all sections
import {
  HeroSection,
  WorkSection,
  ExperienceSection,
  ResearchSection,
  SkillsSection,
  StatsSection,
  TimelineSection,
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
      <StatsSection />
      <TimelineSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
