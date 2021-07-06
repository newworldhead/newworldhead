import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PostSearchComponent() {
    const [term, setTerm] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/companies?term=${term}`)
        setTerm('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full" >
                <input
                    type="text"
                    value={term}
                    placeholder="Search Companies"
                    onChange={(e) => setTerm(e.target.value)}
                    className="py-2 px-2 outline-none w-full md:w-full rounded flex-1"
                />
            </form>

        </div>
    )
}
