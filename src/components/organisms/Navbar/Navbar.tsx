import { NavLink, useHistory } from 'react-router-dom';

import { LogInOutline } from '@styled-icons/evaicons-outline/LogInOutline';

import navItems, { NavItemTYPE } from './navItems';
import {
	NavItem,
	NavList,
	NavListItemIcon,
	NavLogoutItem,
	StyledNavbar
} from './styles';

const Navbar: React.FC = () => {
    const history = useHistory();

    const onLogout = () => {
        sessionStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <StyledNavbar>
            <NavList>
                {navItems.map((el: NavItemTYPE) => (
                    <NavItem key={el.title} exact activeClassName="active" to={el.linkTo} as={NavLink}>
                        <NavListItemIcon as={el.icon} />
                        {el.title}
                    </NavItem>
                ))}
            </NavList>
            <NavLogoutItem onClick={onLogout}>
                <NavListItemIcon as={LogInOutline} />
                Logout
            </NavLogoutItem>
        </StyledNavbar>
    );
};
export default Navbar;
