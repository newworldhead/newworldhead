import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import Section from '@/components/Section'
import PostGrid from '@/components/PostGrid'
import { API_URL } from '@/config/index'
import qs from 'qs'

export default function PostsSearch({ term, searches }) {

    return (
        <MainLayout title="Search Results | New World Head">

            <Section image={"category-search"} height={'medium'} positon={"center"}>
                <div className="flex justify-center items-center">
                    <h1 className="uppercase text-white text-5xl font-primary text tracking-wider">
                        Searched for {term}
                    </h1>
                </div>
            </Section>

            <div className="container mx-auto my-8">

                <div className="flex justify-between">
                    <Link href="/posts">
                        <a className="bg-blue-400 tracking-widest text-white text-sm uppercase border-2 border-blue-400 px-4 py-2 mx-4 font-secondary tracking-wide hover:text-blue-400 hover:bg-transparent md:mx-0">Go Back</a>
                    </Link>
                    <p className="self-end text-white capitalize">{searches.length} result were found.</p>
                </div>
            </div>

            <SectionGrid>
                <div className="md:w-full">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
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