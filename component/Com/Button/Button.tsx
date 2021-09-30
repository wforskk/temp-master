import React, { ReactNode } from 'react'
import css from './Button.module.scss'

// コンポーネントの引数
type Props = {
    children?: ReactNode,
    className?: string,
    item?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

// TODO：初期押下でリップルが反応しない
const createRipple = (event: any): void => {

    if (event.srcElement.nodeName !== 'BUTTON') {
        return
    }

    // DOM 参照用
    if (typeof document !== 'undefined') {

        const circle = document.createElement('span')
        const diameter = Math.max(event.clientX, event.clientY)
        const radius = diameter / 2

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.offsetX - radius}px`
        circle.style.top = `${event.offsetY - radius}px`
        circle.classList.add(css.ripple);

        const button = event.srcElement;

        const rippleList = button.getElementsByClassName(css.ripple)

        if (rippleList != null) {
            for (let ripple of rippleList) {
                ripple.remove()
            }
        }

        button.appendChild(circle)
    }
}

// ボタンにクリックイベントを追加
// DOMがない状態では追加できないので実行順を後ろに回す
const addOnClickEvent = () => {

    setTimeout(() => {
        if (typeof document !== 'undefined') {
            const buttons = document.getElementsByClassName(css.button);
            if (Array.isArray(buttons)) {
                for (const button of buttons) {
                    button.addEventListener('click', createRipple);
                }
            }
        }
    }, 0);
}

// メニューコンポーネント作成処理
export default function Button({ children, className = '', item, onClick = () => { } }: Props): JSX.Element {

    addOnClickEvent()

    const el = <button
        className={className + ' ' + css.button}
        onClick={onClick}
        data-item={item}
    >
        {children}
    </button>

    return el
}