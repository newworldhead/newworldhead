import Head from 'next/head'
import Header from '@/components/Header'
export default function MainLayout({ title, keywords, description, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="stylesheet" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="container mx-auto my-7">{children}</main>
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Welcome to New World Head',
    keywords: "new world, new world head, mmo, database, news",
    description: "The best place for news and everything New World"
}