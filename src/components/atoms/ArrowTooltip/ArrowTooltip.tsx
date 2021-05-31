import { StyledTooltip, TooltipText } from './styles';

interface ArrowTooltipProps {
    children: React.ReactElement;
    title: string;
    disabled?: boolean;
}

const ArrowTooltip: React.FC<ArrowTooltipProps> = ({ children, title, disabled }) =>
    !disabled ? (
        <StyledTooltip>
            {children}
            <TooltipText>{title}</TooltipText>
        </StyledTooltip>
    ) : (
        <span>{children}</span>
    );

export default ArrowTooltip;
