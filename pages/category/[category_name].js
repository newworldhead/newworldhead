import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import Section from '@/components/Section'
import PostGrid from '@/components/PostGrid'
import { API_URL } from '@/config/index'

export default function NewsCategoryName({ news, categories, category_name }) {
    return (
        <MainLayout>

            <Section image={"category-section"} height={'medium'} positon={"bottom"}>
                <div className="flex justify-center items-center">
                    <h1 className="capitalize text-white text-6xl font-primary font-thin">
                        You are searching: {category_name}
                    </h1>
                </div>
            </Section>

            <SectionGrid>
                {news.map((item) => (
                    <PostGrid key={item.id} news={item} />
                ))}
            </SectionGrid>

        </MainLayout>
    )
}

export async function getServerSideProps({ query: { category_name } }) {

    const res = await fetch(`${API_URL}/api/category/${category_name}`)
    const result = await res.json()
    const { news, categories } = result

    return {
        props: {
            news,
            categories,
            category_name
        }
    }
}