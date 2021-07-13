import { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { API_URL } from '@/config/index'


export default function LikeMe({ company, user, token, iLike }) {

    const [like, setLike] = useState(iLike && iLike.liked || false)
    const [error, setError] = useState('')

    const handleClick = async () => {
        if (!user) {
            return toast.error('You must be logged in to Like')
        }
        setLike(!like)
    }

    useEffect(async () => {
        if (user) {
            const res = await fetch(`${API_URL}/likes/${iLike.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    company: company.id,
                    liked: like
                })
            })

            const data = await res.json();

            if (data.message) {
                setError(data.message)
            }
        }
    }, [like])

    return (
        <>
            {error && toast.error(error)}
            < ToastContainer />
            <div className="
                    text-blue-400 
                    text-3xl 
                    cursor-pointer 
                    absolute
                    p-1
                    md:w-0
                    rounded
                    shadow-xl
                    top-4
                    right-16 
                    md:left-4
                ">
                <div className="flex flex-row gap-3">
                    <button
                        onClick={handleClick}
                        className="focus:outline-none"
                    >
                        {like ? (
                            <span data-tip="Dislike">
                                <FaHeart />
                            </span>
                        ) : (
                            <span data-tip="Like">
                                <FaRegHeart />
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
