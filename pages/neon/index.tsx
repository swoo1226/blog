import { useState, useEffect } from 'react'
import style from './neon.module.scss'
export default function Neon() {
    const [neonText, setNeonText] = useState<string | null>('')

    return (
        <div className={style.container}>
            <input className={style.neonInput} type='text' placeholder='Enter Your Neon Text' onChange={(e) => { setNeonText(e.target.value) }} />
            {neonText && <div className={style.neon}>{neonText}</div>}
        </div>
    )
}