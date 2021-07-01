import { useContext } from "react";
import Link from 'next/link'
import MainLayout from "@/components/MainLayout"
import Section from "@/components/Section"
import DisplayNewsItem from "@/components/Profile/DisplayNewsItem"
import ProfileInformation from "@/components/Profile/ProfileInformation"
import CompanyInformation from "@/components/Profile/CompanyInformation"
import { API_URL, NEXT_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import AuthContext from "@/context/AuthContext"
import GlobalContext from "@/context/GlobalContext"

export default function Dashboard({ company, companyCount, newworldUpdates }) {
    const { user } = useContext(AuthContext)
    const { getScraped } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        getScraped()
    }
    return (
        <MainLayout>
            <Section image={"profile-section"} height={'medium'} positon={"bottom"}>
                <div className="flex justify-center items-center">
                    <h1 className="py-4 text-white text-5xl font-primary capitalize tracking-wider">
                        Profile
                    </h1>
                </div>
            </Section>
            <div className="container mx-auto">

                <div className="border-l-4 border-blue-400 bg-secondary p-4 mt-6 text-white relative">
                    <p>Found an issue, please get in touch @Discord <span className="text-blue-400">S.O.L.I.D#6796</span></p>
                </div>

                <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-blue-400 bg-secondary p-10 text-white relative">
                        <h2 className="text-white text-3xl font-primary">Profile Info</h2>
                        <ProfileInformation user={user} />
                        <div className="border border-green-400 inline-block px-3 py-2 absolute top-4 right-4 tracker-wide rounded">
                            <p className="text-green-400">{user && user.role.name}</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-blue-400 bg-secondary p-10 text-white relative">
                        <h2 className="text-white text-3xl font-primary ">Company Information</h2>
                        <CompanyInformation company={company} companyCount={companyCount} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )

}

export async function getServerSideProps({ req }) {

    const { token } = parseCookies(req)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    // TODO: clean up
    const res = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const company = await res.json()

    // check if Unauthorized 
    if (company.statusCode === 401) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    // fetch company count
    const fetchCompanyCount = await fetch(`${API_URL}/companies/count`)
    const fetchedCompanyCount = await fetchCompanyCount.json()

    // fetch new world updates from website
    const fetchNewWorldUpdates = await fetch(`${API_URL}/updaters?_limit=3`)
    const fetchedNewWorldUpdates = await fetchNewWorldUpdates.json()

    return {
        props: {
            company,
            companyCount: fetchedCompanyCount,
            newworldUpdates: fetchedNewWorldUpdates
        }
    }
}