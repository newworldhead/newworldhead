import Link from 'next/link'

export default function CategoryLabel({ children }) {

    const colorKey = {
        guides: 'blue',
        news: 'green',
        updates: 'red',
    }

    return (
        <div className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
            <Link href={`/category/${children.toLowerCase()}`}>
                <a className="capitalize">{children}</a>
            </Link>
        </div>
    )
}