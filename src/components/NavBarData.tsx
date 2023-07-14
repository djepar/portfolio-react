import React from "react";
import * as FaIcons from 'react-icons/fa'

export const NavBarData = [
    {
        title : 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title : 'Projects',
        path: '/projects',
        icon: <FaIcons.FaCodeBranch />
    },{
        title : 'Contact',
        path: '/contact',
        icon: <FaIcons.FaAddressCard />
    },
]