import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {

    render(): JSX.Element {
        return (
            <Html id="root" className="govuk-template lbh-template" lang="en-gb">
                <Head />
                <body className="govuk-template__body lbh-template__body js-enabled">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument