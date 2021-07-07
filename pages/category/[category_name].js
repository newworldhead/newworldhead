import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import Section from '@/components/Section'
import PostGrid from '@/components/PostGrid'
import CategoryWidget from '@/components/CategoryWidget'
import RecentPostWidget from '@/components/RecentPostWidget'
import { API_URL } from '@/config/index'

export default function NewsCategoryName({ category, allCategories, allPosts }) {
    return (
        <MainLayout
            title={`Searching ${category.name} | newworldhead.com`}
            description={"The best place for news and everything New World"}
        >

            <Section image={"category-section"} height={'medium'} positon={"bottom"}>
                <div className="flex justify-center items-center">
                    <h1 className="capitalize text-white text-4xl md:text-5xl font-primary text-center">
                        You are searching: {category.name}
                    </h1>
                </div>
            </Section>

            <SectionGrid>
                <div className="md:w-3/4 mt-4 mb-10 md:my-4 ">
                    <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 gap-2 md:grid-cols-3 md:gap-4">
                        {category.posts.map((post) => (
                            <PostGrid key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                <div className="hidden my-4 md:w-1/4 md:block">
                    <div className="bg-secondary rounded-lg ml-4 p-4 text-white">

                        <h2 className="text-4xl font-primary tracking-wider mt-8 mb-4">Categories</h2>
                        {allCategories.map((category) => (
                            <CategoryWidget key={category.id} category={category} />
                        ))}

                        <h2 className="text-4xl font-primary tracking-wider mt-16 mb-4">Recent Posts</h2>
                        {allPosts.map((post) => (
                            <RecentPostWidget key={post.id} post={post} />
                        ))}


                    </div>
                </div>
            </SectionGrid>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { category_name } }) {

    const resAllCats = await fetch(`${API_URL}/categories`)
    const allCategories = await resAllCats.json()

    const res = await fetch(`${API_URL}/categories?name=${category_name}`)
    const category = await res.json()

    const fetchAllPosts = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=4`)
    const allPosts = await fetchAllPosts.json()

    return {
        props: {
            category: category[0],
            allCategories,
            allPosts
        }
    }
}