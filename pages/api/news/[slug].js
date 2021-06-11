const { newsfeed } = require('./data.json')

export default (req, res) => {

    const news = newsfeed.filter((news) => news.slug === req.query.slug)


    if (req.method === 'GET') {
        res.status(200).json(news)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} is not allowed.` })
    }
}