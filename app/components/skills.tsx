import { Skill, SkillData } from './skill'

interface SkillsProps {
  skills: SkillData[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Habilidades e competências</h3>

      <div className="grid grid-cols-2 gap-y-2">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}
