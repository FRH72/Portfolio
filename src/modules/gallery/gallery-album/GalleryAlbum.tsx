'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './GalleryAlbum.module.scss'
import GallerySlideShow from '../gallery-slide-show';
import { AlbumType, AlbumVideoType } from '@/src/libraries/general-types';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Link from 'next/link';
import PlayIcon from '../../general/icon/play/PlayIcon';

export default function GalleryAlbum({
    item,
}: {
    item: AlbumType
}) {
    const
        [show, setShow] = useState<boolean>(false),
        [activeId, setActiveId] = useState<number>(0),

        handleClose = () => {
            setShow(false)
        },

        handleSelectImage = (id: number) => {
            setActiveId(id)
            setShow(true)
        },

        handleNext = () => {
            if (item.images) {
                if ((activeId + 1) === item.images?.length) {
                    setActiveId(0)
                } else {
                    setActiveId(prev => prev + 1)

                }
            }
        },

        handlePrev = () => {
            if (item.images) {
                if ((activeId) === 0) {
                    setActiveId(item.images?.length - 1)
                } else {
                    setActiveId(prev => prev - 1)
                }
            }
        };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={styles.root}>
                <div className={styles.root__title}>
                    <p>{item.title}</p>
                    {item.year && (
                        <span>{item.year}</span>
                    )}
                </div>
                {item.images && item.images.map((image: string, index: number) => {
                    return (
                        <Image
                            width={900}
                            height={600}
                            src={image}
                            alt={item.title}
                            key={Math.random()}
                            className={styles.root__image}
                            onClick={() => handleSelectImage(index)}
                        />
                    )
                })}
                {item.videos && item.videos.map((video: AlbumVideoType, index: number) => {
                    return (
                        <Link
                            href={video.link}
                            key={Math.random()}
                            prefetch={false}
                            className={styles.root__image}
                            target={'_blank'}
                        >
                            <Image
                                width={900}
                                height={600}
                                src={video.cover}
                                alt={video.title}
                            />
                            <div className={styles.root__image__info}>
                                <div className={styles.root__image__info__icon}>
                                    <PlayIcon />
                                </div>
                                <p className={styles.root__image__info__label}>{video.title}</p>
                            </div>
                        </Link>
                    )
                })}
                <GallerySlideShow
                    show={show}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    activeId={activeId}
                    images={item.images}
                    onClose={handleClose}
                />
            </div>
        </ClickAwayListener>
    )
}