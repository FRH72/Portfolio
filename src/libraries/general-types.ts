import { ReactNode } from 'react'

export interface MenuDataType {
    id: number
    title: string
    link: string
}

export interface MenuSocialType {
    icon: ReactNode
    link: string
}

export interface ArtType {
    name: string
    year: string
    smallImage: string
    largImage: string
    label: string
}

export interface PressType {
    title: string
    image: string
}

export interface AlbumVideoType {
    cover: string
    link: string
    title: string
}

export interface AlbumType {
    title: string
    images?: string[]
    year?: number
    videos?: AlbumVideoType[]
}