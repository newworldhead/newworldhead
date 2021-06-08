import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-primary text-gray-100 shadow w-full">
            <nav className="container mx-auto md:flex md:justify-between ms:items-center">

                <div className="px-4 flex items-center justify-between md:px-0">
                    <div className="py-3">
                        <Link href="/">
                            <a className="py-3 uppercase tracking-widest">
                                New World <span className="text-blue-200">Head</span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            aria-label="toggle menu"
                            className="
                            text-white  
                            hover:text-blue-300 
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

                <div className="hidden items-center md:flex md:flex-row uppercase tracking-widest">
                    <Link href="/about">
                        <a className="py-3 px-4 hover:bg-secondary hover:text-blue-200">About</a>
                    </Link>
                    <Link href="/news">
                        <a className="py-3 px-4 hover:bg-secondary">News</a>
                    </Link>
                    <Link href="/database">
                        <a className="py-3 px-4 hover:bg-secondary">Database</a>
                    </Link>
                    <Link href="/contact">
                        <a className="py-3 px-4 hover:bg-secondary">Contact</a>
                    </Link>
                    <Link href="/account/login">
                        <a className="py-1 px-6 bg-blue-200 text-secondary border-2 border-blue-200 hover:bg-secondary hover:text-blue-200">Login</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
