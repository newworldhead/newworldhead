export default function SectionGrid({ image, height, positon, color, children }) {
    return (
        <section className={`bg-${image} h-${height} bg-${positon} bg-cover bg-no-repeat`}>
            <div className={`bg-${color} bg-opacity-30 w-full`}>
                <div className="container mx-auto py-8 flex justify-center">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-8">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
