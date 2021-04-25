import styled from 'styled-components/macro';

interface ArrowTooltipProps {
    children: React.ReactElement;
    title: string;
    disabled?: boolean;
}

const TooltipText = styled.span`
    visibility: hidden;
    width: 12rem;
    background-color: ${({ theme }) => theme.palette.grey[100]};
    opacity: 0;
    border: ${({ theme }) => theme.border.solid};
    color: ${({ theme }) => theme.palette.text.tertiary};
    text-align: center;
    border-radius: ${({ theme }) => theme.border.radius};
    padding: 0.4rem 0.8rem;
    &::before {
        width: 0;
        height: 0;
        content: '';
        position: absolute;
        bottom: -1.7rem;
        left: 50%;
        transform: translateX(-50%);
        border-top: 0.8rem solid ${({ theme }) => theme.border.color};
        border-right: 0.8rem solid transparent;
        border-left: 0.8rem solid transparent;
        border-bottom: 0.8rem solid transparent;
        z-index: 100;
    }
    &::after {
        width: 0;
        height: 0;
        content: '';
        position: absolute;
        bottom: -1.6rem;
        left: 50%;
        transform: translateX(-50%);
        border-top: 0.8rem solid ${({ theme }) => theme.palette.grey[100]};
        border-right: 0.8rem solid transparent;
        border-left: 0.8rem solid transparent;
        border-bottom: 0.8rem solid transparent;
        z-index: 200;
    }
    position: absolute;
    z-index: 1;
    bottom: 120%;
    left: 0;
    transition: visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
`;

const StyledTooltip = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;
    &:hover {
        ${TooltipText} {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const ArrowTooltip: React.FC<ArrowTooltipProps> = ({ children, title, disabled }) =>
    !disabled ? (
        <StyledTooltip>
            {children}
            <TooltipText>{title}</TooltipText>
        </StyledTooltip>
    ) : (
        // <TooltipText disabled={disabled}>{ title }</TooltipText>
        <span>{children}</span>
    );

export default ArrowTooltip;
