import Link from 'next/link'
import { PER_PAGE } from '@/config/index'

export default function Pagination({ page, count }) {

    const lastPage = Math.ceil(count / PER_PAGE)

    return (
        <>
            {page > 1 && (
                <Link href={`/companies?page=${page - 1}`}>
                    <a className="py-2 px-4 mr-2 text-white text-sm bg-blue-400 rounded shadow-xl hover:shadow">Prev</a>
                </Link>
            )}

            {Array.from({ length: lastPage }, (_, i) => (
                <Link key={i} href={`/companies?page=${i + 1}`}>
                    <a className="p-2 px-3 mr-1 bg-blue-400  text-white text-sm rounded shadow-xl hover:shadow">{i + 1}</a>
                </Link>
            ))}

            {page < lastPage && (
                <Link href={`/companies?page=${page + 1}`}>
                    <a className="py-2 px-4 text-white text-sm bg-blue-400 rounded shadow-xl hover:shadow">Next</a>
                </Link>
            )}
        </>
    )
}
