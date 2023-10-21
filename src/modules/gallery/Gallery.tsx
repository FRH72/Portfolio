'use client';

import React from 'react';
import GalleryData from './gallery-data';
import styles from './Gallery.module.scss';
import GalleryAlbum from './gallery-album';
import { AlbumType } from '@/src/libraries/general-types';

export default function Gallery() {
    return (
        <div
            id={'gallery'}
            className={styles.root}
        >
            {GalleryData && GalleryData.map((item: AlbumType) => {
                return (
                    <React.Fragment key={Math.random()}>
                        <GalleryAlbum item={item} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}