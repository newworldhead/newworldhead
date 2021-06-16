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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={term}
                    placeholder="Search Posts"
                    onChange={(e) => setTerm(e.target.value)}
                    className="py-2 px-2 outline-none md:w-96 rounded"
                />
            </form>

        </div>
    )
}
