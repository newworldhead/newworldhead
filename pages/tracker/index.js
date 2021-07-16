import MainLayout from "@/components/MainLayout"
import { API_URL } from "@/config/index"
import RecentTrackedItem from "@/components/Tracker/RecentTrackedItem"
export default function TrackerIndex({ updates }) {

    return (
        <MainLayout>
            <section className="container mx-auto">
                <div className="md:flex md:flex-col md:items-center">
                    <h1 className="mt-20 text-white text-5xl font-primary tracking-wide capitalize">new world tracked news</h1>
                    {updates.map((update) => (
                        <RecentTrackedItem key={update.id} update={update} />
                    ))}
                </div>
            </section>
        </MainLayout>
    )
}

export async function getServerSideProps() {

    // fetch new world updates from website
    const fetchNewWorldUpdates = await fetch(`${API_URL}/scraper?_sort=id:ASC`)
    const fetchedNewWorldUpdates = await fetchNewWorldUpdates.json()

    return {
        props: {
            updates: fetchedNewWorldUpdates
        }
    }
}