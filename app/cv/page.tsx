import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { cvContentMarkdown } from '../utils/cv'
import { Skills } from '../components/skills'
import { SKILLS } from '../utils/skills'

export default function Cv() {
  return (
    <article className="max-w-[768px] mx-auto pt-9 pb-24 px-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="w-full max-w-full mb-10 prose prose-sm prose-invert"
      >
        {cvContentMarkdown}
      </ReactMarkdown>

      <footer>
        <Skills skills={SKILLS} />
      </footer>
    </article>
  )
}
