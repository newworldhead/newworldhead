import Layout from '@/components/MainLayout'
import Section from '@/components/Section'
import RecentPost from '@/components/RecentPost'
import Button from '@/components/Button'
import CompanyWidget from '@/components/CompanyWidget'
import { API_URL } from '@/config/index'

export default function Home({ posts, companies }) {

  return (
    <Layout>

      <Section height={'auto'} color={'primary'}>
        <h2 className="text-white uppercase text-4xl tracking-wide font-primary ml-4 w-full md:ml-0">Most Recent Posts</h2>

        <div className="flex flex-col md:flex-row">

          {/* Recent Posts */}
          <div className="md:w-2/3">
            {posts.length === 0 && <h3>No News</h3>}
            {posts.map(post => (
              <RecentPost key={post.id} post={post} />
            ))}

            <div className="flex justify-start pt-8 pl-4 md:pl-0">
              <Button
                type={"button"}
                href={`/posts`}
                py={2}
                name={"All Posts"}
              />

            </div>
          </div>
          <div className="hidden md:flex md:flex-col md:pt-6 md:w-1/3 h-full ">

            <div className="bg-secondary rounded-lg ml-4 p-4 w-full">
              <h2 className="uppercase text-3xl text-white font-primary tracking-wider mt-4 mb-4">Recent Companies</h2>
              {companies.map((company) =>
                <CompanyWidget key={company.id} company={company} />
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout >
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/posts?_sort=date:DESC&_limit=5`)
  const posts = await res.json()

  const getCompanies = await fetch(`${API_URL}/companies?_sort=created_at:DESC&_limit=3&name_ne=`)
  const companies = await getCompanies.json()

  return {
    props: {
      posts,
      companies
    }
  }
}