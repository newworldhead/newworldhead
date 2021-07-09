import { useState } from "react"
import router from 'next/router'
import MainLayout from "@/components/MainLayout"
import Section from "@/components/Section"
import ProfileInformation from "@/components/Profile/ProfileInformation"
import CompanyInformation from "@/components/Profile/CompanyInformation"
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'

import { toast, ToastContainer } from 'react-toastify'

export default function Dashboard({ token, user, company, companyCount, requestedRemoval }) {

    const [requested, setRequested] = useState(false)

    // create profile removal request
    const submitHandler = async (e) => {
        e.preventDefault()
        if (confirm("Press okay to confirm")) {
            await fetch(`${API_URL}/request-removals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ requested })
            })
        }
        router.push('/profile')
    }

    // user can cancel/begin profile removal request
    const editProfileRemoval = async (e) => {
        e.preventDefault()
        if (confirm("Press okay to confirm")) {
            await fetch(`${API_URL}/request-removals/${requestedRemoval.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ requested })
            })
        }
        router.push('/profile')
    }

    return (
        <MainLayout>
            <ToastContainer />
            <Section image={"profile-section"} height={'medium'} positon={"center"}>
                <div className="flex justify-center items-center">
                    <h1 className="py-4 text-white text-5xl font-primary capitalize tracking-wider">
                        Profile
                    </h1>
                </div>
            </Section>
            <div className="container mx-auto">

                {requestedRemoval && requestedRemoval.requested ? (
                    <div className="border-l-4 border-red-400 bg-secondary p-4 mx-4 my-6 text-white relative capitalize">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p>your account is marked for Closure</p>

                            <form onSubmit={editProfileRemoval}>
                                <button
                                    type="submit"
                                    onClick={() => setRequested(false)}
                                    className="
                                        bg-blue-400
                                        px-2
                                        py-2
                                        mt-2
                                        md:mt-0
                                        inline-block
                                        shadow-xl
                                        rounded
                                        w-full
                                        tracking-wide
                                        hover:shadow
                                        focus:outline-none
                                    "
                                >Stop Acount Closure</button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="border-l-4 border-blue-400 bg-secondary p-4 mt-6 text-white relative">
                            <p>Found an issue, please get in touch @Discord <span className="text-blue-400">S.O.L.I.D#6796</span></p>
                        </div>

                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border-l-4 border-blue-400 bg-secondary p-10 text-white relative">
                                <h2 className="text-white text-3xl font-primary">Profile Info</h2>
                                <ProfileInformation
                                    user={user}
                                    setRequested={setRequested}
                                    submitHandler={submitHandler}
                                    requestedRemoval={requestedRemoval}
                                    editProfileRemoval={editProfileRemoval}
                                />
                                <div className="border border-green-400 inline-block px-3 py-2 absolute top-4 right-4 tracker-wide rounded">
                                    <p className="text-green-400">{user && user.role.name}</p>
                                </div>
                            </div>
                            <div className="border-l-4 border-blue-400 bg-secondary p-10 text-white relative">
                                <h2 className="text-white text-3xl font-primary ">Company Information</h2>
                                <div className="my-4 border-b border-gray-400"></div>
                                <CompanyInformation user={user} company={company} companyCount={companyCount} />
                            </div>
                        </div>
                    </>
                )}
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

    // fetch user
    const fetchCurrentUser = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const fetchedCurrentUser = await fetchCurrentUser.json()

    // fetch user request removal
    const fetchRequestRemoval = await fetch(`${API_URL}/request-removals/${fetchedCurrentUser['request_removal']}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let fetchedRequestRemoval = null
    if (fetchRequestRemoval.ok) {
        fetchedRequestRemoval = await fetchRequestRemoval.json()
    }

    // fetch user company
    const fetchUserCompany = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const fetchedUserCompany = await fetchUserCompany.json()

    // check if unauthorized 
    if (fetchedUserCompany.statusCode === 401) {
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

    return {
        props: {
            token,
            user: fetchedCurrentUser,
            company: fetchedUserCompany,
            companyCount: fetchedCompanyCount,
            requestedRemoval: fetchedRequestRemoval
        }
    }
}

