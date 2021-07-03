import Link from 'next/link'
export default function RecentPostWidget({ post }) {
    const { coverimage: { formats: { thumbnail } }, slug, title } = post
    return (
        <div className="
            border-b
            border-gray-400
            py-4 
            cursor-pointer 
            capitalize 
            text-base 
            text-white
            tracking-wide 
            hover:text-blue-400
            last:border-transparent
            ">
            <Link href={`/posts/${slug}`}>
                <a className="flex flex-row">
                    <img className="w-32" src={thumbnail.url} alt="" />
                    <h3 className="pl-2">{title}</h3>
                </a>
            </Link>
        </div>
    )
}
