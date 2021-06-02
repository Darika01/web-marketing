import { TitleH2, TypographySpan } from 'components/atoms/Typography/Typography';
import { useTranslation } from 'react-i18next';

interface Props {
    primary: string;
    secondary?: string;
}

const DoubleTitle: React.FC<Props> = ({ primary, secondary }) => {
    const { t } = useTranslation();
    return (
        <div>
            <TitleH2>
                <>
                    {t(primary)}
                    <br />
                    {secondary && <TypographySpan>{t(secondary)}</TypographySpan>}
                </>
            </TitleH2>
        </div>
    );
};
export default DoubleTitle;
