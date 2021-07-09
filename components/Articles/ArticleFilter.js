import Link from 'next/link'
import CategoryLabel from '@/components/CategoryLabel'
export default function ArticleFilter({ category }) {
    return (

        <Link href={`/category/${category.name}`}>
            <div className="w-full hidden md:block">
                <h3 className="text-white text-center text-lg px-4 shadow-xl cursor-pointer hover:shadow"><CategoryLabel>{category.name}</CategoryLabel></h3>
            </div>
        </Link>
    )
}
