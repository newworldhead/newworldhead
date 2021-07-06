import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
// import Quill from '@/components/Quill'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'
import { FaSpinner } from 'react-icons/fa'

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import 'react-quill/dist/quill.snow.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function CompanyAdd({ company, token }) {
    const router = useRouter()

    const [display, setDisplay] = useState(false)
    const [displayLogo, setDisplayLogo] = useState(false)
    const [mainLoading, setMainLoading] = useState(false);

    const [tempCoverImage, setTempCoverImage] = useState(null)
    const [tempLogo, setTempLogo] = useState(null)

    const [coverImage, setCoverImage] = useState(null)
    const [logo, setLogo] = useState(null)

    const [values, setValues] = useState({
        name: company.name,
        description: company.description,
        factions: company.factions,
        recruiting: company.recruiting,
        region: company.region,
        language: company.language,
        playstyle: company.playstyle,
        size: company.size
    })

    const handleCancel = () => {
        const image = tempCoverImage
        setTempCoverImage(URL.revokeObjectURL(image));
        setDisplay(false)
    }

    const handleLogoCancel = () => {
        const image = tempLogo
        setTempLogo(URL.revokeObjectURL(image));
        setDisplayLogo(false)
    }

    const handleCoverImageChange = (e) => {
        setTempCoverImage(URL.createObjectURL(e.target.files[0]))
        setCoverImage(e.target.files[0])
        setDisplay(true)
    }

    const handleLogoImageChange = (e) => {
        setTempLogo(URL.createObjectURL(e.target.files[0]))
        setLogo(e.target.files[0])
        setDisplayLogo(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmitCoverImage = async (e) => {
        e.preventDefault()

        setMainLoading(true)

        const formData = new FormData()
        formData.append('files', coverImage)
        formData.append('ref', 'companies')
        formData.append('refId', company.id)
        formData.append('field', 'coverimage')

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        })

        if (!res.ok) {
            toast.error('Something Went Wrong')
            return
        }

        setDisplay(false)
        setMainLoading(false)
        toast("Cover image updated!")
    }

    // logo submit
    const handleSubmitLogo = async (e) => {
        e.preventDefault()

        setMainLoading(true)

        const formData = new FormData()
        formData.append('files', logo)
        formData.append('ref', 'companies')
        formData.append('refId', company.id)
        formData.append('field', 'logo')

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        })

        if (!res.ok) {
            toast.error('Something Went Wrong')
            return
        }

        setDisplayLogo(false)
        setMainLoading(false)
        toast("Logo Updated!")
    }

    // main form update
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if (hasEmptyFields) {
            toast.error('Please fill all fields')
            return
        }

        const res = await fetch(`${API_URL}/companies/${company.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(values)
        })

        if (!res.ok) {
            toast.error("You do not own this company :P")
            return
        } else {
            const comp = await res.json()
            router.push(`/companies/${comp.slug}`)
        }
    }

    return (
        <MainLayout
            title={`Company ${company.name} | newworldhead.com`}
            description={"The best place for news and everything New World"}
            className="relative"
        >
            <Section height={"full"} px={"60"}>

                <ToastContainer />

                <Link href={`/companies`}>
                    <button
                        className="
                            bg-blue-400 
                            border 
                            border-blue-400 
                            mt-4
                            px-4 
                            py-2
                            text-white
                            outline-none 
                            tracking-wider
                            rounded
                            shadow-xl
                            hover:shadow
                            capitalize 
                            focus:outline-none
                            ">
                        Go Back
                    </button>
                </Link>

                <div className="bg-white w-full h-auto relative rounded-xl my-4">

                    <form onSubmit={handleSubmitCoverImage}>
                        <label
                            htmlFor="coverImage"
                            className={`
                                ${display ? 'hidden' : 'block'}
                                z-10 
                                absolute 
                                py-2
                                px-4 
                                bg-blue-400 
                                text-white 
                                text-sm
                                capitalize
                                rounded
                                shadow-xl 
                                top-4 
                                right-4 
                                cursor-pointer 
                                outline-none 
                                tracking-wider
                                focus:outline-none
                                hover:shadow 
                            `}>
                            upload cover image
                            <input
                                id="coverImage"
                                type="file"
                                onChange={handleCoverImageChange}
                                className="hidden" />
                        </label>

                        {/* cancel button */}
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={
                                `${mainLoading ? 'hidden' : display ? 'block' : 'hidden'} 
                                z-10 
                                absolute 
                                py-2
                                px-4 
                                bg-red-400 
                                text-white 
                                text-sm
                                capitalize
                                rounded
                                shadow-xl 
                                top-4 
                                right-28
                                cursor-pointer 
                                outline-none 
                                tracking-wider
                                focus:outline-none
                                hover:shadow
                            `}>
                            cancel
                        </button>

                        {/* upload button */}
                        <button
                            type={`${mainLoading ? 'button' : 'submit'}`}
                            className={
                                `${display ? 'block' : 'hidden'} 
                                z-10 
                                absolute 
                                py-2
                                px-4 
                                bg-blue-400 
                                text-white 
                                text-sm
                                capitalize
                                rounded
                                shadow-xl 
                                top-4 
                                right-4 
                                cursor-pointer 
                                outline-none 
                                tracking-wider
                                focus:outline-none
                                hover:shadow 
                            `}>
                            {mainLoading ? (
                                <div>
                                    <div className="animate-spin text-white">
                                        <FaSpinner />
                                    </div>
                                </div>
                            ) : (
                                "upload"
                            )}
                        </button>
                    </form>

                    <div className={`rounded-lg shadow-lg h-full w-full`}>
                        <img className="w-full h-60 md:h-96 rounded-lg" src={`${tempCoverImage ? tempCoverImage : company.coverimage ? company.coverimage.url : 'https://via.placeholder.com/800x400'}`} alt="placeholder.com/800x400" />
                    </div>

                    <div className="rounded-lg shadow-xl bg-white inline-block absolute top-44 left-4 md:top-80 md:left-20 cursor-pointer hover:shadow">

                        {/* So much work */}
                        <form onSubmit={handleSubmitLogo}>
                            <label htmlFor="logo">
                                <div className="w-32 h-32 border-2 flex items-center justify-center">
                                    <img src={`${tempLogo ? tempLogo : company.logo ? company.logo.url : 'https://via.placeholder.com/150x150'}`} alt="placeholder.com/150x150" />
                                </div>
                                <input
                                    id="logo"
                                    type="file"
                                    onChange={handleLogoImageChange}
                                    className="hidden" />
                            </label>

                            {/* upload button */}
                            <button
                                type={`${mainLoading ? 'button' : 'submit'}`}
                                className={`
                                ${displayLogo ? 'block' : 'hidden'} 
                                z-10 
                                absolute 
                                py-2
                                px-4 
                                bg-blue-400 
                                text-white 
                                text-sm
                                capitalize
                                rounded
                                shadow-xl 
                                top-20
                                left-36 
                                cursor-pointer 
                                outline-none 
                                tracking-wider
                                focus:outline-none
                                hover:shadow 
                            `}>
                                {mainLoading ? (
                                    <div>
                                        <div className="animate-spin text-white">
                                            <FaSpinner />
                                        </div>
                                    </div>
                                ) : (
                                    "upload"
                                )}
                            </button>

                            {/* cancel button */}
                            <button
                                type="button"
                                onClick={handleLogoCancel}
                                className={`
                                ${mainLoading ? 'hidden' : displayLogo ? 'block' : 'hidden'} 
                                z-10 
                                absolute 
                                py-2
                                px-4 
                                bg-red-400 
                                text-white 
                                text-sm
                                capitalize
                                rounded
                                shadow-xl 
                                top-20
                                left-60 
                                cursor-pointer 
                                outline-none 
                                tracking-wider
                                focus:outline-none
                                hover:shadow
                            `}>
                                cancel
                            </button>
                        </form>
                    </div>

                    <div className="mx-4 md:w-5/6 md:mx-auto">
                        <div className="flex flex-row items-center justify-between mt-28">
                            <h1 className="text-4xl font-primary tracking-wide">Edit Your Profile</h1>
                        </div>
                    </div>

                    <div className="border-b-2 border-gray-100 py-2"></div>

                    <form onSubmit={handleSubmit} className="pb-4">
                        <div className="mx-4 md:w-5/6 md:mx-auto h-auto">

                            <div className="grid md:grid-cols-3 py-4 mt-4 gap-4 gap-y-10">

                                {/* comapny name */}
                                <div className="flex flex-col">
                                    <label htmlFor="name">Company Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter Name"
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400"
                                    />
                                </div>

                                {/* faction selection */}
                                <div className="flex flex-col">
                                    <label htmlFor="factions">Factions</label>
                                    <select
                                        id="factions"
                                        name="factions"
                                        value={values.factions}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                                    >
                                        <option value="">Select Faction</option>
                                        <option value="undecided">Undecided</option>
                                        <option value="marauders">Marauders</option>
                                        <option value="syndicate">Syndicate</option>
                                        <option value="covenant">Covenant</option>
                                    </select>
                                </div>

                                {/* rectuting */}
                                <div className="flex flex-col">
                                    <label htmlFor="recruiting">Recruiting</label>
                                    <select
                                        id="recruiting"
                                        name="recruiting"
                                        value={values.recruiting}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                                    >
                                        <option value="">Are you Recruiting</option>
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>

                                {/* region */}
                                <div className="flex flex-col">
                                    <label htmlFor="region">Region</label>
                                    <select
                                        id="region"
                                        name="region"
                                        value={values.region}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                                    >
                                        <option value="">Select Region</option>
                                        <option value="UK">UK</option>
                                        <option value="EU">EU</option>
                                        <option value="NA">NA</option>
                                        <option value="SEA">SEA</option>
                                    </select>
                                </div>

                                {/* language */}
                                <div className="flex flex-col">
                                    <label htmlFor="language">Language</label>
                                    <select
                                        id="language"
                                        name="language"
                                        value={values.language}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                                    >
                                        <option value="">Select Language</option>
                                        <option value="english">English</option>
                                        <option value="french">French</option>
                                        <option value="italian">Italian</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="german">German</option>
                                        <option value="russian">Russian</option>
                                        <option value="polish">Polish</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* playstyle */}
                                <div className="flex flex-col">
                                    <label htmlFor="playstyle">Playstyle</label>
                                    <select
                                        id="playstyle"
                                        name="playstyle"
                                        value={values.playstyle}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                                    >
                                        <option value="">Select Playstyle</option>
                                        <option value="pve">PVE</option>
                                        <option value="pvp">PVP</option>
                                        <option value="pvx">PVX</option>
                                        <option value="crafting">Crafting</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10">
                                <ReactQuill value={values.description} setValue={(data) => {
                                    setValues({ ...values, description: data })
                                }} />
                            </div>

                            <div className="my-4">
                                <button
                                    type={`${mainLoading ? 'button' : 'submit'}`}
                                    className="
                                        bg-blue-400 
                                        border 
                                        border-blue-400 
                                        px-4 
                                        py-2
                                        text-white
                                        outline-none 
                                        tracking-wider
                                        rounded
                                        shadow-xl
                                        hover:shadow
                                        capitalize 
                                        focus:outline-none
                                    ">
                                    {mainLoading ? (
                                        <div>
                                            <div className="animate-spin text-white">
                                                <FaSpinner />
                                            </div>
                                        </div>
                                    ) : (
                                        "update"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Section>
        </MainLayout >
    )
}


export async function getServerSideProps({ params: { id }, req }) {

    const { token } = parseCookies(req)

    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    // fetch this user
    const fetchThisUser = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const fetchedThisUser = await fetchThisUser.json()

    // check if Unauthorized 
    if (fetchedThisUser.statusCode === 401) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    // fetch the company by id
    const fetchCompanyById = await fetch(`${API_URL}/companies/${id}`)
    const fetchedCompanyById = await fetchCompanyById.json();

    // if this user is not the editor of this company, redirect 
    if (fetchedThisUser[0].user.id !== fetchedCompanyById.user.id) {
        return {
            redirect: {
                destination: '/companies',
                permanent: false,
            },
        }
    }

    return {
        props: {
            token,
            company: fetchedCompanyById
        }
    }
}
