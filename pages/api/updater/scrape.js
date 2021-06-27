import cheerio from 'cheerio'

export default async (req, res) => {
    if (req.method === 'GET') {

        const posts = [];
        const url = 'https://www.newworld.com/en-us/news';
        const response = await fetch(url);

        if (response.ok) {
            const body = await response.text();
            const $ = cheerio.load(body);

            $('.ags-SlotModule').each((i, item) => {
                const blogTag = $(item).find('h4.ags-SlotModule-aboveImageBlogTag').text().replace(/\s\s+/g, '');
                const title = $(item).find('span.ags-SlotModule-contentContainer-heading').text().replace(/\s\s+/g, '');
                const excerpt = $(item).find('div.ags-SlotModule-contentContainer-text').text().replace(/\s\s+/g, '');
                const date = $(item).find('span.ags-SlotModule-contentContainer-date').text().replace(/\s\s+/g, '');
                const link = $(item).find('a.ags-SlotModule-spacer').attr('href');

                const post = {
                    blogTag,
                    title,
                    excerpt,
                    date,
                    link: `https://www.newworld.com${link}`
                }

                posts.push(post)
            })
            res.status(200).json(posts)
        } else {
            res.status(body.statusCode).json({ message: 'Error' })
        }

    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}