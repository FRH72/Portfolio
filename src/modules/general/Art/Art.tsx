'use client';

import Image from 'next/image';
import styles from './Art.module.scss'
import { ArtType } from '@/src/libraries/general-types';

export default function Art({
    item,
    dir
}: {
    item: ArtType
    dir: string
}) {
    return (
        <div className={`${styles.root} dir_${dir}`}>
            <div className={styles.root__info}>
                <p className={styles.root__info__label}>
                    {item.label}:
                </p>
                <p className={styles.root__info__name}>
                    {item.name}
                </p>
                <p className={styles.root__info__year}>
                    {item.year}
                </p>
            </div>
            <Image
                width={267}
                height={378}
                alt={item.name}
                src={item.smallImage}
                className={styles.root__smallImage}
            />
            <Image
                width={568}
                height={378}
                alt={item.name}
                src={item.largImage}
                className={styles.root__largeImage}
            />
        </div>
    )
}