import { DesignServices } from '@styled-icons/material-sharp';
import { Home } from '@styled-icons/boxicons-regular';
import { InfoCircle } from '@styled-icons/boxicons-regular';
import { ContactSupport } from '@styled-icons/material-outlined';
import { StyledIcon } from '@styled-icons/styled-icon';

export type NavItemTYPE = {
    title: string;
    linkTo: string;
    icon: StyledIcon;
};

const navItems: Array<NavItemTYPE> = [
    { title: 'Home', linkTo: '/', icon: Home },
    { title: 'Services', linkTo: '/services', icon: DesignServices },
    { title: 'About', linkTo: '/about', icon: InfoCircle },
    { title: 'Contact Us', linkTo: '/contact', icon: ContactSupport }
];

export default navItems;
