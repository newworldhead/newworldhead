import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import SectionPrimary from '@/components/SectionPrimary'
import PostHighlights from '@/components/PostHighLights'
import SectionGrid from '@/components/SectionGrid'
import PostGrid from '@/components/PostGrid'
import Search from '@/components/PostSearch'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function PostsIndex({ fetchedFirstThree, fetchedAllPostButFirstThree, fetchedPostsCount, page }) {
    return (
        <MainLayout
            title={"New World News, Updates & Guides | newworldhead.com"}
            description={"The best place for news and everything New World"}
        >

            <div className="container mx-4 md:mx-auto ">
                <h1 className="font-primary text-white text-4xl uppercase mt-10">All Posts</h1>
            </div>

            <div className="container mx-auto px-4 mt-4 w-full md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-8 justify-center items-center ">

                    <Link href="/">
                        <button
                            className="
                            bg-blue-400 
                            border 
                            border-blue-400 
                            px-4 
                            py-2
                            text-white
                            outline-none 
                            tracking-wider
                            rounded
                            shadow-xl
                            hover:shadow
                            capitalize 
                            w-28
                            focus:outline-none
                            ">
                            Go Back
                        </button>
                    </Link>
                    <Search />
                </div>
            </div>

            <SectionPrimary>
                <PostHighlights firstThree={fetchedFirstThree} />
            </SectionPrimary>

            <SectionGrid>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
                    {fetchedAllPostButFirstThree.map((post) => (
                        <PostGrid key={post.id} post={post} />
                    ))}
                </div>
            </SectionGrid>

            <div className="container mx-4 md:mx-auto my-4">
                <Pagination link={"posts"} page={page} count={fetchedPostsCount} />
            </div>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { page = 1 } }) {

    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // fetch the first three posts in descending order
    const fetchFirstThreePosts = await fetch(`${API_URL}/posts?_limit=3&_sort=date:DESC`)
    const fetchedFirstThree = await fetchFirstThreePosts.json()

    // fetch all posts but the first three in descending order
    const fetchAllPostButFirstThree = await fetch(`${API_URL}/posts?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
    const fetchedAllPostButFirstThree = await fetchAllPostButFirstThree.json()

    // fetch post count 
    const fetchPostsCount = await fetch(`${API_URL}/posts/count`)
    const fetchedPostsCount = await fetchPostsCount.json()

    return {
        props: {
            fetchedFirstThree,
            fetchedAllPostButFirstThree,
            fetchedPostsCount,
            page: +page
        }
    }
}
