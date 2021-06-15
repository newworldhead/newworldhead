import Link from 'next/link'
export default function CategoryWidget({ category }) {

    return (
        <div className={`border-b-2 py-3 cursor-pointer flex justify-between capitalize text-base text-gray-600 font-secondary tracking-wide hover:text-blue-400`}>
            <Link href={`/category/${category.name}`}>
                <p>{category.name}</p>
            </Link>
            <p>({category.posts.length})</p>
        </div>
    )
}
