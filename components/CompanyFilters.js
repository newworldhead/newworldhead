import { useState } from "react"
import { useRouter } from 'next/router'
export default function CompanyFilters() {

    const router = useRouter()

    const [term, setTerm] = useState({
        factions: '',
        language: '',
        recruiting: '',
        playstyle: '',
        region: '',
        size: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTerm({ ...term, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(term);
        router.push(`/companies?factions=${term.factions}&language=${term.language}&recruiting=${term.recruiting}&playstyle=${term.playstyle}&region=${term.region}`)
    }

    return (

        <form onSubmit={handleSubmit} className="hidden md:flex md:mt-6">

            <div className="flex flex-col items-center md:flex-row">
                <div className="flex flex-row items-center gap-2 justify-end md:gap-4">

                    {/* faction selection */}
                    <div className="flex flex-col">
                        <label htmlFor="factions" className="text-white mb-1 tracking-wider">Factions</label>
                        <select
                            id="factions"
                            name="factions"
                            value={term.factions}
                            onChange={handleInputChange}
                            className="w-20 md:w-24 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                        >
                            <option value="">All</option>
                            <option value="undecided">Undecided</option>
                            <option value="marauders">Marauders</option>
                            <option value="syndicate">Syndicate</option>
                            <option value="covenant">Covenant</option>
                        </select>
                    </div>

                    {/* rectuting */}
                    <div className="flex flex-col">
                        <label htmlFor="recruiting" className="text-white mb-1 tracking-wider">Recruiting</label>
                        <select
                            id="recruiting"
                            name="recruiting"
                            value={term.recruiting}
                            onChange={handleInputChange}
                            className="w-20 md:w-24 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                        >
                            <option value="">All</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>

                    {/* region */}
                    <div className="flex flex-col">
                        <label htmlFor="region" className="text-white mb-1 tracking-wider">Region</label>
                        <select
                            id="region"
                            name="region"
                            value={term.region}
                            onChange={handleInputChange}
                            className="w-20 md:w-24 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                        >
                            <option value="">All</option>
                            <option value="UK">UK</option>
                            <option value="EU">EU</option>
                            <option value="NA">NA</option>
                            <option value="SEA">SEA</option>
                        </select>
                    </div>

                    {/* language */}
                    <div className="flex flex-col">
                        <label htmlFor="language" className="text-white mb-1 tracking-wider">Language</label>
                        <select
                            id="language"
                            name="language"
                            value={term.language}
                            onChange={handleInputChange}
                            className="w-20 md:w-24 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                        >
                            <option value="">All</option>
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
                        <label htmlFor="playstyle" className="text-white mb-1 tracking-wider">Playstyle</label>
                        <select
                            id="playstyle"
                            name="playstyle"
                            value={term.playstyle}
                            onChange={handleInputChange}
                            className="w-20 md:w-24 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                        >
                            <option value="">All</option>
                            <option value="pve">PVE</option>
                            <option value="pvp">PVP</option>
                            <option value="pvx">PVX</option>
                            <option value="crafting">Crafting</option>
                        </select>
                    </div>
                </div>
                <div className="w-full pt-5 m-0 md:mt-1 md:ml-4">
                    <button
                        type={'submit'}
                        className="
                        w-full
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
                        Filter
                    </button>
                </div>
            </div>


        </form >
    )
}
