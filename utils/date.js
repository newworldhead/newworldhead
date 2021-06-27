
export function formatDate(date) {

    const rawDate = new Date(date)

    const day = rawDate.getDay()
    const month = rawDate.getMonth()
    const year = rawDate.getFullYear()

    const created_at = new Date(Date.UTC(year, month, day, 0, 0))
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return created_at.toLocaleDateString('en-GB', options);
}

export function formatDateForInput(date) {
    const formatted = new Date(date).toISOString().slice(0, 10)
    return formatted
}