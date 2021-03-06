import EmailSubscriptions from "./Forms/EmailSubscriptions"

export default function Hero() {
    return (
        <section className="hidden bg-hero-mb bg-cover h-hero-mb bg-bottom bg-no-repeat md:flex md:flex-col md:h-hero md:bg-hero">
            <div className="h-screen bg-black bg-opacity-0 w-full h-full flex items-center md:bg-opacity-20">
                <div className="container mx-auto md:mx-8 md:mx-auto">
                    <h1 className="text-4xl text-white text-center font-primary md:text-left md:text-7xl">New World Head</h1>
                    <h2 className="mt-6 mx-4 md:mx-0 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-4">Providing New World players with tools and information to make their gameplay more enjoyable.</h2>
                    <h3 className="mt-16 mx-4 md:mx-0 text-base text-white text-center tracking-wide md:text-lg md:text-left md:mt-0">Subscribe To The Newsletter be the first to know what is going on.</h3>
                    <EmailSubscriptions />
                </div>
            </div>
        </section>
    )
}
