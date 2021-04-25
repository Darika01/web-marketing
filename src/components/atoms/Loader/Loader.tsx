import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 0.4rem solid ${({ theme }) => theme.palette.secondary.main};
    border-right: 0.4rem solid ${({ theme }) => theme.palette.secondary.main};
    border-bottom: 0.4rem solid ${({ theme }) => theme.palette.secondary.main};
    border-left: 0.4rem solid white;
    background: transparent;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
`;

export default Loader;
