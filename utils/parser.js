import marked from 'marked'
import htmlReactParser, { domToReact } from 'html-react-parser';

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