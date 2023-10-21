'use client';

import Link from 'next/link';
import styles from './Menu.module.scss'
import { useEffect, useState } from 'react';
import MenuIcon from '../general/icon/menu/MenuIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuData, MenuSocial } from './menu-data/MenuData';
import { MenuDataType, MenuSocialType } from '@/src/libraries/general-types';

export default function Menu() {
    const
        [activeLink, setActiveLink] = useState<number>(0),
        tablet = useMediaQuery('(max-width:1024px)'),
        [open, setOpen] = useState<boolean>(true),

        handleToggleMenu = (status: boolean) => {
            if (status) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "visible"
            }
            setOpen(status)
        },

        handleMenuClick = (index: number, link: string) => {
            setActiveLink(index)
            document.getElementById(link)?.scrollIntoView({
                behavior: 'smooth',
            });
            setOpen(false)
        },

        findActiveLinkId = (id: string) => {
            if (MenuData && id) {
                const activeLink = MenuData?.find((item: MenuDataType) => item.title === id)

                if (activeLink) {
                    setActiveLink(activeLink.id)
                }

            }

        };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > (document?.getElementById('home')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('home')
            }
            if (window.scrollY > (document?.getElementById('about')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('about')
            }
            if (window.scrollY > (document?.getElementById('filmography')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('filmography')
            }
            if (window.scrollY > (document?.getElementById('theater')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('theater')
            }
            if (window.scrollY > (document?.getElementById('press')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('press')
            }
            if (window.scrollY > (document?.getElementById('gallery')?.offsetTop || 0) - window.innerHeight / 2) {
                findActiveLinkId('gallery')
            }
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!tablet) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [tablet])

    return (
        <>
            {(tablet && open) && (
                <div
                    onClick={() => handleToggleMenu(false)}
                    className={`${styles.backdrop} ${styles.backdrop__open}`}
                />
            )}
            {tablet && (
                <div
                    onClick={() => handleToggleMenu(true)}
                    className={styles.menuIcon}
                >
                    <MenuIcon />
                </div>
            )}
            <div className={`${styles.root} ${open ? styles.root__open : ''}`}>
                <div className={styles.root__links}>
                    {MenuData && MenuData.map((item: MenuDataType) => (
                        <div
                            key={Math.random()}
                            className={`${styles.root__links__item} 
                                        ${activeLink === item.id && styles.root__links__item__active}`}
                            onClick={() => handleMenuClick(item.id, item.link)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className={styles.root__copyright}>
                    <span>to@meisammozafari.com</span>
                    <div className={styles.root__copyright__socials}>
                        {MenuSocial && MenuSocial.map((item: MenuSocialType) => {
                            return (
                                <Link
                                    href={item.link}
                                    key={Math.random()}
                                    target={'_blank'}
                                >
                                    {item.icon}
                                </Link>
                            )
                        })}
                    </div>
                    <p>Copyright | Meisam Mozafari</p>
                </div>
            </div>

        </>
    )
}