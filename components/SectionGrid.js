export default function SectionGrid({ image, height, positon, color, children }) {
    return (
        <section className={`bg-${image} h-${height} bg-${positon} bg-cover bg-no-repeat md:my-4`}>
            <div className={`bg-${color} bg-opacity-30 w-full`}>
                <div className="container mx-auto flex justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}
