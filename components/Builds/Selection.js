import { useState, useEffect } from "react"
import Bow from "./Weapon/Bow"
import FireStaff from "./Weapon/FireStaff"
import GreatAxe from "./Weapon/GreatAxe"
import Hatchet from "./Weapon/Hatchet"
import IceGaunlet from "./Weapon/IceGaunlet"
import LifeStaff from "./Weapon/LifeStaff"
import Musket from "./Weapon/Musket"
import Rapier from "./Weapon/Rapier"
import Spear from "./Weapon/Spear"
import StraightSword from "./Weapon/StraightSword"

export default function Selection({ abilities, firstWeapon, setFirstWeapon, secondWeapon, setSecondWeapon }) {
    const weaponmaster = abilities.filter((item) => item.Weapon_Tree === 'swordmaster')

    return (
        <div>
            {/* first weapon */}
            <div className="flex flex-col">
                <label htmlFor="firstWeapon" className="text-white mb-1 tracking-wider">First Weapon</label>
                <select
                    id="firstWeapon"
                    name="firstWeapon"
                    value={firstWeapon}
                    onChange={(e) => setFirstWeapon(e.target.value)}
                    className="w-40 bg-gray-100 text-gray-400 border-2 border-gray-100 py-2 px-2 outline-none rounded focus:outline-none focus:bg-white focus:border-blue-400 focus:text-secondary"
                >
                    <option value="">Weapon One</option>
                    <option value="Bow">Bow</option>
                    <option value="FireStaff">Fire Staff</option>
                    <option value="GreatAxe">Great Axe</option>
                    <option value="Hatchet">Hatchet</option>
                    <option value="IceGaunlet">Ice Gaunlet</option>
                    <option value="LifeStaff">Life Staff</option>
                    <option value="Musket">Musket</option>
                    <option value="Rapier">Rapier</option>
                    <option value="Spear">Spear</option>
                    <option value="StraightSword">Straight Sword</option>
                </select>
            </div>

            {firstWeapon === 'StraightSword' && <StraightSword weaponmaster={weaponmaster} />}
        </div>
    )
}
