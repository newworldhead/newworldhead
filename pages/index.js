import Link from 'next/link'
import Layout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import PostGrid from '@/components/PostGrid'
import RecentTrackedItem from '@/components/Home/RecentTrackedItem'
import RecentCompanies from '@/components/Home/RecentCompanies'
import { API_URL } from '@/config/index'

export default function Home({ posts, companies, newworldUpdates, tag }) {
  return (
    <Layout
      title={"Welcome to New World Head | newworldhead.com"}
      description={"The best place for news and everything New World"}
    >

      {/* display most recent posts */}
      <div className="container mx-auto md:mt-12">
        <p className="uppercase text-sm tracking-widest my-1 text-white mx-4 md:mx-0">recent</p>
        <h2 className="text-white uppercase text-4xl tracking-widest font-primary ml-4 md:ml-0">articles</h2>
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
              mx-4
              px-4
              py-2
              inline-block
              rounded
              shadow-xl
              mt-4
              hover:shadow
              md:mx-0
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

      {/* display most recent companies */}
      <div className="my-20">
        <div className="container mx-auto mt-10 md:mt-12">
          <p className="text-center uppercase text-sm tracking-widest my-1 text-white">companies</p>
          <h2 className="text-center text-white uppercase tracking-widest font-primary ml-4 md:ml-0 text-4xl">Making Your Mark</h2>
        </div>
        <SectionGrid>

          <div className="grid grid-cols-1 gap-2 md:gap-4 grid-cols-3 md:grid-cols-8 md:grid-rows-2">
            {companies.map((company) => (
              <RecentCompanies key={company.id} company={company} />
            ))}
          </div>

        </SectionGrid>
        <div className="container mx-auto flex flex-row items-center justify-center">
          <Link href="/companies">
            <a
              className="
              bg-blue-400
              border
              border-blue-400
              text-white
              mx-4
              px-4
              py-2
              inline-block
              rounded
              shadow-xl
              mt-4
              hover:shadow
              md:mx-0
            "
            >
              All Companies
            </a>
          </Link>
        </div>
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

  const getCompanies = await fetch(`${API_URL}/companies?_sort=created_at:DESC&_limit=24&name_ne=`)
  const companies = await getCompanies.json()

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
      tag: fetchedNewWorldUpdatesBasedOnTag
    }
  }
}