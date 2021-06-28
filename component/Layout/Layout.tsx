import React, { ReactNode } from 'react'
import css from './Layout.module.scss'
import AppBar from '../AppBar/AppBar'


type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => (
    <div className={css.appWrapper}>
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
