export interface SkillData {
  id: string
  title: string
  icon: JSX.Element
}

interface SkillsProps {
  skill: SkillData
}

export function Skill({ skill }: SkillsProps) {
  const { title, icon } = skill

  return (
    <div
      className="flex items-center gap-1 hover:brightness-75 transition-all
      cursor-pointer"
    >
      {icon}
      {title}
    </div>
  )
}
