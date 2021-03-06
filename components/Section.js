export default function Section({ image, height, color, positon, attachment, place, px, children }) {
    return (
        <section className={`bg-${image} h-${height} bg-${positon} bg-cover bg-no-repeat bg-${attachment}`}>
            <div className={`bg-${color} bg-opacity-0 h-full w-full flex items-${place}`}>
                <div className={`container mx-auto md:px-${px} relative`}>
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
    color: "black",
    place: "center",
    px: "0",

}