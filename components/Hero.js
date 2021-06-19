import Button from '@/components/Button'

export default function Hero() {
    return (
        <section className="bg-hero-mb bg-cover h-hero-mb bg-bottom bg-no-repeat flex flex-col md:h-hero md:bg-hero">
            <div className="h-screen bg-black bg-opacity-0 w-full h-full flex items-center md:bg-opacity-20">

                <div className="container mx-8 md:mx-auto">
                    <h1 className="text-5xl text-white text-center font-primary md:text-left md:text-7xl">New World Head</h1>
                    <h2 className="mt-6 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-4">Providing New World players with tools and information to make their gameplay more enjoyable.</h2>
                    <h3 className="mt-6 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-0">Subscribe To The Newsletter be the first to know what is going on.</h3>
                    <form className="flex flex-col mt-8 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text" className="px-2 py-2 tracking-wide bg-white border border-white  outline-none md:w-96" placeholder="Email Address" />
                        <Button
                            type={"submit"}
                            href={"/"}
                            width={"full"}
                            py={2}
                            px={4}
                            mdw={40}
                            mdmx={4}
                            transform={"capitalize "}
                            name={'Subscribe'}
                        />
                    </form>
                </div>


            </div>
        </section>
    )
}
