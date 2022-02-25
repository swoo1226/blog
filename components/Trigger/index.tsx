import style from './style.module.scss'
import { GrFormClose, GrFormSubtract } from 'react-icons/gr';
import { FaExpandAlt } from 'react-icons/fa'

export default function Trigger() {
    return (
        <div className={style.triggers}>
            <button className={`${style.trigger} ${style.red}`}>
                <GrFormClose size="15" color='#000' className={style.icon} />
            </button >
            <button className={`${style.trigger} ${style.orange}`}>
                <GrFormSubtract size="15" color='#000' className={style.icon} />
            </button >
            <button className={`${style.trigger} ${style.green}`}>
                <FaExpandAlt size="9" color='#000' className={style.icon} />
            </button >
        </div>
    )
}