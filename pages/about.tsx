import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
export default function About() {
    return (
        <>
            <h2 className={utilStyles.headingLg}>About Me</h2>
            <div>
                {/* <Image width={400} height={300} src='/images/profile.jpg' alt='myProfile' /> */}
            </div>
        </>
    )
}