export default function SectionGrid({ image, height, positon, color, children }) {
    return (
        <section className={`bg-${image} h-${height} bg-${positon} bg-cover bg-no-repeat mt-10`}>
            <div className={`bg-${color} bg-opacity-60 w-full h-full`}>
                <div className="container mx-auto flex justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}
