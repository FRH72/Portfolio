'use client';

import { AlbumType } from '@/src/libraries/general-types';

const GalleryData: AlbumType[] = [
    {
        title: 'Gymnastics of pieces',
        images: [
            '/images/gallery/gallery-1.jpg',
            '/images/gallery/gallery-2.jpg',
            '/images/gallery/gallery-3.jpg',
            '/images/gallery/gallery-4.jpg',
            '/images/gallery/gallery-5.jpg',
        ],
        year: 2022
    },
    {
        title: 'magpie',
        images: [
            '/images/gallery/gallery-6.jpg',
            '/images/gallery/gallery-7.jpg',
            '/images/gallery/gallery-8.jpg',
            '/images/gallery/gallery-9.jpg',
            '/images/gallery/gallery-10.jpg',
        ],
        year: 2023
    },
    {
        title: 'me',
        images: [
            '/images/gallery/gallery-11.jpg',
            '/images/gallery/gallery-12.jpg',
            '/images/gallery/gallery-13.jpg',
            '/images/gallery/gallery-14.jpg',
            '/images/gallery/gallery-15.jpg',
        ]
    },
    {
        title: 'trailers',
        videos: [
            {
                title: 'The Gradual Melting of a Snowflake (2021)',
                link: 'https://www.youtube.com/watch?v=2jg5J5nA_kc',
                cover: '/images/cover/TheGradualMeltingofaSnowflake.jpg'
            },
            {
                title: 'Nasout (2021)',
                link: 'https://www.youtube.com/watch?v=rsUlXJM2zTE',
                cover: '/images/cover/Nasout.jpg'
            }
        ]
    }
]

export default GalleryData;