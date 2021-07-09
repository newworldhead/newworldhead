import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from 'context/AuthContext'

export default function Header({ toggle, setToggle }) {
    const { user, logout } = useContext(AuthContext)
    return (
        <header className="bg-secondary text-gray-100 shadow w-full">
            <nav className="container mx-auto md:flex md:justify-between ms:items-center">
                <div className="px-4 flex items-center justify-between md:px-0">
                    <div className="py-3">
                        <Link href="/">
                            <a className="py-3 uppercase tracking-widest font-primary">
                                New World <span className="text-blue-400">Head</span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setToggle(!toggle)}
                            type="button"
                            aria-label="toggle menu"
                            className="
                            text-white  
                            hover:text-blue-400 
                            focus:outline-none"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>

                </div>

                <div className="hidden items-center uppercase tracking-widest text-sm md:flex md:flex-row ">
                    <Link href="/articles">
                        <a className="py-3 px-4 hover:bg-primary">Articles</a>
                    </Link>
                    <Link href="/companies">
                        <a className="py-3 px-4 hover:bg-primary">Companies</a>
                    </Link>
                    {user ? <>
                        <Link href="/profile">
                            <a className="py-3 px-4 hover:bg-primary">Profile</a>
                        </Link>
                        <button
                            type="button"
                            onClick={() => logout()}
                            className="
                                bg-blue-400
                                py-2
                                px-4
                                text-white
                                uppercase
                                tracking-wider
                                shadow-xl
                                rounded
                                border
                                border-blue-400 
                                focus:outline-none
                                hover:shadow
                            ">
                            Logout
                        </button>
                    </> : <>
                        <Link href="/auth/login">
                            <a
                                className="
                                    bg-blue-400
                                    py-2
                                    px-4
                                    text-white
                                    uppercase
                                    tracking-wider
                                    shadow-xl
                                    rounded
                                    border
                                    border-blue-400 
                                    focus:outline-none
                                    hover:shadow
                                ">
                                Login
                            </a>
                        </Link>
                    </>}

                </div>
            </nav>
        </header>
    )
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