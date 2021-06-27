import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import MainLayout from "@/components/MainLayout"
import AuthContext from 'context/AuthContext'
import { parseCookies } from '@/helpers/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterAuth() {
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
        <MainLayout
            title={`Register | newworldhead.com`}
            description={"The best place for news and everything New World"}
            className="relative"
        >
            <ToastContainer />
            <div className="container m-auto h-full">
                <div className="flex flex-row min-h-full">

                    <div className="bg-white md:w-1/3 w-full flex flex-col md: flex-row justify-center">

                        <div className="w-5/6 mx-auto py-32">
                            <form onSubmit={handleSubmit}>
                                <h1 className="my-10 text-4xl font-primary capitalize tracking-wide">Register for an account</h1>

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

                                {/* email address */}
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

                                {/* password */}
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

                                {/* confirm password */}
                                <div className="flex flex-col mt-4">
                                    <label
                                        htmlFor="password"
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
                                        outline-none 
                                        focus:outline-none 
                                        hover:shadow
                                ">Register</button>
                            </form>

                            <div className="border-b-2 border-gray-100 py-2 my-4"></div>

                            <div className="flex flex-row mt-8 capitalize">
                                <p className="tracking-wide">Have an accounts?</p>
                                <Link href="/auth/login">
                                    <a className="text-blue-400 font-semi-bold ml-1">Login in now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden bg-register-section bg-cover bg-center bg-no-repeat md:w-2/3 md:flex">
                        <div className="bg-black h-full w-full bg-opacity-30"></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req)

    if (token && typeof token !== 'undefined') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {}
    }
}
