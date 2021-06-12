const { newsfeed } = require('../news/data.json')

export default (req, res) => {

    // get categories
    const categories = newsfeed.map((post) => post.category)

    // get unique categories
    const uniqueCategories = [...new Set(categories)]

    // filter based on param value
    const news = newsfeed.filter((news) => news.category === req.query.category_name)

    if (req.method === 'GET') {
        res.status(200).json({
            categories: uniqueCategories,
            news
        })
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} is not allowed.` })
    }
}