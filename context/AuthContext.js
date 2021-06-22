import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

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
            router.push('/account/profile')
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
            router.push('/account/profile')
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

    // check if user is logeed in
    const checkUserLoggedIn = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/user`)
        const data = await res.json()

        if (res.ok) {
            setUser(data.user)
        } else {
            setUser(null)

            if (router.pathname === '/account/profile' ||
                router.pathname === '/companies/add' ||
                router.pathname === '/companies/edit/[id]') {
                router.push('/account/login');
            }

        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            error,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext
