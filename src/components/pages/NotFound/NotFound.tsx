import styled from 'styled-components';

const StyledNotFoundText = styled.h1`
    font-size: 7.8rem;
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
`;
const StyledContainer = styled.div`
    height: calc(100vh - 7.7rem - 1.6rem);
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NotFound: React.FC = () => {
    return (
        <StyledContainer>
            <StyledNotFoundText>Page Not Found</StyledNotFoundText>
        </StyledContainer>
    );
};
export default NotFound;
