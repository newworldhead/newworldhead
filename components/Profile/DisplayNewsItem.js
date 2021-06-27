import Link from 'next/link'
import { formatDate } from '@/utils/date'
export default function DisplayNewsItem({ post }) {
    const { tag, title, excerpt, link, date } = post
    return (
        <div className="my-2 py-4 cursor-pointer relative">
            <p className="text-sm">{tag}</p>
            <Link href={`${link}`}>
                <h3 className="font-primary text-2xl hover:text-blue-400">{title}</h3>
            </Link>
            <p className="mt-5">{excerpt}</p>
            <p className="mt-2">@www.newworld.com</p>
            <p className="absolute top-0 right-0">{formatDate(date)}</p>
        </div >
    )
}
