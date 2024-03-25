import { Post, PostData } from './post'

interface PostProps {
  posts: PostData[]
}

export function Posts({ posts }: PostProps) {
  // Masonry grid
  function postsByColumn(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <div className="flex flex-1">
      <div className="w-[50%]">{postsByColumn('left')}</div>

      <div className="w-[50%]">{postsByColumn('right')}</div>
    </div>
  )
}
