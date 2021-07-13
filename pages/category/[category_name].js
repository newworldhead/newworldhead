import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import ArticleGrid from '@/components/ArticleGrid'
import CategoryWidget from '@/components/CategoryWidget'
import RecentArticleWidget from '@/components/RecentArticleWidget'
import Breadcrumbs from '@/components/Global/BreadCrumbs'
import { API_URL } from '@/config/index'

export default function NewsCategoryName({ categories, category, articles }) {
    return (
        <MainLayout
            title={`Searching ${category.name} | newworldhead.com`}
            description={"The best place for news and everything New World"}
        >

            <div className="container mx-auto flex flex-row items-center bg-secondary p-4 my-6">
                <Breadcrumbs force={"articles"} />
            </div>

            <SectionGrid>
                <div className="md:w-3/4 mt-4 mb-10 md:my-4 ">
                    <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 gap-2 md:grid-cols-3 md:gap-4">
                        {category.posts.map((article) => (
                            <ArticleGrid key={article.id} article={article} />
                        ))}
                    </div>
                </div>

                <div className="hidden my-4 md:w-1/4 md:block">
                    <div className="bg-secondary rounded-lg ml-4 p-4 text-white">

                        <h2 className="text-4xl font-primary tracking-wider mt-8 mb-4">Categories</h2>
                        {categories.map((category) => (
                            <CategoryWidget key={category.id} category={category} />
                        ))}

                        <h2 className="text-4xl font-primary tracking-wider mt-16 mb-4">Recent Articles</h2>
                        {articles.map((article) => (
                            <RecentArticleWidget key={article.id} article={article} />
                        ))}

                    </div>
                </div>
            </SectionGrid>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { category_name } }) {

    // fetch categories
    const fetchCategories = await fetch(`${API_URL}/categories`)
    const fetchedCategories = await fetchCategories.json()

    // fetch category by query
    const fetchCategoryByQuery = await fetch(`${API_URL}/categories?name=${category_name}`)
    const fetchedCategoryByQuery = await fetchCategoryByQuery.json()

    // fetch posts
    const fetchArticles = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=4`)
    const fetchedArticles = await fetchArticles.json()

    return {
        props: {
            categories: fetchedCategories,
            category: fetchedCategoryByQuery[0],
            articles: fetchedArticles
        }
    }
}