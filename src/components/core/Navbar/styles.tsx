import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import setIconSize from 'utils/themeConfig/setIconSize';

import { StyledIconBase } from '@styled-icons/styled-icon';

export const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.palette.bgr.navbar};
    z-index: 4;
    position: sticky;
    top: 0;
    padding: ${({ theme }) => theme.space[2]};
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const NavListItemIcon = styled(StyledIconBase)`
    ${setIconSize(2)};
    color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.grey[400]};
    padding-right: ${({ theme }) => theme.space[1]};
`;

export const NavListItem = styled(NavLink)`
    color: ${({ theme }) => theme.palette.grey[300]};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space[2]};
    &:not(:last-child) {
        margin-right: ${({ theme }) => theme.space[5]};
    }
    transition: border ${({ theme }) => theme.transitions.easing.easeInOut};
    &.active {
        color: ${({ theme }) => theme.palette.common.white};
        pointer-events: none;
        ${NavListItemIcon} {
            color: ${({ theme }) => theme.palette.common.white};
        }
    }
`;

export const RightNavSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
