import Link from "next/link";

export default function RecentCompanies({ company }) {
    const { logo, name, slug } = company

    return (
        <Link href={`/companies/${slug}`}>
            <div className="bg-white rounded shadow-xl flex flex-col hover:shadow cursor-pointer">
                <div className="flex flex-row items-center justify-center w-full h-full">
                    <img data-tip={name} className="max-h-40 max-w-40 md:h-40 md:w-40" src={logo ? logo.url : 'https://via.placeholder.com/150x150'} alt={name} />
                </div>
            </div>
        </Link>
    )
}
