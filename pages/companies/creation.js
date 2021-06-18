import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import { API_URL } from '@/config/index'
import { FaSpinner } from 'react-icons/fa'

export default function CompanyCreation() {

    const router = useRouter()

    const [values, setValues] = useState({
        name: '',
        description: '',
        factions: '',
        recruiting: '',
        region: '',
        language: '',
        playstyle: ''
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
                    'Content-Type': 'application/json'
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
