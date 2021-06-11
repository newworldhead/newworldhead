import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'

// sNext.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function PostSlug({ news }) {
    return (
        <MainLayout>
            <Section height={"primary"}>
                <h1 className="text-white text-5xl font-primary">{news.title}</h1>

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
