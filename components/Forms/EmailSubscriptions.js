import { useState } from "react"
import { API_URL } from '@/config/index'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function EmailSubscriptions() {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email === '') {
            toast.error('Email must not be empty')
            return
        }

        const response = await fetch(`${API_URL}/subscriptions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })

        if (response.ok) {
            toast('Thank You for Subcribing!')
        } else {
            toast.error('Please try another email or try again')
            setEmail('')
        }
        setEmail('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
                flex 
                flex-col  
                mt-2 
                mx-4
                md:mx-0
                md:mt-8 
                space-y-3 
                md:space-y-0 
                md:flex-row
            ">
            <ToastContainer />
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                    px-2 
                    py-2 
                    tracking-wide 
                    bg-white 
                    border 
                    border-white  
                    outline-none 
                    md:w-96"
                placeholder="Enter Email Address"
            />
            <button
                type="submit"
                className="
                    md:mx-2
                    px-4
                    py-2
                    bg-blue-400
                    text-white
                    tracking-wide
                    capitalize
                    md:w-40
                    rounded
                    shadow-xl
                    hover:shadow
                    focus:outline-none
                "
            >
                Subscribe
            </button>
        </form>
    )
}
