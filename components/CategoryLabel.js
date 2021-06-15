import Link from 'next/link'

export default function CategoryLabel({ children }) {

    const colorKey = {
        Guides: 'blue-400',
        News: 'green-600',
        Updates: 'yellow-500',
    }

    return (
        <div className={`px-2 py-1 bg-${colorKey[children]} text-gray-100 font-secondary tracking-wide rounded`}>
            <Link href={`/category/${children}`}>
                <a className="capitalize">{children}</a>
            </Link>
        </div>
    )
}