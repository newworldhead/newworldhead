import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import Section from '@/components/Section'
import ArticleGrid from '@/components/ArticleGrid'
import Breadcrumbs from '@/components/Global/BreadCrumbs'
import { API_URL } from '@/config/index'
import qs from 'qs'

export default function PostsSearch({ term, searches }) {
    return (
        <MainLayout
            title={`Searching ${term} | newworldhead.com`}
            description={"The best place for news and everything New World"}
        >

            <Section image={"category-search"} height={'medium'} positon={"center"}>
                <div className="flex justify-center items-center">
                    <h1 className="uppercase text-white text-3xl md:text-5xl font-primary text tracking-wider mx-4">
                        Searched for {term}
                    </h1>
                </div>
            </Section>

            <div className="container mx-auto flex flex-row justify-between items-center bg-secondary p-4 my-6">
                <Breadcrumbs term={term} />
                <p className="self-end text-white text-base md:text-xl capitalize md:mt-0 mx-4 tracking-wider">{searches.length} result</p>
            </div>

            <SectionGrid>
                <div className="md:w-full mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-10 md:gap-y-0">
                        {searches.map((article) => (
                            <ArticleGrid key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </SectionGrid>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { term } }) {

    const query = qs.stringify({
        _where: {
            _or: [
                { title_contains: term },
                { author_contains: term },
                { body_contains: term },
                { category_contains: term },
            ]
        }
    })

    const getSearchTerm = await fetch(`${API_URL}/posts?${query}`)
    const searches = await getSearchTerm.json()

    return {
        props: {
            term,
            searches
        }
    }
}