import style from './style.module.scss'

type NeonPropsType = {
    children: JSX.Element | JSX.Element[]
}

export default function Neon({ children }: NeonPropsType) {
    return <div className={style['neon-clock']}>{children}</div>
}