import { Body1 } from 'components/shared/atoms/Typography/Typography';
import { Field } from 'formik';
import styled from 'styled-components/macro';

type StyledInputTYPE = {
    error: boolean;
    disabled?: boolean;
};

export const InputContainer = styled.div`
    margin-bottom: 2.8rem;
    &:last-child {
        margin-bottom: 4rem;
    }
`;
export const StyledInput = styled(Field)<StyledInputTYPE>`
    width: 100%;
    border: 0.1rem solid ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.grey[400])};
    padding: 1.6rem;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.palette.text.primary};
    border-radius: ${({ theme }) => theme.border.radius};
    &:hover,
    :focus {
        border: 0.1rem solid ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.grey[600])};
    }
`;
export const StyledLabel = styled(Body1)`
    margin-bottom: 0.8rem;
`;
