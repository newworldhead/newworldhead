import marked from 'marked'
import htmlReactParser, { domToReact } from 'html-react-parser';

// data formater
export function formatDate(date) {

    const rawDate = new Date(date)

    const day = rawDate.getDay()
    const month = rawDate.getMonth()
    const year = rawDate.getFullYear()

    const created_at = new Date(Date.UTC(year, month, day, 0, 0))
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return created_at.toLocaleDateString('en-GB', options);
}

// data formater for inputs
export function formatDateForInput(date) {
    const formatted = new Date(date).toISOString().slice(0, 10)
    return formatted
}

// parser html, can parse md
export function parse(string) {

    // Marked options
    marked.setOptions({
        headerIds: false,
        headerPrefix: true
    })

    // Mot using for the lastest update
    const markedString = marked(string)
    const htmlParser = htmlReactParser(string)

    return htmlParser
}

// return how long on ave time to read
export function timeByWordCount(str) {

    // Apprantly average rate is 250 words per minute (wpm)
    const wordCount = str.match(/(\w+)/g).length;
    const timeTaken = Math.floor(wordCount / 250)
    return timeTaken
}