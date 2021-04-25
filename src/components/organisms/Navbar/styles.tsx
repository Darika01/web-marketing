import styled from 'styled-components/macro';
import setIconSize from 'utils/themeConfig/setIconSize';

import { StyledIconBase } from '@styled-icons/styled-icon';

export const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.palette.bgr.navbar};
    z-index: 4;
    position: sticky;
    top: 0;
    padding: ${({ theme }) => theme.space[0]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const NavListItemIcon = styled(StyledIconBase)`
    ${setIconSize(2)};
    color: inherit;
    margin-right: ${({ theme }) => theme.space[0]};
`;

export const NavItem = styled.p`
    color: ${({ theme }) => theme.palette.grey[300]};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space[2]};
    &:not(:last-child) {
        margin-right: ${({ theme }) => theme.space[2]};
    }
    transition: border ${({ theme }) => theme.transitions.easing.easeInOut};
    &.active {
        color: ${({ theme }) => theme.palette.common.white};
        pointer-events: none;
    }
    &:hover {
        color: ${({ theme }) => theme.palette.common.white};
    }
`;

export const RightNavSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const NavLogoutItem = styled(NavItem)`
    cursor: pointer;
`;
