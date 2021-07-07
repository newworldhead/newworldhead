import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import Section from '@/components/Section'
import PostGrid from '@/components/PostGrid'
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

            <div className="container mx-auto my-8">

                <div className="flex flex-col md:flex-row justify-between">
                    <Link href="/posts">
                        <a className="
                            md:w-40
                            bg-blue-400 
                            tracking-widest 
                            text-white 
                            text-center
                            capitalize 
                            border-2 
                            border-blue-400 
                            px-4 
                            py-2 
                            mx-4
                            tracking-wide
                            rounded
                            shadow-xl 
                            hover:shadow
                            md:mx-0">Go Back</a>
                    </Link>
                    <p className="self-end text-white capitalize mt-4 md:mt-0 mx-4">{searches.length} result</p>
                </div>
            </div>

            <SectionGrid>
                <div className="md:w-full mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 md:gap-y-0">
                        {searches.map((post) => (
                            <PostGrid key={post.id} post={post} />
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