import navItems, { NavItemTYPE } from './navItems';
import { StyledNavbar, NavList, NavListItem, NavListItemIcon } from './styles';

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <NavList>
                {navItems.map((el: NavItemTYPE) => (
                    <NavListItem key={el.title} exact activeClassName="active" to={el.linkTo}>
                        <NavListItemIcon as={el.icon} />
                        {el.title}
                    </NavListItem>
                ))}
            </NavList>
        </StyledNavbar>
    );
};
export default Navbar;
