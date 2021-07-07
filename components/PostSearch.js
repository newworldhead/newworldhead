import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PostSearchComponent() {
    const [term, setTerm] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/posts/search?term=${term}`)
        setTerm('')
    }

    return (

        <form onSubmit={handleSubmit} className="md:col-start-7 md:col-end-9 mt-2 mx-4 md:mx-0">
            <input
                type="text"
                value={term}
                placeholder="Search Posts"
                onChange={(e) => setTerm(e.target.value)}
                className="
                    py-2 
                    px-2 
                    outline-none 
                    rounded w-full"
            />
            <button
                type="submit"
                className="
                    md:hidden
                    bg-blue-400 
                    border 
                    border-blue-400 
                    px-4 
                    py-2
                    mt-2
                    text-white
                    outline-none 
                    tracking-wider
                    rounded
                    shadow-xl
                    capitalize 
                    w-full
                    focus:outline-none
                    ">
                Search
            </button>
        </form>
    )
}
