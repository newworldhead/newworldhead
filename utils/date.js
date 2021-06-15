
export function formatDate(date) {

    // fuck date and time, what a load of stupid shit!
    const rawDate = new Date(date)

    const day = rawDate.getDay()
    const month = rawDate.getMonth()
    const year = rawDate.getFullYear()

    const created_at = new Date(Date.UTC(year, month, (day - 1), 0, 0))
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return created_at.toLocaleDateString('en-GB', options);
}