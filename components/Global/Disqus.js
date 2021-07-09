import { DiscussionEmbed } from 'disqus-react'

export default function Disqus({ article }) {
    const { id, title, slug } = article
    const disqusShortname = "newworldhead"

    const disqusConfig = {
        url: `https://www.newworldhead.com/articles/${slug}`,
        identifier: id, // Single post id
        title: title // Single post title
    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
                width={420}
                height={320}
            />
        </div>
    )
}
