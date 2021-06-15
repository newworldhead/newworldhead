import Link from 'next/link'
import Button from '@/components/Button'

export default function Header() {
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

                <div className="hidden items-center uppercase tracking-widest font-secondary text-sm md:flex md:flex-row ">
                    <Link href="/posts">
                        <a className="py-3 px-4 hover:bg-primary">News</a>
                    </Link>
                    <Link href="/companies">
                        <a className="py-3 px-4 hover:bg-primary">Companies</a>
                    </Link>
                    <Button type={'button'} href={'/account/login'} width={'20'} py={'1'} name={'Login'} />
                </div>
            </nav>
        </header>
    )
}
