import Button from '@/components/Button'
import API_URL from '@/config/index'

export default function Hero() {
    return (
        <section className="bg-hero-mb bg-cover h-hero-mb bg-bottom bg-no-repeat flex flex-col md:h-hero md:bg-hero">
            <div className="h-screen bg-black bg-opacity-0 w-full h-full flex items-center md:bg-opacity-20">

                <div className="container mx-8 md:mx-auto">
                    <h1 className="text-5xl text-white text-center font-primary md:text-left md:text-7xl">New World Head</h1>
                    <h2 className="mt-6 text-base text-white text-center md:text-lg md:text-left md:mt-4">Providing New World players with tools and information to make their gameplay more enjoyable.</h2>
                    <h3 className="mt-6 text-base text-white text-center md:text-lg md:text-left md:mt-0">Subscribe To The Newsletter be the first to know what is going on.</h3>
                    <form className="flex flex-col mt-8 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text" className="px-2 py-2 text-primary bg-white border border-gray-300 outline-none md:w-96" placeholder="Email Address" />

                        {/* <button type="submit" className="focus:outline-none w-full px-4 py-2 text-sm tracking-widest text-white bg-blue-200 text-secondary border-2 border-blue-200 uppercase md:w-40 md:mx-4">
                            Subscribe
                        </button> */}
                        <Button
                            type={"submit"}
                            href={"/"}
                            width={"full"}
                            py={2}
                            px={4}
                            mdw={40}
                            mdmx={4}
                            name={'Subscribe'}
                        />
                    </form>
                </div>


            </div>
        </section>
    )
}
