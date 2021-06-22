import { FaSpinner } from 'react-icons/fa'
export default function Loading() {
    return (
        <div className="flex items-center justify-center">
            <div className="my-96">
                <div className="animate-spin inline-block text-2xl text-blue-400 text-7xl">
                    <FaSpinner />
                </div>
            </div>
        </div>
    )
}
