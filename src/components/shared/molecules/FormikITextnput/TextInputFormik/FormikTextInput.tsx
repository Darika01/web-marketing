import { connect, FormikValues } from 'formik';
import { useTranslation } from 'react-i18next';

import FormHelperText from '../../FormHelperText/FormHelperText';
import { InputContainer, StyledInput, StyledLabel } from './styles';

type FormikInputProps = {
    name: string;
    label: string;
    type?: string;
} & FormikValues;

const FormikTextInput: React.FC<FormikInputProps> = ({ formik, name, label, type = 'text' }) => {
    const { errors, touched, isSubmitting, isValid } = formik;
    const { t } = useTranslation();

    const error = Boolean(errors[name] && touched[name]);

    const onSubmit = () => {
        if (!isSubmitting && isValid) {
            formik.submitForm();
        }
    };

    return (
        <InputContainer>
            {label && <StyledLabel>{label}</StyledLabel>}
            {/* @ts-ignore */}
            <StyledInput
                name={name}
                id={name}
                as="input"
                label={t(label)}
                type={type}
                // error={error}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        onSubmit();
                    }
                }}
            />
            {error && <FormHelperText error>{t(errors[name])}</FormHelperText>}
        </InputContainer>
    );
};

export default connect(FormikTextInput);
