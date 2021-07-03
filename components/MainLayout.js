import Head from 'next/head'
import { useRouter } from 'next/router'
import CountDown from './Global/CountDown'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
export default function MainLayout({ title, keywords, description, children }) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className="flex flex-col h-screen">
                <CountDown />
                <Header />
                {router.pathname === "/" && <Hero />}
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </div>
    )
}

MainLayout.defaultProps = {
    title: 'NewWorldHead.com | Builds, Guides, Database & Tools for Amazon New World MMO',
    keywords: "new world, new world head, mmo, database, news",
    description: "The best place for news and everything New World"
}