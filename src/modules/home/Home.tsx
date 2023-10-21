'use client'

import Image from 'next/image';
import styles from './Home.module.scss'

export default function Home() {
    const handleButtonClick = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div
            id={'home'}
            className={styles.root}
        >
            <Image
                width={1552}
                height={1080}
                alt={'meisam mozafari'}
                src={'/images/meisam-mozafari-home.jpg'}
            />
            <div className={styles.root__info}>
                <h1>writer, film and theater director</h1>
                <p>
                    My name is Meisam Mozafari. Born on November 24, 1987 in Iran.
                    I studied Theater directing at the Master’s level...
                </p>
                <button onClick={handleButtonClick}>
                    Read More
                </button>
            </div>
        </div>
    )
}