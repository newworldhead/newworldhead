import EmailSubscriptions from "./Forms/EmailSubscriptions"

export default function Hero() {
    return (
        <section className="bg-hero-mb bg-cover h-hero-mb bg-bottom bg-no-repeat flex flex-col md:h-hero md:bg-hero">
            <div className="h-screen bg-black bg-opacity-0 w-full h-full flex items-center md:bg-opacity-20">

                <div className="container mx-8 md:mx-auto">
                    <h1 className="text-5xl text-white text-center font-primary md:text-left md:text-7xl">New World Head</h1>
                    <h2 className="mt-6 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-4">Providing New World players with tools and information to make their gameplay more enjoyable.</h2>
                    <h3 className="mt-6 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-0">Subscribe To The Newsletter be the first to know what is going on.</h3>
                    <EmailSubscriptions />
                </div>


            </div>
        </section>
    )
}
