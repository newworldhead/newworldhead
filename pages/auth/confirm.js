import { useContext, useEffect } from "react"
import AuthContext from "@/context/AuthContext"
export default function confirm() {
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        logout()
    }, [])
    return (
        <div className="container mx-auto text-white w-full h-screen flex flex-col items-center justify-center capitalize">
            <h1 className="text-5xl font-primary tracking-widest">Please confirm your email</h1>
            <p className="mt-4">did you not get email?</p>
        </div>
    )
}
