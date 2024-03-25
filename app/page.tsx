import { Posts } from './components/posts'
import { POSTS } from './utils/posts'

export default function Home() {
  return (
    <main className="px-2">
      <div className="mx-auto w-full max-w-[768px]">
        <Posts posts={POSTS} />
      </div>
    </main>
  )
}
