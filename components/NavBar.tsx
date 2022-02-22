import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Flame from './Flame'
export default function NavBar() {
    return (
        <nav className={utilStyles.glass} id='nav'>
            <Link href='/'>Home</Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'><a>Contact</a></Link>
            <style jsx>{`
                nav {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 10rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 3rem;
                    gap: 2rem;
                }
                nav:last-child {
                    margin-top: 20px;
                }
            `}</style>
        </nav>
    )
}