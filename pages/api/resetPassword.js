import { API_URL } from "@/config/index"

export default async (req, res) => {
    if (req.method === 'POST') {
        const { code, password, confirmPassword } = req.body
        const strapiRes = await fetch(`${API_URL}/auth/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code,
                password,
                passwordConfirmation: confirmPassword
            })
        })
        const data = await strapiRes.json()

        if (strapiRes.ok) {
            res.status(200).json({ message: 'Password has now been reset' })
        } else {
            res.status(data.statusCode).json({ message: data.message[0].messages[0].message })
        }


    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}