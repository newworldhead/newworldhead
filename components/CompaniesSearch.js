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
            <form onSubmit={handleSubmit} className="flex flex-col mx-4 md:mx-0">
                <input
                    type="text"
                    value={term}
                    placeholder="Search Companies"
                    onChange={(e) => setTerm(e.target.value)}
                    className="
                        w-full
                        md:w-80
                        py-2 
                        px-2 
                        outline-none 
                        rounded 
                        flex-1
                    "/>
                <button
                    className="
                            block
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
                            hover:shadow
                            capitalize 
                            md:mx-0
                            md:w-28
                            focus:outline-none
                            ">
                    Search
                </button>
            </form>

        </div>
    )
}
