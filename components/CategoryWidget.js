import Link from 'next/link'
export default function CategoryWidget({ category }) {

    return (
        <div className={`
            border-b 
            border-gray-400 
            py-3 
            cursor-pointer 
            flex 
            justify-between 
            capitalize 
            text-base 
            text-white 
            tracking-wide 
            hover:text-blue-400
            last:border-transparent
        `}>
            <Link href={`/category/${category.name}`}>
                <p>{category.name}</p>
            </Link>
            <p className="text-sm">({category.posts.length})</p>
        </div>
    )
}
