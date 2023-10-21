'use client'

import  YoutubeIcon from '../../general/icon/youtube/YoutubeIcon';
import LinkedinIcon from '../../general/icon/linkedin/LinkedinIcon';
import InstagramIcon from '../../general/icon/instagram/InstagramIcon';
import { MenuDataType, MenuSocialType } from '@/src/libraries/general-types';

const MenuData: MenuDataType[] = [
    {
        id: 0,
        title: 'home',
        link: 'home'
    },
    {
        id: 1,
        title: 'about',
        link: 'about'
    },
    {
        id: 2,
        title: 'filmography',
        link: 'filmography'
    },
    {
        id: 3,
        title: 'theater',
        link: 'theater'
    },
    {
        id: 4,
        title: 'press',
        link: 'press'
    },
    {
        id: 5,
        title: 'gallery',
        link: 'gallery'
    },
];

const MenuSocial: MenuSocialType[] = [
    {
        icon: <InstagramIcon />,
        link: 'https://www.instagram.com/meisammozaffari/'
    },
    {
        icon: <YoutubeIcon />,
        link: 'https://www.youtube.com/channel/UC2o-QL6wY7EFboQveI8-Igw'
    },
    {
        icon: <LinkedinIcon />,
        link: 'https://www.linkedin.com/in/meisam-mozaffari-87b9a0167/'
    },
]

export { MenuData, MenuSocial };