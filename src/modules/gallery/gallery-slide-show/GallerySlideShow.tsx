'use client';

import Image from 'next/image';
import { Fade } from '@mui/material';
import styles from './GallerySlideShow.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '../../general/icon/close/CloseIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GallerySlideShow({
    activeId,
    onNext,
    onPrev,
    show,
    images,
    onClose,
}: {
    activeId: number
    onNext: any
    onPrev: any
    show: boolean
    images?: string[]
    onClose:any
}) {

    return (
        <div className={`${styles.root} ${show ? styles.root__show : ''}`}>
            <div
                className={styles.root__tool}
                onClick={onPrev}
            >
                <ArrowBackIcon />
            </div>
            <div className={styles.root__slides}>
                {images && images.map((item: string, index: number) => {
                    return (
                        <Fade
                            in={activeId === index}
                            key={Math.random()}
                        >
                            <div className={`${styles.root__slides__item} ${activeId !== index ?styles.root__slides__item__hidden:''}`}>
                                <div className={styles.root__slides__item__header}>
                                    <p>{`${activeId+1}/${images.length}`}</p>
                                    <div 
                                    onClick={onClose}
                                    className={styles.root__slides__item__header__close}
                                    >
                                        <CloseIcon/>
                                    </div>
                                </div>
                                <Image
                                    src={item}
                                    alt={''}
                                    width={900}
                                    height={600}
                                />
                            </div>
                        </Fade>
                    )
                })}
            </div>
            <div
                className={styles.root__tool}
                onClick={onNext}
            >
                <ArrowForwardIcon />
            </div>
        </div >
    )
}