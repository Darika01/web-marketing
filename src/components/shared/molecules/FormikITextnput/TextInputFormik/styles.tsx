import { Body1 } from 'components/shared/atoms/Typography/Typography';
import { Field } from 'formik';
import styled from 'styled-components/macro';

export const InputContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 2.8rem;
    }
`;
export const StyledInput = styled(Field)`
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.palette.grey[400]};
    margin-bottom: 1.6rem;
    padding: 1.6rem;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.palette.text.primary};
    border-radius: ${({ theme }) => theme.border.radius};
`;
export const StyledLabel = styled(Body1)`
    margin-bottom: 0.8rem;
`;
