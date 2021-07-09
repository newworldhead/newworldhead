import dynamic from "next/dynamic";
import Link from 'next/link'
import Layout from '@/components/MainLayout'
import SectionGrid from '@/components/SectionGrid'
import ArticleGrid from '@/components/ArticleGrid'
import RecentTrackedItem from '@/components/Home/RecentTrackedItem'
import RecentCompanies from '@/components/Home/RecentCompanies'
import { API_URL } from '@/config/index'

export default function Home({ articles, companies, newworldUpdates, tag }) {

  const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
  });

  return (
    <Layout
      title={"Welcome to New World Head | newworldhead.com"}
      description={"The best place for news and everything New World"}
    >
      <ReactTooltip />
      {/* display most recent articles */}
      <div className="container mx-auto mt-6 md:mt-12">
        <p className="uppercase text-sm tracking-widest my-1 text-white mx-4 md:mx-0">recent</p>
        <h2 className="text-white uppercase text-4xl tracking-widest font-primary ml-4 md:ml-0">articles</h2>
      </div>
      <SectionGrid>

        {articles.length <= 0 ? (
          <p className="capitalize text-white text-3xl">no articles where found</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-4 md:gap-4">
            {articles.map((article) => (
              <ArticleGrid key={article.id} article={article} />
            ))}
          </div>
        )}

      </SectionGrid>
      <div className="container mx-auto mb-20">
        <Link href="/articles">
          <a
            className="
              bg-blue-400
              border
              border-blue-400
              text-white
              text-center
              px-4
              py-2
              rounded
              shadow-xl
              mt-4             
              block
              mx-4
              md:w-28
              hover:shadow
              md:mx-0
            "
          >
            All Articles
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

          {companies.length <= 0 ? (
            <p className="capitalize text-white text-3xl">no article where found</p>
          ) : (
            <div className="grid grid-cols-1 gap-2 md:gap-4 grid-cols-3 md:grid-cols-8 md:grid-rows-2">
              {companies.map((company) => (
                <RecentCompanies key={company.id} company={company} />
              ))}
            </div>
          )}

        </SectionGrid>
        <div className="container mx-auto flex flex-row items-center justify-center">
          <Link href="/companies">
            <a
              className="
              bg-blue-400
              border
              border-blue-400
              text-white
              text-center
              px-4
              py-2
              w-full
              md:w-40
              inline-block
              rounded
              shadow-xl
              mt-4
              mx-4
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

  // fetch articles
  const fetchArticles = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=12`)
  let fetchedArticles = await fetchArticles.json()
  if (fetchedArticles.statusCode === 403) {
    fetchedArticles = []
  }


  // fetch companies
  const fetchCompanies = await fetch(`${API_URL}/companies?_sort=created_at:DESC&_limit=24&name_ne=`)
  let fetchedCompanies = await fetchCompanies.json()
  if (fetchedCompanies.statusCode === 403) {
    fetchedCompanies = []
  }

  // fetch New World updates
  const fetchNewWorldUpdates = await fetch(`${API_URL}/scraper`)
  const fetchedNewWorldUpdates = await fetchNewWorldUpdates.json()
  if (fetchedNewWorldUpdates.statusCode === 403) {
    fetchedNewWorldUpdates = []
  }

  // get fetchedNewWorldUpdates based on tag 
  const fetchedNewWorldUpdatesBasedOnTag = fetchedNewWorldUpdates.filter((item) => item.tag === 'lore')


  return {
    props: {
      articles: fetchedArticles,
      companies: fetchedCompanies,
      newworldUpdates: fetchedNewWorldUpdates,
      tag: fetchedNewWorldUpdatesBasedOnTag || []
    }
  }
}