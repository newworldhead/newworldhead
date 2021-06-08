import Link from 'next/link'
export default function PageNotFound() {
    return (
        <div className="bg-page-not-found bg-cover bg-right-top md:bg-center">
            <div className="flex flex-col items-center justify-center h-screen text-center bg-black bg-opacity-70 ">

                <h3 className="text-base tracking-widest text-gray-200 uppercase">404 error</h3>
                <h1 className="text-3xl font-im-fell-dw-pica uppercase mt-4 tracking-widest text-gray-200 px-2 md:text-5xl">this page is missing!</h1>
                <div className="w-40 border-b-2 border-black my-8 border-gray-200 md:w-80"></div>
                <p className="w-5/6 text-base text-gray-200 md:w-4/12">The page you are looking may have been taken down or moved to another location.  We are sorry for the inconvenience.</p>
                <Link href="/">
                    <a className="py-2 px-6 shadow-lg text-secondary bg-blue-200 tracking-widest uppercase mt-6 border-2 border-blue-200 hover:bg-transparent hover:text-blue-200">Home</a>
                </Link>

            </div>

        </div>
    )
}
