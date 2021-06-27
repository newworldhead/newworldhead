import Link from 'next/link'
import Layout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import PostGrid from '@/components/PostGrid'
import RecentTrackedItem from '@/components/Home/RecentTrackedItem'
import TopCompany from '@/components/Home/TopCompany'
import RecentCompanies from '@/components/Home/RecentCompanies'
import { API_URL } from '@/config/index'

export default function Home({ posts, companies, newworldUpdates, mostLikedCompany, tag }) {
  return (
    <Layout
      title={"Welcome to New World Head | newworldhead.com"}
      description={"The best place for news and everything New World"}
    >

      {/* display most recent posts */}
      <div className="container mx-auto md:mt-12">
        <h2 className="text-white uppercase text-4xl tracking-widest font-primary ml-4 md:ml-0">Recent Posts</h2>
      </div>
      <SectionGrid>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
          {posts.map((post) => (
            <PostGrid key={post.id} post={post} />
          ))}
        </div>
      </SectionGrid>
      <div className="container mx-auto">
        <Link href="/posts">
          <a
            className="
              bg-blue-400
              border
              border-blue-400
              text-white
              px-4
              py-2
              inline-block
              rounded
              shadow-xl
              mt-4
              hover:shadow
            "
          >
            All Posts
          </a>
        </Link>
      </div>


      {/* display most recent tracked */}
      <SectionGrid image={'home-second-section'} height={'auto'} positon={'fixed'} color={'black'}>
        <RecentTrackedItem newworldUpdates={newworldUpdates[0]} />
      </SectionGrid>

      {/* display top and most recent companies */}
      <div className="my-32">
        <div className="container mx-auto mt-10 md:mt-12">
          <p className="text-center uppercase text-sm tracking-widest my-1 text-white">companies</p>
          <h2 className="text-center text-2xl text-white uppercase tracking-widest font-primary ml-4 md:ml-0 md:text-4xl">Making Your Mark</h2>
        </div>
        <SectionGrid>
          <div className="flex flex-col md:flex-row">

            {/* top company */}

            <div className="w-1/2 mx-auto md:mx-10 flex flex-col items-center">
              <h3 className="text-center text-lg text-white uppercase tracking-widest font-primary ml-4 md:ml-0 md:text-2xl md:my-4">Most Liked</h3>
              <TopCompany mostLikedCompany={mostLikedCompany} />
            </div>
            <div className="mx-auto w-full my-10 md:my-0 md:w-1/2">

              {/* recent companies */}
              <h3 className="text-center text-lg text-white uppercase tracking-widest font-primary ml-4 md:ml-0 md:text-2xl md:my-4">Most Recent</h3>
              <div className="grid grid-cols-1 gap-2 md:gap-4 grid-cols-3 md:grid-cols-4">
                {companies.map((company) => (
                  <RecentCompanies key={company.id} company={company} />
                ))}
              </div>
            </div>
          </div>

        </SectionGrid>
      </div>

      {/* display most recent tracked */}
      <SectionGrid image={'home-third-section'} height={'auto'} positon={'fixed'} color={'black'}>
        <RecentTrackedItem newworldUpdates={tag[0]} />
      </SectionGrid>

    </Layout >
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=5`)
  const posts = await res.json()

  const getCompanies = await fetch(`${API_URL}/companies?_sort=created_at:DESC&name_ne=`)
  const companies = await getCompanies.json()

  // fetch company by id, this is a placeholder for a like rated system
  const fetchMostLikedCompany = await fetch(`${API_URL}/companies/4`)
  const fetchedMostLikedCompany = await fetchMostLikedCompany.json()

  // fetch new world updates from website
  const fetchNewWorldUpdates = await fetch(`${API_URL}/updaters`)
  const fetchedNewWorldUpdates = await fetchNewWorldUpdates.json()

  // get fetchedNewWorldUpdates based on tag 
  const fetchedNewWorldUpdatesBasedOnTag = fetchedNewWorldUpdates.filter((item) => item.tag === 'lore')

  return {
    props: {
      posts: posts,
      companies,
      newworldUpdates: fetchedNewWorldUpdates,
      mostLikedCompany: fetchedMostLikedCompany,
      tag: fetchedNewWorldUpdatesBasedOnTag
    }
  }
}