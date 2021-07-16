// import { useState, useEffect } from "react"
// import MainLayout from "@/components/MainLayout"
// import Strength from "@/components/Builds/Attributes/Stength"
// import Dexterity from "@/components/Builds/Attributes/Dexterity"
// import Intelligence from "@/components/Builds/Attributes/Intelligence"
// import Focus from "@/components/Builds/Attributes/Focus"
// import Constitution from "@/components/Builds/Attributes/Constitution"
// import Breadcrumbs from "@/components/Global/BreadCrumbs"
// import WeaponRecommendation from "@/components/Builds/Recommendation/WeaponRecommendation"
// import Selection from "@/components/Builds/Selection"
// import { API_URL } from "@/config/index"


// export default function BuildsIndex({ abilities }) {

//     const [currentPoints, setCurrentPoints] = useState(190)
//     const [totalPoints, setTotalPoints] = useState(0)

//     const [strength, setStrength] = useState(5)
//     const [dexterity, setDexterity] = useState(5)
//     const [intelligence, setIntelligence] = useState(5)
//     const [focus, setFocus] = useState(5)
//     const [constitution, setConstitution] = useState(5)

//     const [firstWeapon, setFirstWeapon] = useState('')
//     const [secondWeapon, setSecondWeapon] = useState('')

//     const checkPointState = () => {
//         setTotalPoints(strength + dexterity + intelligence + focus + constitution)
//         currentPoints > 190 && setCurrentPoints(190)
//         currentPoints < 0 && setCurrentPoints(0)
//     }

//     const submitHandler = () => {
//         console.log({
//             strength,
//             dexterity,
//             intelligence,
//             focus,
//             constitution,
//             firstWeapon,
//             secondWeapon
//         })
//     }

//     useEffect(() => {
//         checkPointState()
//     }, [totalPoints, currentPoints])

//     return (
//         <MainLayout>
//             <div className="container mx-auto">

//                 <h1 className="font-primary text-white text-center text-5xl uppercase mt-10 md:text-left">Weapon Builder</h1>

//                 <div className="container mx-auto flex flex-row items-center bg-secondary my-6 p-4">
//                     <Breadcrumbs />
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-4">
//                     <div className="md:w-3/4 w-full">

//                         <div className="flex md:flex-row flex-col justify-between md:items-end items-center gap-2">
//                             <div>
//                                 <p className="text-center md:text-left uppercase text-sm tracking-widest mb-1 mt-10 text-white">player</p>
//                                 <h2 className="text-center md:text-left text-white uppercase tracking-widest font-primary md:ml-0 text-3xl">attributes</h2>
//                             </div>
//                             <div className="flex flex-row items-center text-white uppercase tracking-widest gap-2 mr-4 md:mt-0 mt-8">
//                                 <p className="text-xl font-primary self-end">points available</p>
//                                 <h3 className="text-yellow-300 text-3xl font-mono">{currentPoints}</h3>
//                             </div>
//                         </div>

//                         <Strength
//                             currentPoints={currentPoints}
//                             setCurrentPoints={setCurrentPoints}
//                             strength={strength}
//                             setStrength={setStrength}
//                             totalPoints={totalPoints}
//                         />
//                         <Dexterity
//                             currentPoints={currentPoints}
//                             setCurrentPoints={setCurrentPoints}
//                             dexterity={dexterity}
//                             setDexterity={setDexterity}
//                             totalPoints={totalPoints}
//                         />
//                         <Intelligence
//                             currentPoints={currentPoints}
//                             setCurrentPoints={setCurrentPoints}
//                             intelligence={intelligence}
//                             setIntelligence={setIntelligence}
//                             totalPoints={totalPoints}
//                         />
//                         <Focus
//                             currentPoints={currentPoints}
//                             setCurrentPoints={setCurrentPoints}
//                             focus={focus}
//                             setFocus={setFocus}
//                             totalPoints={totalPoints}
//                         />
//                         <Constitution
//                             currentPoints={currentPoints}
//                             setCurrentPoints={setCurrentPoints}
//                             constitution={constitution}
//                             setConstitution={setConstitution}
//                             totalPoints={totalPoints}
//                         />
//                     </div>

//                     <div className="md:w-1/4 w-full">
//                         <p className="text-center md:text-left uppercase text-sm tracking-widest mb-1 mt-10 text-white">weapon</p>
//                         <h2 className="text-center md:text-left text-white uppercase tracking-widest font-primary md:ml-0 text-3xl">recommendation</h2>
//                         <WeaponRecommendation />
//                     </div>
//                 </div>

//                 {/* weapon selection */}
//                 <Selection
//                     abilities={abilities}
//                     firstWeapon={firstWeapon}
//                     setFirstWeapon={setFirstWeapon}
//                     secondWeapon={secondWeapon}
//                     setSecondWeapon={setSecondWeapon}
//                 />

//             </div>
//         </MainLayout>
//     )
// }

// export async function getServerSideProps() {

//     const fetchSkillTree = await fetch(`${API_URL}/skill-trees`)
//     const fetchedSkillTree = await fetchSkillTree.json()

//     console.log(fetchedSkillTree);
//     const abilities = fetchedSkillTree[0].abilities

//     return {
//         props: {
//             abilities
//         }
//     }
// }