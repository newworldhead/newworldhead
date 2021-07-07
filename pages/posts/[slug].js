import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import CategoryLabel from '@/components/CategoryLabel'
import CategoryWidget from '@/components/CategoryWidget'
import RecentPostWidget from '@/components/RecentPostWidget'
import Breadcrumbs from '@/components/Global/BreadCrumbs'
import { API_URL } from '@/config/index'
import { formatDate } from '@/utils/date'
import { parse, timeByWordCount } from '@/utils/index'

export default function PostSlug({ post, allPosts, allCategories }) {
    const { title, date, category: { name }, body, author, coverimage } = post

    // counting the word count
    const timeToRead = timeByWordCount(body)

    return (
        <MainLayout
            title={`${title} | newworldhead.com`}
            description={"The best place for news and everything New World"}
        >

            <Section height={"auto"} place={"top"} >

                <div className="mt-6 mx-4">
                    <Breadcrumbs />
                </div>

                <div className="flex flex-col mb-4 md:mx-4 md:flex-row md:mx-0">

                    <div className="md:w-3/4 mt-6 bg-white rounded-lg">
                        <div className="w-full shadow-xl md:mx-0 md:flex">
                            <img className="rounded-lg shadow-xl" src={coverimage.url} alt={title} />
                        </div>
                        <div className="p-2 md:p-6">
                            <h2 className="text-3xl md:text-5xl leading-snug font-primary text-primary text-center capitalize tracking-normal py-10 md:text-6xl">{title}</h2>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-6 max-w-sm mx-auto font-semibold tracking-wide">
                                <h2>{author}</h2>
                                <h2>{formatDate(date)}</h2>
                                <h2>{timeToRead} Min Read</h2>
                                <CategoryLabel>{name}</CategoryLabel>
                            </div>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div id="article" className="mt-6 p-2 md:p-0 md:mx-4 text-secondary tracking-wide">{parse(body)}</div>
                        </div>
                    </div>

                    <div className="md:w-1/4 mt-6">
                        <div className="h-full w-full">
                            <div className="p-4 bg-secondary text-white md:ml-4">

                                <h2 className="text-4xl font-primary tracking-wider mt-2 mb-4">Recent Posts</h2>
                                {allPosts.map((post) => (
                                    <RecentPostWidget key={post.id} post={post} />
                                ))}

                                <h2 className="text-4xl font-primary tracking-wider mt-12 mb-4">Categories</h2>
                                {allCategories.map((category) => (
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

    //  get post by slug
    const getPost = await fetch(`${API_URL}/posts?slug=${slug}`)
    const post = await getPost.json()

    // get all posts
    const fetchAllPosts = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=4`)
    const allPosts = await fetchAllPosts.json()

    // get all categories
    const getAllCategories = await fetch(`${API_URL}/categories`)
    const allCategories = await getAllCategories.json()
    return {
        props: {
            post: post[0],
            allPosts,
            allCategories
        }
    }
}
