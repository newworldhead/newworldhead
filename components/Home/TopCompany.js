import Link from "next/link"
import { FaHeart, FaUserFriends } from 'react-icons/fa'
export default function TopCompany({ mostLikedCompany }) {
    const { name, logo, slug } = mostLikedCompany
    return (
        <div className="bg-white rounded w-96 relative">
            <Link href={`/companies/${slug}`}>
                <div className="flex flex-row items-center justify-center cursor-pointer">
                    <div className="w-full h-full">
                        <img data-tip={name} className="h-full w-full rounded" src={logo ? logo.url : 'https://via.placeholder.com/150x150'} alt={name} />
                    </div>
                </div>
            </Link>
            <div className="absolute bg-blue-400 bottom-5 right-5 px-4 py-2 text-white rounded shadow-xl">
                <div
                    data-tip={'33 Loves!'}
                    className="flex flex-row items-center gap-2 ">
                    <FaHeart />
                    <p>33</p>
                </div>
            </div>
            <div
                data-tip={'11 Members'}
                className="absolute bg-blue-400 bottom-5 left-5 px-4 py-2 text-white rounded shadow-xl">
                <div className="flex flex-row items-center gap-2">
                    <FaUserFriends />
                    <p>11</p>
                </div>
            </div>
        </div>
    )
}
