import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const router = useRouter()
    useEffect(() => checkUserLoggedIn(), [])

    // register user
    const register = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await res.json()

        if (res.ok) {
            setUser(data.user)
            router.push('/auth/confirm')
        } else {
            setError(data.message)
            setError(null)
        }
    }

    // login user
    const login = async ({ email: identifier, password }) => {

        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await res.json()

        if (res.ok) {
            setUser(data.user)
            router.push('/profile')
        } else {
            setError(data.message)
            setError(null)
        }

    }

    // logout user
    const logout = async () => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST',
        })

        if (res.ok) {
            setUser(null)
            router.push('/')
        }
    }

    // forgot password
    const forgotPassword = async (email) => {
        const res = await fetch(`${NEXT_URL}/api/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })

        const data = await res.json()

        if (res.ok) {
            setMessage(data.message)
            setMessage(null)
        } else {
            setError(data.message)
            setError(null)
        }
    }

    // reset password
    const resetPassword = async ({ code, password, confirmPassword }) => {
        const res = await fetch(`${NEXT_URL}/api/resetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code,
                password,
                confirmPassword
            })
        })

        const data = await res.json()

        if (res.ok) {
            setMessage(data.message)
            setMessage(null)
        } else {
            setError(data.message)
            setError(null)
        }
    }

    // check if user is logeed in
    const checkUserLoggedIn = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/user`)
        const data = await res.json()

        if (res.ok) {
            setUser(data.user)
        } else {
            setUser(null)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            error,
            register,
            login,
            logout,
            forgotPassword,
            resetPassword,
            message
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext
