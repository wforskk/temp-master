import React, { ReactNode } from 'react'
import css from './AppBar.module.scss'


type Props = {
    children?: ReactNode
}

const AppBar = ({ children }: Props) => (
    <div className={css.appBar}>
    </div>
)

export default AppBar
