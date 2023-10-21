'use client';

import Image from 'next/image';
import styles from './About.module.scss'

export default function About() {
    return (
        <div
            id={'about'}
            className={styles.root}
        >
            <div className={styles.root__description}>
                <p>
                    Born on November 24, 1987 in Iran. I first started my artistic career by
                    writing short stories and learned music and painting as a teenager. In 2015,
                    I started writing plays under the supervision of  Mohammad Charmshir,
                    a great Iranian playwright. Also, I studied stage design at the bachelor&apos;s
                    level and theater directing at the master&apos;s level at the university,
                    and in this way, I learned from professors such as Dr. Masoud Delkhah (theatre director),
                    Dr. Farhad Mohandespour (director and dramaturg), and Kianoush Ayari (cinema director)
                    and I presented my thesis by studying the works of Jerzy Grotowski, Tadeusz Kantor,
                    Robert Wilson, Samuel Beckett and Bertolt Brecht with an excellent grade.
                </p>
                <p>
                    In 2016, I wrote and performed my first play called “Morwarid”,
                    and after that I have directed and written 3 theaters, written
                    and directed 5 short films, directed a documentary, written 5 plays,
                    written 10 short scripts and 1 long script. I have in my artistic
                    portfolio, many of which have been awarded in various domestic and foreign festivals.
                </p>
                <p>
                    My desire to create and see what I have written and then designed on
                    the screen or stage always puts me on the path of searching for new opportunities.
                </p>
            </div>
            <div className={styles.root__image}>
                <h2>
                    my name is<br /> meisam mozafari
                </h2>
                <Image
                    width={698}
                    height={500}
                    src={'/images/meisam-mozafari-about.jpg'}
                    alt={'Meisam Mozafari'}
                />
            </div>
        </div >
    )
}