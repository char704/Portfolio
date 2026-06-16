import SkillPill from '../../components/ui/SkillPill.jsx';
import { skillGroups } from '../../data/profile.js';

export default function SkillOrbit() {
  const allSkills = skillGroups.flatMap((group) => group.items).slice(0, 17);

  return (
    <div className="flex flex-wrap gap-2">
      {allSkills.map((skill) => (
        <SkillPill key={skill}>{skill}</SkillPill>
      ))}
    </div>
  );
}
