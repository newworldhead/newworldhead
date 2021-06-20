import Link from 'next/link'
import CategoryLabel from '@/components/CategoryLabel'
import { formatDate } from '@/utils/date'
import { FaRegClock, FaRegUser } from 'react-icons/fa'
import { parse } from '@/utils/parser'

export default function RecentPost({ post }) {
    const { title, author, excerpt, date, category, slug, coverimage: { formats: { medium } } } = post

    return (
        <div className="mt-6 rounded-lg bg-white mx-4 md:mx-0 md:flex md:shadow-lg md:rounded-lg">

            <div className="md:w-1/2 flex">
                <img className="rounded-lg shadow-xl" src={medium.url} alt={title} />
            </div>

            <div className="px-6 py-6 md:w-1/2 flex flex-col justify-between">

                <div className="flex justify-between">
                    <div className="flex gap-4 capitalize text-sm tracking-wider text-primary">
                        <div className="flex items-center gap-2">
                            <div>
                                <FaRegUser />
                            </div>
                            <h2>{author}</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <FaRegClock />
                            </div>
                            <h2>{formatDate(date)}</h2>
                        </div>
                    </div>
                    <div>
                        <CategoryLabel>{category.name}</CategoryLabel>
                    </div>
                </div>

                <Link href={`/posts/${slug}`}>
                    <h2 className="capitalize cursor-pointer text-2xl font-primary text-secondary mt-8 md:text-4xl tracking-wide border-b-0 hover:text-blue-400">{title}</h2>
                </Link>
                <p className="mt-6 text text-primary tracking-wide">{parse(excerpt)}</p>

                <div className="flex mt-6">
                    <Link href={`/posts/${slug}`}>
                        <a className="
                            text-white 
                            tracking-widest 
                            capitalize
                            border 
                            py-2 
                            px-4 
                            bg-blue-400 
                            rounded shadow-xl 
                            border-blue-400 
                            hover:shadow
                        ">Read More</a>
                    </Link>
                </div>

            </div>
        </div>
    )
}
