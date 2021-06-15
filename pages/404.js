import Button from '@/components/Button'

export default function PageNotFound() {
    return (
        <div className="bg-page-not-found bg-cover bg-right-top md:bg-center">
            <div className="flex flex-col items-center justify-center h-screen text-center bg-black bg-opacity-70 font-secondary tracking-wide">

                <h3 className="text-base tracking-widest text-gray-200 uppercase" >404 error</h3>
                <h1 className="text-3xl font-primary uppercase mt-4 tracking-widest text-gray-200 px-2 md:text-5xl">this page is missing!</h1>
                <div className="w-40 border-b-2 border-black my-8 border-gray-200 md:w-80"></div>
                <p className="w-5/6 text-base text-gray-200 md:w-4/12">The page you are looking may have been taken down or moved to another location.  We are sorry for the inconvenience.</p>
                <div className="mt-6">
                    <Button type={'button'} href={'/'} py={2} name={'Home'} />
                </div>

            </div>

        </div>
    )
}
