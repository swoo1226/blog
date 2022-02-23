import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function NavBar() {

    return (
        <nav className={`${utilStyles.glass} menu`}>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/posts'><a>Posts</a></Link>
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
                .menu-inner {
                    display: none;
                }
                @media (max-width: 1300px) {
                    nav {
                        width: 100%;
                        height: 70px;
                        flex-direction: row;
                        
                        overflow-x: scroll;
                        position:relative;
                        align-items: center;
                        padding: 1rem;
                        margin: auto;
                    }
                    .menu-inner {
                        display: flex;
                        gap: 2rem;
                    }
                }
            `}</style>
        </nav>
    )
}