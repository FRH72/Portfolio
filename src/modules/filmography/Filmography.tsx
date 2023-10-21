'use client';

import React from 'react';
import Art from '../general/Art';
import styles from './Filmography.module.scss'
import FilmographyData from './FilmographyData';
import { ArtType } from '@/src/libraries/general-types';

export default function Filmography() {
    return (
        <div
            id={'filmography'}
            className={styles.root}
        >
            {FilmographyData && FilmographyData.map((item: ArtType, index: number) => {
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