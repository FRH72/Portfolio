'use client';

import React from 'react';
import PressItem from './press-item';
import styles from './Press.module.scss'
import PressData from './press-data/PressData';
import { PressType } from '@/src/libraries/general-types';

export default function Press() {
    return (
        <div
            id={'press'}
            className={styles.root}
        >
            {PressData && PressData.map((item: PressType, index: number) => {
                return (
                    <React.Fragment key={Math.random()}>
                        <PressItem item={item} dir={index % 2 === 1 ? 'rtl' : 'ltr'} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}