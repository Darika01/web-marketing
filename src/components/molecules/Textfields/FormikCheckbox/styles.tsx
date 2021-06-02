import { setTypographyStyle } from 'components/atoms/Typography/Typography';
import styled from 'styled-components/macro';
import setIconSize from 'utils/themeConfig/setIconSize';

import { StyledIconBase } from '@styled-icons/styled-icon';

type CheckboxTYPE = {
    checked: boolean;
    disabled?: boolean;
};

export const StyledLabel = styled.label`
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    & span {
        ${({ theme }) => setTypographyStyle(theme, 'body2')};
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const Icon = styled(StyledIconBase)<CheckboxTYPE>`
    ${setIconSize(2.2)};
    path {
        fill: ${({ theme, checked }) => (checked ? theme.palette.text.secondary : theme.palette.text.tertiary)};
    }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxTYPE>`
    transition: all 0.3s;
    margin-right: 0.4rem;
`;
