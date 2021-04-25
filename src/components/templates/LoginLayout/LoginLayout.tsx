import styled from 'styled-components';

const StyledLoginLayout = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    & > div:first-child {
        width: 100%;
    }
`;

const LoginLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    return <StyledLoginLayout>{children}</StyledLoginLayout>;
};

export default LoginLayout;
