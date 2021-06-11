const { companies } = require('./data.json')

export default (req, res) => {

    const company = companies.filter((company) => company.slug === req.query.slug)


    if (req.method === 'GET') {
        res.status(200).json(company)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} is not allowed.` })
    }
}
