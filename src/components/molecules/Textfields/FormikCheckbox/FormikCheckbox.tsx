import { InputContainer } from 'components/atoms/StyledComponents';
import { connect, FormikValues, getIn } from 'formik';
import { useTranslation } from 'react-i18next';

import { Checkbox as CheckboxIcon, CheckboxChecked as CheckboxCheckedIcon } from '@styled-icons/boxicons-regular';

import {
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
	StyledCheckbox,
	StyledLabel
} from './styles';

type FormikInputProps = {
    name: string;
    label: string;
    disabled?: boolean;
} & FormikValues;

const FormikCheckbox: React.FC<FormikInputProps> = ({ formik, name, label, disabled }) => {
    const { values, setFieldValue } = formik;
    const value = getIn(values, name);

    const { t } = useTranslation();

    return (
        <InputContainer>
            <StyledLabel>
                <Checkbox
                    type="checkbox"
                    name={name}
                    checked={value}
                    disabled={disabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.checked)}
                />
                <span>{t(label)}</span>
            </StyledLabel>
        </InputContainer>
    );
};

const Checkbox: React.FC<any> = ({ checked, disabled, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon as={checked ? CheckboxCheckedIcon : CheckboxIcon} checked={checked} disabled={disabled} />
        </StyledCheckbox>
    </CheckboxContainer>
);

export default connect(FormikCheckbox);
