import cookie from 'cookie'
import NextCors from 'nextjs-cors'
import { API_URL } from "@/config/index"

export default async (req, res) => {

    await NextCors(req, res, {
        // Options
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (req.method === 'POST') {
        const { identifier, password } = req.body

        const strapiRes = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await strapiRes.json()

        if (strapiRes.ok) {

            // set cookie
            res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'none',
                path: '/'
            }));

            res.status(200).json({ user: data.user })
        } else {
            res.status(data.statusCode).json({ message: data.message[0].messages[0].message })
        }


    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}