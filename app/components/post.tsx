import Image, { StaticImageData } from 'next/image'

export interface PostData {
  id: string
  title: string
  description: string
  image: StaticImageData
}

interface PostProps {
  post: PostData
}

export function Post({ post }: PostProps) {
  const { id, title, description, image } = post

  return (
    <figure
      key={id}
      className="my-4 mx-2 group relative cursor-pointer transition-all"
    >
      <Image
        src={image}
        alt={title}
        className="group-hover:brightness-[0.4] transition-all"
        loading="eager"
      />

      <figcaption
        className="absolute bottom-0 left-0 p-2 flex flex-col
        text-gray-100 opacity-0 group-hover:opacity-100 sm:py-6 sm:px-2"
      >
        <strong className="font-medium text-sm sm:text-base">{title}</strong>
        <p className="text-xs sm:text-base">{description}</p>
      </figcaption>
    </figure>
  )
}
