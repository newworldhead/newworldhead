import { useState, useEffect } from "react"

export default function WeaponRecommendation() {

    const data = [
        {name: "Sword"},
    ]
    const [weapons, setWeapons] = useState([])


    return (
        <div className="bg-secondary w-full h-96 my-1">
            <div className="flex flex-col items-center justify-between h-full">
                <p>Sword</p>
                <p>Rapier</p>
                <p>Hatchet</p>
                <p>War Hammer</p>
                <p>Great Axe</p>
                <p>Spear</p>
                <p>Bow</p>
                <p>Musket</p>
                <p>Fire Staff</p>
                <p>Life Staff</p>
                <p>Ice Gauntlet</p>
            </div>
        </div>
    )
}
