import Link from 'next/link'
export default function Button({ type, href, width, py, px, mx, mdw, mdmx, name }) {
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
                shadow-lg 
                text-secondary 
                text-center
                bg-blue-200 
                tracking-widest 
                uppercase 
                border-2 
                border-blue-200 
                focus:outline-none
                hover:bg-transparent 
                hover:text-blue-200`}
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
    name: "Home"
}
