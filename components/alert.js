import styles from './alert.module.css'
import cn from 'classnames'

export default alert({children, type}){
    return(
        <div
        className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
        })}
        >{children}</div>
    )
}