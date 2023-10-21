'use client';

import Menu from '@/src/modules/menu';
import styles from './Layout.module.scss'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className={styles.root}>
            <Menu />
            {children}
        </div>
    )
}