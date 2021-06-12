import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import CategoryLabel from '@/components/CategoryLabel'
import { API_URL } from '@/config/index'

import ReactHtmlParser from 'react-html-parser'
// sNext.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function PostSlug({ news }) {
    const { cover_image, title, date, category, body, author } = news

    return (
        <MainLayout>
            <Section height={"auto"} place={"top"}>

                <Link href="/news">
                    <a className="bg-blue-200 text-primary uppercase border-2 border-blue-200 px-4 py-2 mx-4 hover:text-blue-200 hover:bg-transparent md:mx-0">Go Back</a>
                </Link>

                <div className="flex flex-col mx-4 md:flex-row md:mx-0">

                    <div className="md:w-3/4 mt-6 bg-white rounded-lg">
                        <div className="w-full md:mx-0 md:flex md:shadow-lg shadow-xl">
                            <img className="rounded-lg shadow-xl" src={cover_image} alt={title} />
                        </div>
                        <div className="p-2 md:p-6">
                            <h2 className="text-3xl font-primary text-gray-800 text-center capitalize tracking-normal py-10 md:text-5xl">{title}</h2>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <div className="flex flex-row justify-between items-center py-6 max-w-sm mx-auto">
                                <h2 className="">{author}</h2>
                                <h2 className="">{date}</h2>
                                <h2 className="">2 Min Read</h2>
                                <CategoryLabel>{category}</CategoryLabel>
                            </div>
                            <div className=" border border-b-1 border-gray-100 w-4/5 mx-auto"></div>
                            <p className="mt-6 text-gray-600">{ReactHtmlParser(body)}</p>
                        </div>
                    </div>

                    <div className="md:w-1/4 mt-6">
                        <div className="h-full w-full">
                            <div className="p-4 bg-white rounded-lg md:ml-4">
                                <h3>Most Recent</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </Section>
        </MainLayout>
    )
}

export async function getServerSideProps({ query: { slug } }) {

    const res = await fetch(`${API_URL}/api/news/${slug}`)
    const news = await res.json()

    return {
        props: {
            news: news[0]
        }
    }
}
