import MainLayout from '@/components/MainLayout'
import SectionPrimary from '@/components/SectionPrimary'
import PostHighlights from '@/components/PostHighLights'
import SectionGrid from '@/components/SectionGrid'
import PostGrid from '@/components/PostGrid'
import Search from '@/components/PostSearch'
import { API_URL } from '@/config/index'

export default function PostsIndex({ posts, firstThree }) {
    return (
        <MainLayout>

            <div className="container mx-4 md:mx-auto mt-10">
                <Search />
            </div>

            <SectionPrimary>
                <PostHighlights firstThree={firstThree} />
            </SectionPrimary>

            <SectionGrid>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
                    {posts.map((post) => (
                        <PostGrid key={post.id} post={post} />
                    ))}
                </div>
            </SectionGrid>

        </MainLayout>
    )
}

export async function getStaticProps() {

    const getFirstThree = await fetch(`${API_URL}/posts?_limit=3&_sort=date:DESC`)
    const getAllPosts = await fetch(`${API_URL}/posts?_sort=date:DESC&_start=3`)

    const firstThree = await getFirstThree.json()
    const posts = await getAllPosts.json()

    return {
        props: {
            posts,
            firstThree
        }
    }
}
