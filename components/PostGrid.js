import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function PostGrid({ news }) {
    return (
        <div className={`rounded-t-lg bg-white mx-2 md:mx-0 md:flex flex-col md:shadow-lg md:rounded-lg "}`}>
            <Link href={`/news/${news.slug}`}>
                <div className="md:w-full">
                    <img className="rounded-t-lg md:rounded-t-lg" src={news.cover_image} alt={news.title} />
                </div>
            </Link>
            <div className="px-6 py-6 flex flex-col justify-between">
                <h2 className="text-3xl text-center font-primary text-gray-800 md:text-3xl">{news.title}</h2>
                <div className="flex justify-between mt-6">
                    <h2 className="">{news.date}</h2>
                    <CategoryLabel >{news.category}</CategoryLabel>
                </div>
                <p className="mt-6 text-gray-600">{news.excerpt}</p>
            </div>
        </div>
    )
}
