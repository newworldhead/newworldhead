import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import { FaSpinner } from 'react-icons/fa'
import { formatDateForInput } from '@/utils/date'

export default function CompanyCreation({ token }) {

    const router = useRouter()

    const [values, setValues] = useState({
        name: '',
        description: '',
        factions: '',
        recruiting: '',
        region: '',
        language: '',
        playstyle: '',
        date: formatDateForInput(new Date())
    })

    useEffect(() => {

        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if (!hasEmptyFields) {
            router.push(`/companies`)
        }

        const run = async () => {
            const res = await fetch(`${API_URL}/companies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(values)
            })

            if (!res.ok) {
                router.push(`/companies`)
            } else {
                const company = await res.json()
                router.push(`/companies/edit/${company.id}`)
            }
        }
        run()

    }, []);

    return (
        <MainLayout>
            <div className="flex items-center justify-center">
                <div className="my-96">
                    <div className="animate-spin inline-block text-2xl text-blue-400 text-7xl">
                        <FaSpinner />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ req }) {

    const { token } = parseCookies(req)

    // check if user is logged in, if not redirect
    if (!token) {
        return {
            redirect: {
                destination: '/companies',
                permanent: false,
            },
        }
    }

    // get a user company if they have one or not
    const fecthACompanyBasedonThisUser = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const fecthedACompanyBasedonThisUser = await fecthACompanyBasedonThisUser.json()

    // check if user has already a company, if yes redirect.  A user can only have one company 
    if (fecthedACompanyBasedonThisUser.length > 0) {
        return {
            redirect: {
                destination: '/companies',
                permanent: false,
            },
        }
    }

    // check if Unauthorized 
    if (fecthedACompanyBasedonThisUser.statusCode === 401) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    

    return {
        props: {
            token
        }
    }
}
