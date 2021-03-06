import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import CategoryLabel from '@/components/CategoryLabel'
import CategoryWidget from '@/components/CategoryWidget'
import RecentArticleWidget from '@/components/RecentArticleWidget'
import Breadcrumbs from '@/components/Global/BreadCrumbs'
import IYoutube from '@/components/Global/IYoutube'
import Disqus from '@/components/Global/Disqus'
import { API_URL } from '@/config/index'
import { formatDate } from '@/utils/date'
import { parse, timeByWordCount } from '@/utils/index'

export default function ArticleSlug({ article, articles, categories }) {
    const { title, date, category: { name }, excerpt, body, author, coverimage, embedId } = article

    // counting the word count
    const timeToRead = timeByWordCount(body)

    return (
        <MainLayout
            title={`${title} | newworldhead.com`}
            description={excerpt}
        >

            <Section height={"auto"} place={"top"} >

                <div className="container mx-auto flex flex-row items-center bg-secondary my-6 p-4">
                    <Breadcrumbs />
                </div>

                <div className="flex flex-col mb-4 md:mx-4 md:flex-row md:mx-0">

                    <div className="md:w-3/4 bg-secondary rounded-lg">
                        <div className="w-full shadow-xl md:mx-0 md:flex">
                            <img className="rounded-lg shadow-xl" src={coverimage.url} alt={title} />
                        </div>
                        <div className="p-2 md:p-6">
                            <h2 className="text-3xl md:text-5xl leading-snug font-primary text-white text-center capitalize tracking-normal py-10 md:text-6xl">{title}</h2>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-6 max-w-sm mx-auto font-semibold text-white tracking-wide">
                                <h2>{author}</h2>
                                <h2>{formatDate(date)}</h2>
                                <h2>{timeToRead} Min Read</h2>
                                <CategoryLabel>{name}</CategoryLabel>
                            </div>
                            <div className="border border-b-1 border-gray-100 w-4/5 mx-auto"></div>

                            <div id="article" className="mt-6 md:p-0 md:mx-4 tracking-wide text-white text-base font-sans md:mt-20">
                                {parse(body)}
                            </div>

                            {embedId && <IYoutube embedId={embedId} />}

                        </div>
                        <div className="my-10"></div>
                        <div className="px-10 py-6">
                            <Disqus article={article} />
                        </div>
                    </div>

                    <div className="md:w-1/4">
                        <div className="h-full w-full">
                            <div className="p-4 bg-secondary text-white md:ml-4">

                                <h2 className="text-4xl font-primary tracking-wider mt-2 mb-4">Recent Articles</h2>
                                {articles.map((article) => (
                                    <RecentArticleWidget key={article.id} article={article} />
                                ))}

                                <h2 className="text-4xl font-primary tracking-wider mt-12 mb-4">Categories</h2>
                                {categories.map((category) => (
                                    <CategoryWidget key={category.id} category={category} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    )
}

export async function getServerSideProps({ query: { slug } }) {

    // Will need to handle error and none found values.

    //  fetch a article by slug
    const fetchArticle = await fetch(`${API_URL}/posts?slug=${slug}`)
    const fetchedArticle = await fetchArticle.json()

    // get all posts
    const fetchPosts = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=4`)
    const fetchedPosts = await fetchPosts.json()

    // get all categories
    const fetchCategories = await fetch(`${API_URL}/categories`)
    const fetchedCategories = await fetchCategories.json()
    return {
        props: {
            article: fetchedArticle[0],
            articles: fetchedPosts,
            categories: fetchedCategories
        }
    }
}
