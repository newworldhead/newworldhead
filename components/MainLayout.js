import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
export default function MainLayout({ children }) {

    const router = useRouter()

    return (
        <>
            <Header />
            {router.pathname === "/" && <Hero />}
            <main>{children}</main>
            <Footer />
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Welcome to New World Head | newworldhead.com',
    keywords: "new world, new world head, mmo, database, news",
    description: "The best place for news and everything New World"
}