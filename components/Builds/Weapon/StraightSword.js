import { useState } from "react";
import dynamic from "next/dynamic"

export default function StraightSword({ weaponmaster }) {

    const ReactTooltip = dynamic(() => import("react-tooltip"), {
        ssr: false,
    });

    // need to be sorted to match database
    weaponmaster.sort((a, b) => a.id - b.id)

    const [toggle, setToggle] = useState({
        'reverse stab': false,
        unstoppablestabBackground: false,
        tacticianBackground: false,
        precisionBackground: false,
        mobilityBackground: false,
        opportunistBackground: false,
        confidence: false,
        '8': false,
        '9': false,
        '10': false,
        '11': false,
        '12': false,
        '13': false,
        '14': false,
        '15': false,
        '16': false,
        '17': false,
        '18': false,
        '19': false,
    })

    console.log(toggle)

    return (
        <div>
            <ReactTooltip />

            {/* first ability */}
            <div className="w-full md:w-1/2 my-6 relative">
                <div className="grid grid-cols-5 grid-rows-6 h-auto md:mx-24">
                    {weaponmaster.map((item) => (
                        <div key={item.id} className={`col-start-${item.column} row-start-${item.row}`}>
                            <label
                                className={`flex items-center justify-center w-full h-full relative`}
                                htmlFor="reversestab">
                                <img
                                    data-tip={item.name}
                                    className={`
                                    ${toggle.reversestabBackground ? "bg-blue-400" : "bg-gray-400"}
                                    ${item.type === 'active' && 'w-16 mb-4'}
                                    ${item.type === 'passive' && 'rounded-full' || item.type === 'upgrade' && 'rounded-full'}
                                        cursor-pointer
                                        w-10
                                        z-10
                                        `
                                    }
                                    src={item.icon.url}
                                    alt={item.name}
                                />
                                <div
                                    className={`
                                        ${item.type === 'active' && 'border-l-2 absolute top-14 left-13 z-0'}
                                        ${item.type === 'active' && 'h-60'}`
                                    }
                                ></div>
                            </label>
                            <input

                                name={item.name}
                                type="checkbox"

                                onClick={() => setToggle({ ...toggle, [toggle.name]: true })}
                                id={item.name}
                                className="sr-only"
                            />
                        </div>
                    ))}

                </div>
            </div>

            {/* second ability */}
            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-5 grid-rows-6"></div>
            </div>
        </div >
    )
}
