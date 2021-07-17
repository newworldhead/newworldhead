import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../utils/gtag'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
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