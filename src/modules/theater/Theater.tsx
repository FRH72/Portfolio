'use client';

import React from 'react';
import Art from '../general/Art';
import TheaterData from './TheaterData';
import styles from './Theater.module.scss'
import { ArtType } from '@/src/libraries/general-types';

export default function Theater() {
    return (
        <div
            id={'theater'}
            className={styles.root}
        >
            {TheaterData && TheaterData.map((item: ArtType, index: number) => {
                return (
                    <React.Fragment key={Math.random()}>
                        <Art
                            item={item}
                            dir={index % 2 === 0 ? 'rtl' : 'ltr'}
                        />
                    </React.Fragment>
                )
            })}
        </div>
    )
}