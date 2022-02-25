import { useEffect } from 'react'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/navbar.module.scss'
import { FaHome, FaUser, FaPizzaSlice, FaAt, FaDrawPolygon } from 'react-icons/fa';
import React from 'react';
export default function NavBar() {
    useEffect(() => {
        const callback = (entries: any, observer: any) => {
            console.log(entries)
        }
        let options = {
            root: document.querySelector('nav'),
            rootMargin: '0px',
            threshold: 1.0
        }
        let observer = new IntersectionObserver(callback, options)
        let target = document.querySelector('.navMenu')
        observer.observe(target!)
    }, [])
    const Links = [
        'home',
        'about',
        'posts',
        'contact',
        'neon'
    ]
    const Icons: { [key: string]: any } = {
        home: () => <FaHome size='24' />,
        about: () => <FaUser size='24' />,
        posts: () => <FaPizzaSlice size='24' />,
        contact: () => <FaAt size='24' />,
        neon: () => <FaDrawPolygon size='24' />
    }
    const linkMaker = (links: string[]) => {
        return links.map((link: string, index: number) =>
            <Link key={link} href={`/${link === 'home' ? '' : link}`}>
                <a className='navMenu' onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.scrollIntoView({ behavior: 'smooth' }) }}>{Icons[link]()}
                    <span>{link.toUpperCase()}</span>
                </a>
            </Link>)
    }
    return (
        <nav className={`${utilStyles.glass} ${styles.nav}`}>
            {linkMaker(Links)}
        </nav>
    )
}