import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import Editor from '@/components/Editor'
import { API_URL } from '@/config/index'
import { FaSpinner, FaPlus } from 'react-icons/fa'

export default function CompanyAdd({company}) {
    const [editorLoaded, setEditorLoaded] = useState(false);

    const [tempCoverImage, setTempCoverImage] = useState()
    const [tempLogo, setTempLogo] = useState()

    const [coverImage, setCoverImage] = useState('')
    const [logo, setLogo] = useState('')

    const [values, setValues] = useState({
        name: company.name,
        description: company.description,
        factions: company.factions,
        recruiting: company.recruiting,
        region: company.region,
        language: company.language,
        playstyle: company.playstyle,
        size: company.size,
        coverimage: company.coverimage,
        logo: company.logo,
    })

    const handleCoverImageChange = (e) => {
        setTempCoverImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleLogoImageChange = (e) => {
        setTempLogo(URL.createObjectURL(e.target.files[0]))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if (hasEmptyFields) {
            toast.error('Please fill all fields')
            return
        }

        const res = await fetch(`${API_URL}/companies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        if (!res.ok) {
            return toast.error('Something Went Wrong')
        }
    }

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <MainLayout>
            <Section height={"auto"} px={"60"}>

                <ToastContainer />

                <div className="bg-white w-full h-auto relative rounded-xl my-4">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="coverImage" className="z-10 absolute p-4 bg-blue-400 text-white rounded-xl shadow-xl top-4 right-4 cursor-pointer hover:shadow outline-none focus:outline-none">
                            <FaPlus />
                            <input
                                id="coverImage"
                                type="file"
                                onChange={handleCoverImageChange}
                                className="hidden" />
                        </label>



                        <div className={`rounded-lg shadow-lg h-full w-full`}>
                            <img className="w-full h-60 md:h-96 rounded-lg" src={`${tempCoverImage ? tempCoverImage : 'https://via.placeholder.com/800x400'}`} alt="placeholder.com/800x400" />
                        </div>

                        <div className="rounded-lg shadow-xl bg-white inline-block absolute top-44 left-4 md:top-80 md:left-20 cursor-pointer hover:shadow">
                            <label htmlFor="logo">
                                <div className="w-32 h-32 border-2 flex items-center justify-center">
                                    <img src={`${tempLogo ? tempLogo : 'https://via.placeholder.com/150x150'}`} alt="placeholder.com/150x150" />
                                </div>
                                <input
                                    id="logo"
                                    type="file"
                                    onChange={handleLogoImageChange}
                                    className="hidden" />
                            </label>
                        </div>
                        <div className="mx-4 md:w-5/6 md:mx-auto">
                            <div className="flex flex-row items-center justify-between mt-28">
                                <h1 className="text-4xl font-primary tracking-wide">Create Your Profile</h1>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-100 py-2"></div>
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
                                <Editor
                                    name="description"
                                    onChange={(data) => {
                                        setValues({ ...values, description: data })
                                    }}
                                    editorLoaded={editorLoaded}
                                />
                            </div>

                            <button className="border border-gray-100 py-2 px-2 outline-none rounded" type="submit">Submit</button>

                        </div>

                    </form>
                </div>
            </Section>
        </MainLayout >
    )
}
