import React, { ReactNode } from 'react'
import css from './Layout.module.scss'
import Head from 'next/head'
import AppBar from '../AppBar/AppBar'


type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => (
    <div className={css.appWrapper}>
        <Head>
            <title>portfolio</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <AppBar></AppBar>
        <div className={css.main}>
            {children}
        </div>
        <footer className={css.footer}>
            footer
        </footer>
    </div>
)

export default Layout
