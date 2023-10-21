'use client';

import Image from 'next/image';
import styles from './PressItem.module.scss'
import { PressType } from '@/src/libraries/general-types';

export default function PressItem({
    item,
    dir
}: {
    item: PressType
    dir: string
}) {
    return (
        <div className={`${styles.root} dir_${dir}`}>
            <Image
                width={220}
                height={220}
                alt={item.title}
                src={item.image}
            />
            <p>{item.title}</p>
        </div>
    )
}