import { Caption } from 'components/atoms/Typography/Typography';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/macro';

interface Props {
    error?: boolean;
    children: string;
}

type styleTYPE = {
    theme: DefaultTheme;
    error?: boolean;
};

const HelperText = styled(Caption)`
    color: ${({ theme, error }: styleTYPE) => (error ? theme.palette.error.main : theme.palette.text.tertiary)};
    margin-top: 0.8rem;
`;

const FormHelperText: React.FC<Props> = ({ error, children }) => {
    return <HelperText error={error}>{children}</HelperText>;
};

export default FormHelperText;
