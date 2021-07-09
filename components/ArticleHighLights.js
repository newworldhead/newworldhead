import dynamic from 'next/dynamic'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'
import { formatDate } from '@/utils/date'
import { FaRegClock, FaRegUser } from 'react-icons/fa'
import { RiPushpin2Fill } from 'react-icons/ri'

export default function ArticleHighlights({ firstThree }) {

    const ReactTooltip = dynamic(() => import("react-tooltip"), {
        ssr: false,
    });

    return (
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-2 md:h-auto">

            {firstThree.map((article, index) => {

                const { slug, title, date, category: { name }, author, coverimage: { formats: { medium } } } = article

                return (

                    <div key={article.id} className={` ${index === 0 && "col-span-2 row-span-2"} overflow-hidden cursor-pointer relative`} >
                        <ReactTooltip />

                        {index === 0 && (
                            <div className="absolute bg-black bottom-0 opacity-70 p-2 m-4">
                                <div className="flex gap-4 uppercase text-sm text-primary tracking-wider">
                                    <div className="flex items-center gap-2 text-white tracking-wide">
                                        <div>
                                            <FaRegUser />
                                        </div>
                                        <h2>{author}</h2>
                                    </div>
                                    <div className="flex items-center text-white gap-2">
                                        <div>
                                            <FaRegClock />
                                        </div>
                                        <h2>{formatDate(date)}</h2>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div
                            data-tip="Pinned"
                            className="absolute text-white text-xl top-4 left-4">
                            <RiPushpin2Fill />
                        </div>

                        <div className={`absolute m-2 right-0`}> <CategoryLabel>{name}</CategoryLabel></div>

                        <div className={`absolute bg-black mb-4 p-2 bottom-0 opacity-70 rounded-r-lg ${index === 0 && "mb-16 p-4"}`}>
                            <h2 className={`text-2xl font-primary text-white tracking-widest ${index === 0 && "text-4xl"}`}>{title}</h2>
                        </div>


                        <Link href={`/articles/${slug}`}>
                            <img className="h-full w-full rounded-lg shadow-lg" src={medium.url} alt="" />
                        </Link>

                    </div>
                )
            })}

        </div >
    )
}
