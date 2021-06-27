import Link from 'next/link'
import CategoryLabel from './CategoryLabel'
import { formatDate } from '@/utils/date'
import { FaRegClock, FaRegUser } from 'react-icons/fa'

export default function PostGrid({ post }) {

    const { slug, title, date, category: { name }, excerpt, author, coverimage: { formats: { medium } } } = post
    return (
        <div className={`rounded-lg bg-white mx-4 md:mx-0 md:mt-0 md:flex flex-col md:shadow-lg md:rounded-lg"}`}>
            <Link href={`/posts/${slug}`}>
                <div className="md:w-full">
                    <img className="rounded-lg shadow-xl cursor-pointer" src={medium.url} alt={"Hmm"} />
                </div>
            </Link>
            <div className="px-6 pb-6 pt-3 flex flex-col justify-between">

                <div className="flex justify-between my-2">
                    <div className="flex gap-4 capitalize text-sm font-semibold tracking-wide">
                        <div className="flex items-center gap-1">
                            <div>
                                <FaRegUser />
                            </div>
                            <h2>{author}</h2>
                        </div>
                        <div className="flex items-center gap-1">
                            <div>
                                <FaRegClock />
                            </div>
                            <h2>{formatDate(date)}</h2>
                        </div>
                    </div>
                    <div>
                        <CategoryLabel>{name}</CategoryLabel>
                    </div>
                </div>
                <h2 className="text-3xl font-primary mt-4 tracking-wide md:text-3xl cursor-pointer hover:text-blue-400">{title}</h2>
                <p className="mt-6 tracking-wide">{excerpt}</p>
            </div>
        </div>
    )
}
