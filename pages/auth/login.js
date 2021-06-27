import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import MainLayout from "@/components/MainLayout"
import { FcGoogle } from 'react-icons/fc'
import AuthContext from 'context/AuthContext'
import { parseCookies } from '@/helpers/index'
import Loading from '@/components/Loading'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function LoginAuth() {
    const { login, error, user } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, password })
    }

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    if (user) {
        return <Loading />
    } else {
        return (
            <MainLayout
                title={`Login | newworldhead.com`}
                description={"The best place for news and everything New World"}
                className="relative"
            >
                <ToastContainer />

                <div className="container mx-auto h-full">

                    <div className="flex flex-row h-full">

                        <div className="hidden bg-login-section bg-cover bg-center bg-no-repeat md:w-2/3 md:flex">
                            <div className="bg-black h-full w-full bg-opacity-30"></div>
                        </div>
                        <div className="bg-white md:w-1/3 w-full flex flex-col md:flex-row justify-center">

                            <div className="w-5/6 mx-auto py-32">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="my-10 text-4xl font-primary capitalize tracking-wide">Log into your account</h1>

                                    {/* email address */}
                                    <div className="flex flex-col">
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
                                            rounded 
                                            outline-none 
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

                                    {/* forgot password */}
                                    <div className="flex flex-row justify-end">
                                        <Link href="/">
                                            <a className="mt-2 capitalize text-sm tracking-wide font-semibold hover:text-blue-400">forgot password?</a>
                                        </Link>
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
                                    "
                                    >log in</button>
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
                                        outline-none 
                                        focus:outline-none 
                                        hover:shadow
                                    "
                                >
                                    <div className="text-2xl">
                                        <FcGoogle />
                                    </div>
                                    log in with google
                                </button>

                                <div className="flex flex-row mt-8 capitalize">
                                    <p className="tracking-wide">Need an account?</p>
                                    <Link href="/auth/register">
                                        <a className="text-blue-400 font-semi-bold ml-1">create an account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export async function getServerSideProps({ req }) {
        
    const { token } = parseCookies(req)

    if (token) {
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
