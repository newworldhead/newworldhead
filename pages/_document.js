import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&family=Poppins:wght@500&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument