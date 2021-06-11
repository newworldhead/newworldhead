import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
export default function MainLayout({ title, keywords, description, children }) {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="stylesheet" href="/favicon.ico" />
            </Head>

            <Header />
            {router.pathname === "/" && <Hero />}
            <main>{children}</main>
            <Footer />
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Welcome to New World Head',
    keywords: "new world, new world head, mmo, database, news",
    description: "The best place for news and everything New World"
}