import { formatDateForInput } from '@/utils/date'

import { API_URL } from "@/config/index"
export default async (req, res) => {
    if (req.method === 'POST') {

        req.body.map(async (post) => {

            const strapiRes = await fetch(`${API_URL}/updaters`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tag: post.blogTag,
                    title: post.title,
                    excerpt: post.excerpt,
                    link: post.link,
                    date: formatDateForInput(post.date)
                })
            })

            const data = await strapiRes.json()

            console.log(data);

            if (strapiRes.ok) {
                data.status(200).json({ message: 'Success' })
            } else {
                data.status(401).json({ message: 'Somthing went wrong' })
            }
        })

    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}