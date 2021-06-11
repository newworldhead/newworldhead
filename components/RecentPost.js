import Button from '@/components/Button'

export default function RecentPost({ news }) {
    const { title, excerpt, date, category, cover_image, slug } = news

    return (
        <div className="mt-6 rounded-t-lg bg-white mx-2 md:mx-0 md:flex md:max-w-5xl md:shadow-lg md:rounded-lg">

            <div className="md:w-1/2">
                <img className="sd:rounded-t-lg md:rounded-l-lg" src={cover_image} alt={title} />
            </div>

            <div className="px-6 py-6 md:w-1/2 flex flex-col justify-between">

                <h2 className="text-3xl font-primary text-gray-800 md:text-3xl">{title}</h2>

                <div className="flex justify-between mt-6">
                    <h2 className="">{date}</h2>
                    <h3>{category}</h3>
                </div>
                <p className="mt-6 text-gray-600">{excerpt}</p>

                <div className="flex mt-6">
                    <Button type={"button"} href={`/news/${slug}`} py={"2"} width={"full"} mdw={"40"} name={"Read More"} />
                </div>

            </div>
        </div>
    )
}
