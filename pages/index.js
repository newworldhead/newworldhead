import Link from 'next/link'
import Layout from '@/components/MainLayout'
import Section from '@/components/Section'
import RecentPost from '@/components/RecentPost'
import Company from '@/components/Company'
import Button from '@/components/Button'
import { API_URL } from '@/config/index'

export default function Home({ news, companies }) {
  return (
    <Layout>

      <Section height={'auto'} color={'primary'}>
        <h2 className="text-white text-4xl font-primary">Most Recent Posts</h2>

        <div className="flex flex-col md:flex-row">
          {/* Recent Posts */}
          <div className="md:w-3/4">
            {news.length === 0 && <h3>No News</h3>}
            {news.map(news => (
              <RecentPost key={news.id} news={news} />
            ))}

            <div className="flex justify-start pt-6">
              <Button
                type={"button"}
                href={`/news`}
                py={2}
                name={"All Posts"}
              />

            </div>
          </div>


          <div className="hidden md:flex md:pt-6 md:w-1/4">
            <div className="container flex flex-col mx-auto w-full items-center">

              {/* Top Company */}
              <div className="px-4 py-5 sm:px-6 w-full border bg-white shadow mb-2 rounded-md">
                <h3 className="text-3xl font-primary leading-6 text-secondary tracking-wider">
                  Top company
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-gray-500 ">
                  Best New World Company
                </p>
              </div>

              <ul className="flex flex-col w-full">

                <li className="border-gray-400 flex flex-row mb-2">
                  <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <Link href={"/"}>
                        <a className="block relative">
                          <img src="https://via.placeholder.com/150" alt="placeholder" className="mx-auto object-cover rounded-full h-10 w-10" />
                        </a>
                      </Link>
                    </div>
                    <div className="flex-1 pl-1">
                      <div className="font-medium dark:text-white">
                        Demise
                      </div>
                    </div>
                    <div className="text-green-600 text-base border rounded-lg border-green-600 p-2">
                      Recurting
                    </div>
                    <button className="w-10 text-right flex justify-end">
                      <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 text-blue-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </li>

              </ul>

              {/* Recent Companies */}
              <div className="mt-16 px-4 py-5 sm:px-6 w-full border bg-white shadow mb-2 rounded-md">
                <h3 className="text-3xl font-primary leading-6 text-secondary tracking-wider">
                  Recent Companies
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-gray-500 ">
                  Details and information about recent Companies
                </p>
              </div>
              <ul className="flex flex-col w-full">
                {companies.map((company) => (
                  <Company key={company.id} company={company} />
                ))}
              </ul>
            </div>

          </div>
        </div>

      </Section>

      <Section image={"section-one"} height={'secondary'} positon={"center"} >
        <h2></h2>
      </Section>
    </Layout >
  )
}

export async function getServerSideProps() {
  const newsRes = await fetch(`${API_URL}/api/news`)
  const newsData = await newsRes.json()

  const companiesRes = await fetch(`${API_URL}/api/companies`)
  const companiesData = await companiesRes.json()

  return {
    props: {
      news: newsData.slice(0, 3),
      companies: companiesData
    }
  }
}