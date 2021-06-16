import marked from 'marked'
import htmlReactParser, { domToReact } from 'html-react-parser';

export function parse(string) {

    // Marked options
    marked.setOptions({
        headerIds: false,
        headerPrefix: true
    })

    const markedString = marked(string)
    const htmlParser = htmlReactParser(markedString)

    return htmlParser
}