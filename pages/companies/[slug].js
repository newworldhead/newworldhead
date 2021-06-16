import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import Section from '@/components/Section'
import { FaEnvelope, FaInfo } from 'react-icons/fa'
import { API_URL } from '@/config/index'
import { parse } from '@/utils/parser'

export default function CompanySlug({ company }) {
    const { name, description, featured, factions, recruiting, region, language, playstyle, size, fraction_image, coverimage, logo } = company
    return (
        <MainLayout>
            <Section height={"auto"} px={"60"}>
                <div className="bg-white w-full h-auto relative rounded-xl my-4">

                    <div className={` bg-center bg-cover bg-no-repeat rounded-lg shadow-lg md:h-96`}>
                        <img className="h-full w-full rounded-lg" src={coverimage ? coverimage.url : 'https://via.placeholder.com/1500x800'} alt="" />
                    </div>

                    <div className="rounded-lg shadow-xl bg-white inline-block absolute  top-44 left-4 md:top-80 md:left-20 cursor-pointer hover:shadow">
                        <img className="w-32 border-2" src={logo.url} alt={name} />
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
                                gap-1
                                w-36
                                text-white 
                                text-sm 
                                font-secondary 
                                tracking-widest 
                                uppercase 
                                border-2 
                                py-2 
                                px-4 
                                mt-6
                                bg-blue-400 
                                rounded shadow-lg 
                                border-blue-400 
                                hover:bg-transparent
                                hover:text-blue-400"
                                >
                                    <FaEnvelope />
                                    Message
                                </a>
                            </Link>
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <h1 className="uppercase text-3xl font-primary tracking-wide  mt-8">{name}</h1>
                            <p className={`text-base font-secondary capitalize self-end ${recruiting === 'yes' ? "text-green-300" : "text-red-400"}`}>
                                {name}{' '}{recruiting === 'yes' ? "is" : "is not"} recruiting
                            </p>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-100 py-2"></div>
                    <div className="mx-4 md:w-5/6 md:mx-auto">

                        <div className="grid md:grid-cols-3 mt-6">

                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-primary text-3xl capitalize ">faction</h3>
                                    <p>{factions}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-primary text-3xl capitalize ">region</h3>
                                    <p>{region}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-primary text-3xl capitalize ">language</h3>
                                    <p>{language}</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-3 mt-6">

                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-primary text-3xl capitalize ">playstyle</h3>
                                    <p>{playstyle}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-primary text-3xl capitalize ">faction size</h3>
                                    <p>{size}</p>
                                </div>
                            </div>

                        </div>
                        <div className="my-8">{parse(description)}</div>
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