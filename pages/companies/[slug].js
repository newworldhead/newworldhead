import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import Company from '@/components/Company'
import { API_URL } from '@/config/index'

export default function CompanySlug({ company }) {
    return (
        <MainLayout>
            <Section height={"auto"}>
                <Company company={company} />
            </Section>
        </MainLayout>
    )
}

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/companies?slug=${slug}`)
    const companies = await res.json()

    return {
        props: {
            company: companies[0]
        }
    }
}