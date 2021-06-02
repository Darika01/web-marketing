import ArrowTooltip from '../../ArrowTooltip/ArrowTooltip';
import { BtnIcon, BtnLoader, ColorTYPE, StyledButton } from './styles';

interface RectangularButtonProps {
    color?: ColorTYPE;
    text: string;
    type?: 'button' | 'reset' | 'submit';
    disabled?: boolean;
    startIcon?: any;
    endIcon?: any;
    handleClick?: () => void;
    loading?: boolean;
    fullWidth?: boolean;
    htmlFor?: string;
}

const RectangularButton: React.FC<RectangularButtonProps> = ({
    handleClick,
    text,
    loading,
    color = 'primary',
    disabled = false,
    fullWidth = false,
    type = 'button',
    startIcon,
    endIcon,
    ...rest
}) => {
    return (
        <ArrowTooltip title={text} disabled={loading || disabled}>
            <StyledButton
                onClick={handleClick}
                fullWidth={fullWidth}
                color={color}
                type={type}
                disabled={loading || disabled}
                {...rest}
            >
                <>
                    {startIcon && <BtnIcon isStartIcon>{startIcon}</BtnIcon>}
                    {text.toUpperCase()}
                    {endIcon && <BtnIcon>{endIcon}</BtnIcon>}
                    {loading && <BtnLoader color={color} />}
                </>
            </StyledButton>
        </ArrowTooltip>
    );
};

export default RectangularButton;
