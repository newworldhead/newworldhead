import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'
import { IoPlayBackSharp, IoPlayForwardSharp } from 'react-icons/io5'
import { AiFillQuestionCircle } from 'react-icons/ai'

export default function Stength({ currentPoints, setCurrentPoints, intelligence, setIntelligence }) {

    let percentage = (intelligence / 300) * 100

    const handleBackBig = () => {
        setIntelligence(intelligence - 5)
        setCurrentPoints(currentPoints + 5)
    }
    const handleBackSmall = () => {
        setIntelligence(intelligence - 1)
        setCurrentPoints(currentPoints + 1)
    }
    const handleFrontSmall = () => {
        setIntelligence(intelligence + 1)
        setCurrentPoints(currentPoints - 1)

    }
    const handleFrontBig = () => {
        setIntelligence(intelligence + 5)
        setCurrentPoints(currentPoints - 5)
    }

    return (
        <div className="flex flex-col md:flex-row items-center bg-secondary py-4 md:px-8 md:my-0" >

            <div className="grid grid-cols-3 justify-items-center w-1/5 place-items-center mb-4 md:mb-0" >

                <div className="flex flex-row items-center mr-10 md:mr-0">

                    {/* left by 5 */}
                    {intelligence >= 10 ? (
                        <button
                            onClick={handleBackBig}
                            className="
                                text-gray-200
                                text-xl
                                focus:outline-none">
                            <IoPlayBackSharp />
                        </button>
                    ) : (
                        <button
                            className="
                                cursor-default
                                text-gray-600
                                text-xl
                                focus:outline-none">
                            <IoPlayBackSharp />
                        </button>
                    )}

                    {/* left by 1 */}
                    {intelligence >= 6 ? (
                        <button
                            onClick={handleBackSmall}
                            className="
                                text-gray-200
                                text-6xl
                                focus:outline-none">
                            <RiArrowLeftSFill />
                        </button>
                    ) : (
                        <button
                            className="
                                cursor-default
                                text-gray-600
                                text-6xl
                                focus:outline-none">
                            <RiArrowLeftSFill />
                        </button>
                    )}

                </div>

                <div className="flex items-center">
                    <h2 className="text-4xl text-white">{intelligence}</h2>
                </div>

                <div className="flex flex-row items-center ml-10 md:ml-0">

                    {/* right by 1 */}
                    {
                        currentPoints === 0 ? (
                            <button
                                className="
                                    text-gray-600 
                                    text-6xl
                                    cursor-default
                                    focus:outline-none"
                            >
                                <RiArrowRightSFill />
                            </button>
                        )
                            : intelligence <= 194 ? (
                                <button
                                    onClick={handleFrontSmall}
                                    className="
                                    text-gray-200 
                                    text-6xl
                                    focus:outline-none"
                                >
                                    <RiArrowRightSFill />
                                </button>
                            )
                                : (
                                    <button
                                        className="
                                            text-gray-600 
                                            text-6xl
                                            cursor-default
                                            focus:outline-none"
                                    >
                                        <RiArrowRightSFill />
                                    </button>
                                )
                    }

                    {/* right by 5 */}
                    {
                        currentPoints <= 5 ? (
                            <button
                                className="
                                    text-gray-600 
                                    text-xl
                                    cursor-default
                                    focus:outline-none"
                            >
                                <IoPlayForwardSharp />
                            </button>
                        )
                            : intelligence <= 190 ? (
                                <button
                                    onClick={handleFrontBig}
                                    className="text-gray-200 text-xl"
                                >
                                    <IoPlayForwardSharp />
                                </button>
                            )
                                : (
                                    <button
                                        className="
                                            text-gray-600 
                                            text-xl
                                            cursor-default
                                            focus:outline-none"
                                    >
                                        <IoPlayForwardSharp />
                                    </button>
                                )
                    }

                </div>
            </div>

            <div className="w-full px-4 md:px-10" >
                <div>
                    <div className="flex flex-row gap-2 items-center">
                        <h3 className="text-white uppercase text-xl tracking-widest font-primary">intelligence</h3>
                        <span className="italic text-white tracking-widest text-xs">(magic focused)</span>
                        <div className="text-blue-400 text-xl cursor-pointer">
                            <AiFillQuestionCircle />
                        </div>
                    </div>
                </div>
                <div className='h-1 w-full bg-gray-300 rounded relative mt-4'>
                    <div
                        style={{ width: `${percentage}%` }}
                        className="h-full bg-blue-400">
                    </div>
                    <span className={`absolute border-2 ${percentage >= 16.6 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 left-1/5 `}></span>
                    <span className={`absolute border-2 ${percentage >= 33.3 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 left-1/3`}></span>
                    <span className={`absolute border-2 ${percentage >= 50 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 left-1/2`}></span>
                    <span className={`absolute border-2 ${percentage >= 66.6 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 right-1/3`}></span>
                    <span className={`absolute border-2 ${percentage >= 83.3 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 right-1/5`}></span>
                    <span className={`absolute border-2 ${percentage >= 100 ? 'bg-blue-400' : 'bg-black'} p-2 rounded-full -top-2 right-0`}></span>
                </div>
            </div>
        </div >
    )
}
