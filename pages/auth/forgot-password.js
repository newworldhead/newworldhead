import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
import MainLayout from "@/components/MainLayout"
import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPasswordAuth() {
    const [email, setEmail] = useState('')
    const { forgotPassword, message } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);

        if (email === '') {
            toast.error('Please Enter a Valid Email')
        }

        forgotPassword({ email })
        toast(message)
    }

    useEffect(() => {
        message && toast(message)
    }, [message])
    return (
        <MainLayout
            title={`Forgot Password | newworldhead.com`}
            description={"The best place for news and everything New World"}
            className="relative"
        >
            <ToastContainer />
            <div className="container mx-auto flex flex-col h-full w-full">
                <div>

                </div>
                <form
                    onSubmit={handleSubmit}
                    className="
                        mx-4
                        md:my-auto
                        bg-white
                        p-4
                        justify-center 
                        items-center
                        text-center
                        capitalize
                        rounded
                        md:w-4/5
                        md:p-10
                        md:m-auto
                    "
                >
                    <h1 className="font-primary text-5xl tracking-wide mt-16">New World <span className="text-blue-400">Head</span></h1>
                    <p className="font-bold mt-10 tracking-wide text-sm">Reset your password</p>
                    <p className="md:w-2/5 md:mx-auto mt-2 text-gray-600">enter your email and we'll send you a link to reset your password.</p>

                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="
                            flex 
                            flex-col 
                            mb-10
                            md:w-2/5
                            md:mx-auto">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email address"
                            className="
                            
                            bg-gray-100 
                            text-gray-400 
                            border-2 
                            border-gray-100 
                            py-2 
                            px-2 
                            mt-8
                            outline-none 
                            rounded 
                            focus:outline-none 
                            focus:bg-white 
                            focus:border-blue-400"
                        />

                        <button
                            className="
                                block
                                w-1/2
                                bg-blue-400
                                text-white
                                w-full
                                rounded
                                shadow-xl
                                py-3
                                capitalize
                                font-semi-bold
                                mt-2
                                border
                                border-blue-400
                                tracking-wide
                                outline-none 
                                focus:outline-none 
                                hover:shadow
                            "
                        >reset your password</button>
                    </div>
                    <div className="flex flex-row mt-8 mb-10 md:w-2/5 md:mx-auto capitalize">
                        <p className="tracking-wide">Need an account?</p>
                        <Link href="/auth/register">
                            <a className="text-blue-400 font-semi-bold ml-1">create an account</a>
                        </Link>
                    </div>
                </form>

            </div>
        </MainLayout>
    )
}
