import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import SectionGrid from '@/components/SectionGrid'
import PostGrid from '@/components/PostGrid'
import { API_URL } from '@/config/index'
export default function PostsIndex({ news }) {
    return (
        <MainLayout>

            <Section image={"news-section"} height={'medium'} positon={"center"}>
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-6xl font-primary font-thin">News</h1>
                </div>
            </Section>

            <div className="container px-2 md:mx-auto md:px-0">
                <form className="mt-8 md:space-y-0 md:flex-row">
                    <input id="search" type="text" className="px-2 py-2 w-full text-primary bg-white border border-gray-300 outline-none md:w-96" placeholder="Search" />
                </form>
            </div>

            <SectionGrid>
                {news.map((item) => (
                    <PostGrid key={item.id} news={item} />
                ))}
            </SectionGrid>
        </MainLayout>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`${API_URL}/api/news`)
    const news = await res.json()

    return {
        props: {
            news
        }
    }
}
