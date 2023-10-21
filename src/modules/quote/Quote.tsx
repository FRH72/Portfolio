'use client';

import Image from 'next/image';
import styles from './Quote.module.scss'

export default function Quote() {
    return (
        <div className={styles.root}>
            <Image
                width={1552}
                height={1080}
                src={'/images/meisam-mozafari-quote.jpg'}
                alt={'meisam mozafari'}
            />
            <div className={styles.root__info}>
                <span>Part of the &quot;Magpie&quot; play:</span>
                <p>
                    Ideals and pains always grow together.
                    Sometimes pains take precedence, and sometimes we achieve our goals and ideals.
                    But there is a bitter truth, and that is, unfortunately, I should be very clear
                    and straightforward with you: a happy ending is unlikely to happen.
                </p>
            </div>
        </div>
    )
}