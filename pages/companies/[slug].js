import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import { FaInfo } from 'react-icons/fa'
import { API_URL } from '@/config/index'
import { parse } from '@/utils/parser'

export default function CompanySlug({ company }) {
    const { id, name, description, factions, recruiting, region, language, playstyle, size, coverimage, logo } = company

    return (
        <MainLayout
            title={`Company ${name} | newworldhead.com`}
            description={"The best place for news and everything New World"}
            className="relative"
        >
            <Section height={"full"} px={"60"}>

                <Link href="/companies">
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

                    <div className={` bg-center bg-cover bg-no-repeat rounded-lg shadow-lg md:h-96`}>
                        <img className="h-full w-full rounded-lg" src={coverimage ? coverimage.url : 'https://via.placeholder.com/800x400'} alt="" />
                    </div>

                    <div className="rounded-lg shadow-xl bg-white inline-block absolute  top-44 left-4 md:top-80 md:left-20 cursor-pointer hover:shadow">
                        <img className="w-32 border-2" src={logo ? logo.url : 'https://via.placeholder.com/150x150'} alt={name} />
                    </div>

                    <Link href="/">
                        <a className=" 
                                text-white
                                absolute
                                top-0
                                right-0
                                p-2
                                m-4
                                rounded
                                shadow-xl
                                bg-blue-400 
                                border-blue-400 
                                hover:shadow
                            ">
                            <FaInfo />
                        </a>
                    </Link>

                    <div className="mx-4 md:w-5/6 md:mx-auto">
                        <div className="flex flex-row items-center justify-end">
                            <Link href="/">
                                <a className="
                                flex 
                                flex-row 
                                justify-center
                                items-center 
                                text-white 
                                tracking-wide
                                border
                                border-blue-400 
                                py-2 
                                px-4 
                                mt-6
                                mr-2
                                bg-blue-400 
                                rounded 
                                shadow-xl 
                                hover:shadow
                                ">
                                    Message
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-4xl font-primary tracking-wide mt-12">{name}</h1>

                            <p className={`px-4 py-2 text-base font-bold capitalize self-end tracking-wide ${recruiting === 'yes' ? "bg-green-100 text-green-500" : "bg-red-100 text-red-600"}`}>
                                {recruiting === 'yes' ? "" : "not"} recruiting
                            </p>
                        </div>
                    </div>

                    <div className="border-b-2 border-gray-100 py-2"></div>

                    <div className="mx-4 md:w-5/6 md:mx-auto">

                        <div className="grid mt-8 gap-4 md:gap-2 grid-cols-2 md:grid-cols-5">

                            <div>
                                <div className="flex flex-col">
                                    <h3 className="capitalize text-2xl tracking-wide">faction</h3>
                                    <p className="mt-2 capitalize">{factions}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="capitalize text-2xl tracking-wide">region</h3>
                                    <p className="mt-2 capitalize">{region}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="capitalize text-2xl tracking-wide">language</h3>
                                    <p className="mt-2 capitalize">{language}</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col">
                                    <h3 className="capitalize text-2xl tracking-wide">playstyle</h3>
                                    <p className="mt-2 uppercase">{playstyle}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="capitalize text-2xl tracking-wide">faction size</h3>
                                    <p className="mt-2 capitalize">{size}</p>
                                </div>
                            </div>

                        </div>
                        <div className="my-10 pb-8">{parse(description)}</div>

                    </div>
                </div>
            </Section>
        </MainLayout >
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