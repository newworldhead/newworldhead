import { useState } from "react"

export default function Hover({ text }) {

    const [show, setShow] = useState(true)

    const =

    return (
        <div className={`${show ? 'block' : 'hidden'} absolute -top-12 left-10 px-4 py-2 bg-black`}>
            <p className="text-white">{text}</p>
        </div>
    )
}
