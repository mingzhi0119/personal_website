'use client';

import { useProfileData } from '@/hooks/useProfileData';
import {
  HeroSection,
  ExperienceSection,
  EducationSection,
  ProjectSection,
  SkillSection,
  Navbar,
  Footer
} from '@/components/organisms';
import { Typography } from '@/components/atoms';

export default function Home() {
  const { data, loading } = useProfileData();

  if (loading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Typography variant="muted" className="animate-pulse">Loading profile...</Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection data={data} className="w-full" />
        <div className="w-full bg-background">
          <ExperienceSection experience={data.experience} />
        </div>
        <div className="w-full bg-muted/30">
          <EducationSection education={data.education} />
        </div>
        <div className="w-full bg-background">
          <SkillSection skills={data.skills} />
        </div>
        <div className="w-full">
          <ProjectSection projects={data.projects} />
        </div>
      </main>
      <Footer contact={data.contact} name={data.name} />
    </div>
  );
}
