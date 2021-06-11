import Link from 'next/link'

export default function PostGrid({ news }) {
    return (
        <Link href={`/news/${news.slug}`}>
            <div className={`rounded-t-lg bg-white mx-2 md:mx-0 md:flex flex-col md:shadow-lg md:rounded-lg "}`}>
                <div className="md:w-full">
                    <img className="rounded-t-lg md:rounded-t-lg" src={news.cover_image} alt={news.title} />
                </div>
                <div className="px-6 py-6 flex flex-col justify-between">
                    <h2 className="text-3xl font-primary text-gray-800 md:text-3xl">{news.title}</h2>
                    <div className="flex justify-between mt-6">
                        <h2 className="">{news.date}</h2>
                        <h3>{news.category}</h3>
                    </div>
                    <p className="mt-6 text-gray-600">{news.excerpt}</p>
                </div>
            </div>
        </Link>
    )
}
