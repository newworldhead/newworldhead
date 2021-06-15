import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import Company from '@/components/Company'
import { API_URL } from '@/config/index'

export default function CompanyIndex({ companies }) {
    return (
        <MainLayout>
            <Section image={"companies-section"} height={"medium"} positon={"center"}></Section>
            <Section height={"auto"}>
                {companies.map((company) => (
                    <Company key={company.id} company={company} />
                ))}
            </Section>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/companies`)
    const companies = await res.json()

    return {
        props: {
            companies
        }
    }
}