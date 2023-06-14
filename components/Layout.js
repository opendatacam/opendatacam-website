import Head from 'next/head'
import getConfig from 'next/config'

function Layout({children}) {
    const { publicRuntimeConfig } = getConfig()
    const { ROOT_URL } = publicRuntimeConfig
    const title = `OpenDataCam`
    const description = `An open source tool to quantify the world`
    const url = `https://www.move-lab.com/project/opendatacam/`
    const urlSiteImage = `${url}static/seo/seo.jpg`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1,user-scalable=0,initial-scale=1'
                />
                <meta
                    name='description'
                    content={description}
                />
                <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="static/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png" />
                <link rel="manifest" href="static/favicon/site.webmanifest" />
                <link rel="mask-icon" href="static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    property='og:title'
                    content={title}
                />
                <meta
                    property='og:url'
                    content={url}
                />
                <meta
                    property='og:image'
                    content={urlSiteImage}
                />
                <meta
                    property='og:description'
                    content={description}
                />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='move Lab' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content='@moovelLab' />
                <meta
                    name='twitter:title'
                    content={title}
                />
                <meta
                    name='twitter:description'
                    content={description}
                />
                <meta
                    name='twitter:image'
                    content={urlSiteImage}
                />
            </Head>
            {children}
        </>
    )
}

export default Layout;
