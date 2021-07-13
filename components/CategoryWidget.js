import Link from 'next/link'
export default function CategoryWidget({ category }) {

    return (
        <div className={`
            border-b 
            border-gray-400 
            py-3 
            cursor-pointer 
            capitalize 
            text-base 
            text-white 
            tracking-wide 
            hover:text-blue-400
            last:border-transparent
        `}>
            <Link href={`/category/${category.name}`}>
                <div className="flex flex-row items-center justify-between w-full">
                    <p>{category.name}</p>
                    <p className="text-sm">({category.posts.length})</p>
                </div>
            </Link>

        </div>
    )
}
