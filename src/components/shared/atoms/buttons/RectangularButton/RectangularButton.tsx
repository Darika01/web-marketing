import ArrowTooltip from '../../ArrowTooltip/ArrowTooltip';
import Loader from '../../Loader/Loader';
import { StyledButton } from './styles';

interface RectangularButtonProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
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
                // className={classes[variant]}
                onClick={handleClick}
                // variant={variant}
                // size={size}
                fullWidth={fullWidth}
                color={color}
                type={type}
                disabled={loading || disabled}
                {...rest}
            >
                <>
                    {text}
                    {loading && <Loader />}
                    {startIcon && startIcon}
                    {endIcon && endIcon}
                </>
            </StyledButton>
        </ArrowTooltip>
    );
};

export default RectangularButton;
