import Head from 'next/head'

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
