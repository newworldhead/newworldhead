import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'

export default function MobileDrop({ toggle }) {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className={`${!toggle && 'hidden'} bg-secondary w-full py-6 md:hidden`}>
            <div className="items-center uppercase tracking-widest text-sm text-white flex flex-col">
                <Link href="/articles">
                    <a className="py-3 w-full text-center hover:bg-primary">articles</a>
                </Link>
                <Link href="/builds">
                    <a className="py-3 w-full text-center hover:bg-primary">builds</a>
                </Link>
                <Link href="/companies">
                    <a className="py-3 w-full text-center hover:bg-primary">companies</a>
                </Link>
                <Link href="/database">
                    <a className="py-3 w-full text-center hover:bg-primary">database</a>
                </Link>
                {user ? <>
                    <Link href="/profile">
                        <a className="py-3 w-full text-center hover:bg-primary">profile</a>
                    </Link>
                    <button
                        type="button"
                        onClick={() => logout()}
                        className="
                                bg-blue-400
                                my-4
                                mx-4
                                py-2
                                px-4
                                w-full
                                text-white
                                text-center
                                uppercase
                                tracking-wider
                                shadow-xl
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
                                my-4
                                mx-4
                                py-2
                                px-4
                                w-full
                                text-white
                                text-center
                                uppercase
                                tracking-wider
                                shadow-xl
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
        </div>
    )
}
