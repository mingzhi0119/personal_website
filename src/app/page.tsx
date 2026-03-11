import { profileData } from '@/data/profile';
import {
  HeroSection,
  ExperienceSection,
  EducationSection,
  ProjectSection,
  SkillSection,
  Navbar,
  Footer
} from '@/components/organisms';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection data={profileData} className="w-full" />
        <div className="w-full bg-background">
          <ExperienceSection experience={profileData.experience} />
        </div>
        <div className="w-full bg-muted/30">
          <EducationSection education={profileData.education} />
        </div>
        <div className="w-full bg-background">
          <SkillSection skills={profileData.skills} />
        </div>
        <div className="w-full">
          <ProjectSection projects={profileData.projects} />
        </div>
      </main>
      <Footer contact={profileData.contact} name={profileData.name} />
    </div>
  );
}
