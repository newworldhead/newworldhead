import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import MainLayout from "@/components/MainLayout"
import AuthContext from 'context/AuthContext'
import { FcGoogle } from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterAccount() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, error } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
        }

        register({ username, email, password })
    }

    useEffect(() => error && toast.error(error))

    return (
        <MainLayout>
            <ToastContainer />
            <div className=" flex flex-row h-screen">
                <div className="bg-white md:w-1/4 w-full flex flex-col md: flex-row justify-center">

                    <div className="w-5/6 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <h1 className="mb-8 text-3xl font-primary capitalize tracking-wide">Register for an account</h1>

                            {/* username */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="username"
                                >Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter Username"
                                    className="
                                        bg-gray-100 
                                        text-gray-400 
                                        border-2 
                                        border-gray-100 
                                        py-2 
                                        px-2 
                                        mt-2
                                        outline-none 
                                        rounded 
                                        focus:outline-none 
                                        focus:bg-white 
                                        focus:border-blue-400"
                                />
                            </div>

                            {/* email address*/}
                            <div className="flex flex-col mt-4">
                                <label
                                    htmlFor="email"
                                >Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Email Address"
                                    className="
                                        bg-gray-100 
                                        text-gray-400 
                                        border-2 
                                        border-gray-100 
                                        py-2 
                                        px-2 
                                        mt-2
                                        outline-none 
                                        rounded 
                                        focus:outline-none 
                                        focus:bg-white 
                                        focus:border-blue-400"
                                />
                            </div>

                            {/* password*/}
                            <div className="flex flex-col mt-4">
                                <label
                                    htmlFor="password"
                                >Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password"
                                    className="
                                        bg-gray-100 
                                        text-gray-400 
                                        border-2 
                                        border-gray-100 
                                        py-2 
                                        px-2 
                                        mt-2
                                        outline-none 
                                        rounded 
                                        focus:outline-none 
                                        focus:bg-white 
                                        focus:border-blue-400"
                                />
                            </div>

                            {/* confirm password*/}
                            <div className="flex flex-col mt-4">
                                <label
                                    htmlFor="confirmPassword"
                                >Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Enter Confirm Password"
                                    className="
                                        bg-gray-100 
                                        text-gray-400 
                                        border-2 
                                        border-gray-100 
                                        py-2 
                                        px-2 
                                        mt-2
                                        outline-none 
                                        rounded 
                                        focus:outline-none 
                                        focus:bg-white 
                                        focus:border-blue-400"
                                />
                            </div>

                            {/* submit button */}
                            <button
                                type="submit"
                                className="
                                    bg-blue-400
                                    text-white
                                    w-full
                                    rounded
                                    shadow-xl
                                    py-3
                                    capitalize
                                    font-semi-bold
                                    mt-6
                                    border
                                    border-blue-400
                                    tracking-wide
                                    hover:shadow
                                "
                            >Register</button>
                        </form>

                        <div className="border-b-2 border-gray-100 py-2 my-4"></div>

                        {/* google signin */}
                        <button
                            className="
                                    bg-white
                                    text-secondary
                                    w-full
                                    border
                                    rounded
                                    shadow-lg
                                    py-3
                                    capitalize
                                    mt-4
                                    font-semi-bold
                                    flex
                                    items-center
                                    justify-center
                                    gap-4
                                    tracking-wide
                                    hover:shadow
                                "
                        >
                            <div className="text-2xl">
                                <FcGoogle />
                            </div>
                            log in with google
                        </button>

                        <div className="flex flex-row mt-8 capitalize">
                            <p className="tracking-wide">have an account?</p>
                            <Link href="/account/login">
                                <a className="text-blue-400 font-semi-bold ml-1">login now</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden bg-register-section bg-cover bg-center bg-no-repeat md:w-3/4 md:flex">
                    <div className="bg-black h-full w-full bg-opacity-30"></div>
                </div>
            </div>
        </MainLayout>
    )
}
