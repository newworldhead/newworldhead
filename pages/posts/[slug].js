import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import CategoryLabel from '@/components/CategoryLabel'
import CategoryWidget from '@/components/CategoryWidget'
import RecentPostWidget from '@/components/RecentPostWidget'
import { API_URL } from '@/config/index'
import { formatDate } from '@/utils/date'

import ReactHtmlParser from 'react-html-parser'

export default function PostSlug({ post, allPosts, allCategories }) {
    const { title, date, category: { name }, authorimage, body, author, coverimage } = post

    return (
        <MainLayout>
            <Section height={"auto"} place={"top"}>

                <Link href="/posts">
                    <a className="bg-blue-400 tracking-widest text-white text-sm uppercase border-2 border-blue-400 px-4 py-2 mx-4 font-secondary tracking-wide hover:text-blue-400 hover:bg-transparent md:mx-0">Go Back</a>
                </Link>

                <div className="flex flex-col mx-4 md:flex-row md:mx-0">

                    <div className="md:w-3/4 mt-6 bg-white rounded-lg">
                        <div className="w-full md:mx-0 md:flex md:shadow-lg shadow-xl">
                            <img className="rounded-lg shadow-xl" src={coverimage.url} alt={title} />
                        </div>
                        <div className="p-2 md:p-6">
                            <h2 className="text-5xl leading-snug font-primary text-gray-800 text-center capitalize tracking-normal py-10 md:text-6xl">{title}</h2>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div className="flex flex-row justify-between items-center py-6 max-w-sm mx-auto font-secondary tracking-wide">
                                <h2 className="">{author}</h2>
                                <h2 className="">{formatDate(date)}</h2>
                                <h2 className="">2 Min Read</h2>
                                <CategoryLabel>{name}</CategoryLabel>
                            </div>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div className="mt-6 text-gray-600 font-secondary tracking-wide">{ReactHtmlParser(body)}</div>
                        </div>
                    </div>

                    <div className="md:w-1/4 mt-6">
                        <div className="h-full w-full">
                            <div className="p-4 bg-white rounded-lg md:ml-4">

                                <h2 className="text-4xl font-primary tracking-wider my-4">About {author}</h2>
                                <div className="flex flex-col items-center">
                                    <img className="w-full rounded-lg shadow-xl hover:shadow" src={authorimage.url} alt="" />
                                </div>

                                <div className="mt-6 mb-12 font-secondary tracking-wide">
                                    <p>Creater of New World Head and a sheep lover, Baaa!</p>
                                </div>

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
