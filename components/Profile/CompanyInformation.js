import Link from "next/link"
export default function CompanyInformation({ company, companyCount }) {
    return (
        <div>
            {company.length === 0 ? (

                <div className="mt-4 flex flex-col">
                    <p className="w-5/6">No company information can be found for you.  Would you like to create a company or join one?</p>
                    <p className="mt-10">There is currently <span className="mx-2 px-3 py-1 border border-blue-400">{`${companyCount}`}</span> companies to choose from.</p>

                    <div className="flex flex-row gap-4 my-2">
                        <Link href={`/companies/creation`}>
                            <a
                                className="
                                    mt-4
                                    px-4
                                    py-2
                                    bg-blue-400
                                    inline-block
                                "
                            >Create Company</a>
                        </Link>
                        <Link href={`/companies`}>
                            <a
                                className="
                                    mt-4
                                    px-4
                                    py-2
                                    bg-blue-400
                                    inline-block
                                "
                            >Browse Companies</a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:gap-4 md:mt-4 md:flex-row">
                    <Link href={`/companies/edit/${company[0].id}`}>
                        <a
                            className="
                                mt-4
                                px-4
                                py-2
                                bg-blue-400
                                inline-block
                                rounded
                                shadow-xl
                                hover:shadow
                            "
                        >Edit Company</a>
                    </Link>
                    <Link href={`/`}>
                        <a
                            className="
                                mt-4
                                px-4
                                py-2
                                bg-red-400
                                inline-block
                                rounded
                                shadow-xl
                                hover:shadow
                            "
                        >Delete Company</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
