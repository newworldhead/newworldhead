export default function Section({ image, height, color, positon, children }) {
    return (
        <section className={`bg-${image} h-${height} bg-${positon} bg-cover bg-no-repeat`}>
            <div className={`bg-${color} bg-opacity-30 h-full w-full`}>
                <div className="container mx-auto py-10">
                    {children}
                </div>
            </div>
        </section>
    )
}

Section.defaultProps = {
    image: "https://via.placeholder.com/1500",
    height: "auto",
    positon: "center",
    color: "black"
}