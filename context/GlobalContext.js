import { createContext, useState } from 'react'
import { NEXT_URL } from '../config/index'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    // get scrapped posts from amazon new world
    const getScraped = async () => {

        console.log('Global Context Reached');

        const res = await fetch(`${NEXT_URL}/api/updater/scrape`)
        const data = await res.json()

        if (res.ok) {
            setPosts([...data]);
            sendToStrapi()
        } else {
            setError(data.message)
            setError(null)
        }
    }

    const sendToStrapi = async () => {
        if (!posts.length == 0) {
            const res = await fetch(`${NEXT_URL}/api/updater/push`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(posts)
            })
            const data = await res.json()

            if (data.ok) {
                res.status(200).json({ message: 'Sent' })
            } else {
                setError(data.message)
                setError(null)
            }
        }
    }

    return (
        <GlobalContext.Provider value={{
            getScraped
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext
