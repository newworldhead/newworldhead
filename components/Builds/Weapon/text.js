export default function text() {
    return (
        <div>
            {/* reverse stab */}
            <div className="col-start-1 row-start-2 md:p-6">
                <label htmlFor="reversestab">
                    <img
                        className={`
                                    ${toggle.reversestabBackground ? "bg-blue-400" : "bg-gray-400"}
                                    cursor-pointer`
                        }
                        src={reversestab.icon.url}
                        alt={reversestab.name}
                    />
                </label>
                <input
                    name="reversestab"
                    type="checkbox"
                    onClick={() => setToggle({ ...toggle, reversestabBackground: !toggle.reversestabBackground })}
                    id="reversestab"
                    className="sr-only"
                />
            </div>

            {/* unstoppablestab */}
            <div className="col-start-1 row-start-3 md:p-6">
                <label
                    className="flex items-center justify-center w-full h-full"
                    htmlFor="unstoppablestab">
                    <img
                        className={`
                                    ${toggle.unstoppablestabBackground ? "bg-blue-400" : "bg-gray-400"}
                                    cursor-pointer
                                    rounded-full 
                                    w-1/2`
                        }
                        src={unstoppablestab.icon.url}
                        alt={unstoppablestab.name}
                    />
                </label>
                <input
                    name="unstoppablestab"
                    type="checkbox"
                    onClick={() => setToggle({ ...toggle, unstoppablestabBackground: !toggle.unstoppablestabBackground })}
                    id="unstoppablestab"
                    className="sr-only"
                />
            </div>

            {/* tactician */}
            <div className="col-start-1 row-start-5 md:p-6">
                <label
                    className="flex items-center justify-center w-full h-full"
                    htmlFor="tactician">
                    <img
                        className={`
                                    ${toggle.tacticianBackground ? "bg-blue-400" : "bg-gray-400"}
                                    cursor-pointer
                                    rounded-full 
                                    w-1/2`
                        }
                        src={tactician.icon.url}
                        alt={tactician.name}
                    />
                </label>
                <input
                    name="tactician"
                    type="checkbox"
                    onClick={() => setToggle({ ...toggle, tacticianBackground: !toggle.tacticianBackground })}
                    id="tactician"
                    className="sr-only"
                />
            </div>

            {/* precision */}
            <div className="col-start-2 row-start-2 md:p-6">
                <label
                    className="flex items-center justify-center w-full h-full"
                    htmlFor="precision">
                    <img
                        className={`
                                    ${toggle.precisionBackground ? "bg-blue-400" : "bg-gray-400"}
                                    cursor-pointer
                                    rounded-full 
                                    w-1/2`
                        }
                        src={precision.icon.url}
                        alt={precision.name}
                    />
                </label>
                <input
                    name="precision"
                    type="checkbox"
                    onClick={() => setToggle({ ...toggle, precisionBackground: !toggle.precisionBackground })}
                    id="precision"
                    className="sr-only"
                />
            </div>

            {/* mobility */}
            <div className="col-start-2 row-start-3 md:p-6">
                <label
                    className="flex items-center justify-center w-full h-full"
                    htmlFor="mobility">
                    <img
                        className={`
                                    ${toggle.mobilityBackground ? "bg-blue-400" : "bg-gray-400"}
                                    cursor-pointer
                                    rounded-full 
                                    w-1/2`
                        }
                        src={mobility.icon.url}
                        alt={mobility.name}
                    />
                </label>
                <input
                    name="mobility"
                    type="checkbox"
                    onClick={() => setToggle({ ...toggle, mobilityBackground: !toggle.mobilityBackground })}
                    id="mobility"
                    className="sr-only"
                />
            </div>

        </div>
    )
}
