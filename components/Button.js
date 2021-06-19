import Link from 'next/link'
export default function Button({ type, href, width, py, px, mx, mdw, mdmx, transform, name }) {
    return (
        <Link href={href}>
            <button type={type} className={`
                w-${width}
                py-${py} 
                px-${px} 
                mx-${mx}
                md:w-${mdw}
                md:mx-${mdmx}
                rounded
                shadow-xl
                text-white 
                text-center
                bg-blue-400 
                tracking-widest
                ${transform} 
                border
                border-blue-400 
                focus:outline-none
                hover:shadow
            `}
            >{name}</button>
        </Link>
    )
}

Button.defaultProps = {
    type: "button",
    href: "/",
    width: "40",
    py: "0",
    px: "0",
    mx: "0",
    transform: "uppercase",
    name: "Home"
}
