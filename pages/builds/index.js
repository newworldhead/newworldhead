import Link from 'next/link'
export default function BuildsIndex() {
    return (
        <div className="bg-under-construction-builds-section bg-cover bg-right-top md:bg-center">
            <div className="flex flex-col items-center justify-center h-screen text-center bg-black bg-opacity-70 font-secondary tracking-wide">

                <h3 className="text-base tracking-widest text-gray-200 uppercase" >in development</h3>
                <h1 className="text-3xl font-primary uppercase mt-4 tracking-widest text-gray-200 px-2 md:text-5xl">builds</h1>
                <div className="w-40 border-b-2 border-black my-8 border-gray-200 md:w-80"></div>
                <p className="w-5/6 text-base text-gray-200 md:w-4/12">We are sorry for the inconvenience, the character builds is under active development.</p>
                <div className="mt-10">
                    <Link href="/">
                        <a className="px-4 py-2 bg-blue-400 text-white capitalize rounded shadow-xl hover:shadow ">go back</a>
                    </Link>
                </div>

            </div>

        </div>
    )
}