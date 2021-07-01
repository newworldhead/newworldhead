import Link from 'next/link'

export default function RecentTrackedItem({ update }) {
    const { tag, title, excerpt, link, slug, date } = update
    const pleaseDateGiveMeStrength = new Date(date)
    return (
        <div className="bg-secondary p-4 my-4 border-l-4 border-blue-400 relative md:w-4/5 hover:border-white">
            <div className="p-4">
                <p className="text-white uppercase text-xs tracking-widest my-1">{tag}</p>
                <Link href={link}>
                    <h2 className="text-white text-2xl  font-primary tracking-widest uppercase cursor-pointer w-4/5 hover:text-blue-400 md:text-4xl">{title}</h2>
                </Link>
            </div>
            <div className="flex flex-col text-white w-full px-4">
                <p className="text-white md:w-4/5">{excerpt}</p>
                <p className="mt-4">~Amazon New World</p>
            </div>
            <p className="absolute top-4 right-4 text-white">{pleaseDateGiveMeStrength.toDateString()}</p>
            <div>
                <Link href={link}>
                    <a className="
                text-white
                tracking-wide
                px-4
                py-2
                mx-4
                my-8
                bg-blue-400
                border
                border-blue-400
                rounded
                shadow-xl
                inline-block
                hover:shadow
            ">To Source</a>
                </Link>
            </div>
        </div>
    )
}
