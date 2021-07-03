import React, { useRef, useEffect, useState } from "react"

export default function CountDown() {

    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date('July 20, 2021 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])


    return (
        <section className="
            bg-blue-400
            w-full 
            py-1 
            text-white 
            flex 
            flex-row 
            gap-2 
            capitalize
            tracking-wide
            items-center 
            justify-center
            ">
            <div>
                <p>New World Beta Starts in: </p>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2">
                    <p>{timerDays}</p>
                    <p>days</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p>{timerHours}</p>
                    <p>hours</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p>{timerMinutes}</p>
                    <p>minutes</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p>{timerSeconds}</p>
                    <p>seconds!</p>
                </div>
            </div>
        </section>
    )
}
