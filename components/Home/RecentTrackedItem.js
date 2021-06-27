import Link from 'next/link'
export default function RecentTrackedItem({ newworldUpdates }) {
    const { tag, title, excerpt, link, date } = newworldUpdates

    const pleaseDateGiveMeStrength = new Date(date)

    return (
        <div className="text-white py-20 relative mx-4 md:mx-0 w-full">
            <div className="my-4">
                <p className="text-center uppercase text-sm tracking-widest my-1">{tag}</p>
                <h2 className="text-center text-2xl md:text-4xl font-primary tracking-widest uppercase">{title}</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <p className="text-center md:w-1/2">{excerpt}</p>
                <p className="mt-4">~Amazon New World</p>
            </div>
            <p className="absolute top-0 right-60 p-4">{pleaseDateGiveMeStrength.toDateString()}</p>

            <div className="flex flex-row gap-4 mt-8 items-center justify-center">
                <Link href={link}>
                    <a className="
                text-white
                tracking-wide
                px-4
                py-2
                bg-blue-400
                border
                border-blue-400
                rounded
                shadow-xl
                hover:shadow
            ">To Source</a>
                </Link>
                <Link href={link}>
                    <a className="
                text-white
                tracking-wide
                px-4
                py-2
                bg-blue-400
                border
                border-blue-400
                rounded
                shadow-xl
                hover:shadow
            ">Follow The Tracker</a>
                </Link>
            </div>
        </div>
    )
}
