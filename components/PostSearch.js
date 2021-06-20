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

        <form onSubmit={handleSubmit} className="md:col-start-7 md:col-end-9 mt-2">
            <input
                type="text"
                value={term}
                placeholder="Search Posts"
                onChange={(e) => setTerm(e.target.value)}
                className="py-2 px-2 outline-none rounded w-full"
            />
        </form>
    )
}
