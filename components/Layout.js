import Head from 'next/head'
import stylesheet from '../styles/index.css'
import getConfig from 'next/config'

function Layout({children}) { 
    const { publicRuntimeConfig } = getConfig()
    const { ROOT_URL } = publicRuntimeConfig
    const title = `Flights to Rome - moovel lab`
    const description = `"Flights to Rome" is a data visualization project that explores the idiom, "all roads lead to Rome". The outcome is both information visualization and data art and unveils mobility infrastructures on land and in the air.`
    const url = `https://${ROOT_URL}`
    const urlSiteImage = `static/seo/seo.jpg`

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
                <link
                    rel='apple-touch-icon'
                    href='static/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    href='static/favicon/favicon.png'
                />
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
                <meta property='og:site_name' content='moovel lab' />
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
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            </Head>
            {children}
        </>
    )
}

export default Layout;
