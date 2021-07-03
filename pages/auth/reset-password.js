import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import AuthContext from '@/context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import router from 'next/router'

export default function ResetPasswordAuth({ privateCode }) {
    const [code, setCode] = useState(privateCode)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { resetPassword, message } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === "" || confirmPassword === "") {
            toast.error("Fields cannot be empty")
            return
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        if (!code) {
            toast.error("Error")
            return
        }

        resetPassword({ code, password, confirmPassword })
        toast(message)
        setCode('')
        setPassword('')
        setConfirmPassword('')
    }

    useEffect(() => {
        message && toast(message)
    }, [message])

    return (
        <MainLayout
            title={`Reset Password | newworldhead.com`}
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

                    <label htmlFor="password" className="sr-only">New Password</label>
                    <div className="
                        flex 
                        flex-col 
                        mb-10
                        md:w-2/5
                        md:mx-auto">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter New Password"
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

                        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
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
                                mt-1
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

export async function getServerSideProps({ query: { code } }) {

    if (!code) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            privateCode: code
        }
    }
}
