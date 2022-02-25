import { useState, useEffect } from 'react'
import Neon from '../Neon'
import style from './style.module.scss'
export default function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    })

    return (
        <div className={style.clock}>
            <Neon>
                <div>
                    {time.toLocaleTimeString('en-US')}
                </div>
            </Neon>
        </div>
    )
}