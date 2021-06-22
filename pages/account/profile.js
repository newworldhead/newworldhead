import { useState } from "react"
import { useRouter } from "next/router"
import MainLayout from "@/components/MainLayout"
import Loading from "@/components/Loading"
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'

export default function ProfileAccount({ company }) {

    const { statusCode } = company

    if (statusCode === 401) {
        return <Loading />
    }

    return (
        <MainLayout>
            <h1>Profile</h1>
        </MainLayout>
    )
}

export async function getServerSideProps({ req }) {

    const { token } = parseCookies(req)

    const res = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const company = await res.json()

    console.log(company);

    return {
        props: {
            company
        }
    }
}