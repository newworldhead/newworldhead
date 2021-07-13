import MainLayout from '@/components/MainLayout'
import SectionPrimary from '@/components/SectionPrimary'
import ArticleHighlights from '@/components/ArticleHighLights'
import SectionGrid from '@/components/SectionGrid'
import ArticleGrid from '@/components/ArticleGrid'
import ArticleSearch from '@/components/ArticleSearch'
import Pagination from '@/components/Pagination'
import BreadCrumbs from '@/components/Global/BreadCrumbs'
import ArticleFilter from '@/components/Articles/ArticleFilter'
import { API_URL, PER_PAGE } from '@/config/index'

export default function ArticlesIndex({ pinned, articles, fetchedArticleCount, page, categories }) {

    return (
        <MainLayout
            title={"New World News, Updates & Guides | newworldhead.com"}
            description={"The best place for news and everything New World"}
        >

            <div className="container mx-auto">
                <h1 className="font-primary text-white text-4xl uppercase mx-4 md:mx-0 md:mt-10 ">All Articles</h1>
            </div>

            <div className="container mx-auto flex flex-row items-center bg-secondary p-4 my-6">
                <BreadCrumbs />
            </div>

            <SectionPrimary>
                <ArticleHighlights firstThree={pinned} />
            </SectionPrimary>

            <div className="container mx-auto md:mt-20 w-full md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-8 justify-center items-center ">
                    {categories.map((category) => {
                        const { id } = category
                        return <ArticleFilter key={id} category={category} />
                    })}
                    <ArticleSearch />
                </div>
            </div>

            <SectionGrid>
                <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-4 md:gap-4">
                    {articles.map((article) => {
                        const { id } = article
                        return <ArticleGrid key={id} article={article} />
                    })}
                </div>
            </SectionGrid>

            <div className="container mx-4 md:mx-auto my-4">
                <Pagination link={"articles"} page={page} count={fetchedArticleCount} />
            </div>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { page = 1 } }) {

    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // fetch pinned articles
    const fetchPinnedArticles = await fetch(`${API_URL}/posts?_limit=3&_sort=date:DESC&_pinned=true`)
    const fetchedPinnedArticles = await fetchPinnedArticles.json()

    // fetch all articles but the first three in descending order
    const fetchArticles = await fetch(`${API_URL}/posts?_sort=date:DESC`)
    const fetchedArticles = await fetchArticles.json()

    // fetch articles count 
    const fetchArticleCount = await fetch(`${API_URL}/posts/count`)
    const fetchedArticleCount = await fetchArticleCount.json()

    // fetch categories
    const fetchCategories = await fetch(`${API_URL}/categories`)
    const fetchedCategories = await fetchCategories.json()

    return {
        props: {
            pinned: fetchedPinnedArticles,
            articles: fetchedArticles,
            fetchedArticleCount,
            page: +page,
            categories: fetchedCategories
        }
    }
}
