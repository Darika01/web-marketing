import RectangularButton from 'components/atoms/buttons/RectangularButton/RectangularButton';
import FormikCheckbox from 'components/molecules/FormikCheckbox/FormikCheckbox';
import FormikTextInput from 'components/molecules/TextInputFormik/FormikTextInput';
import { Form, Formik } from 'formik';
import randtoken from 'rand-token';
import { useHistory } from 'react-router';
import * as Yup from 'yup';

import { ArrowRight } from '@styled-icons/bootstrap';

import {
	BlurredContainer,
	Container,
	DataContainer,
	DataLabel,
	DataValue,
	FormTitle,
	LeftSide,
	RightSide
} from './styles';

type formValuesTYPE = {
    username: string;
    password: string;
    showPassword: boolean;
};

const initValues = {
    username: '',
    password: '',
    showPassword: false
};

const validSchema = Yup.object().shape({
    username: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required')
});

const setInitErrors = () => {
    return {
        username: 'This field is required',
        password: 'This field is required'
    };
};

const Login: React.FC = () => {
    const history = useHistory();

    const postData = async (values: formValuesTYPE) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // if (values.username === 'test' && values.password == 'test') {
        const token = randtoken.generate(16);
        sessionStorage.setItem('token', token);
        history.push('/');
        // } else console.log('Wrong input data');
    };

    return (
        <Container>
            <LeftSide>
                <BlurredContainer>
                    <DataContainer>
                        <DataLabel>Username: </DataLabel>
                        <DataValue>test</DataValue>
                    </DataContainer>
                    <DataContainer>
                        <DataLabel>Password: </DataLabel>
                        <DataValue>test</DataValue>
                    </DataContainer>
                </BlurredContainer>
            </LeftSide>
            <RightSide>
                <div>
                    <FormTitle>Sign in</FormTitle>
                    <Formik
                        initialValues={initValues}
                        initialErrors={setInitErrors()}
                        validationSchema={validSchema}
                        onSubmit={postData}
                    >
                        {formProps => (
                            <>
                                <Form className="cardForm">
                                    <div>
                                        <FormikTextInput name="username" label="Username" />
                                        <FormikTextInput
                                            name="password"
                                            label="Password"
                                            type={formProps.values.showPassword ? 'text' : 'password'}
                                        />
                                        <FormikCheckbox name="showPassword" label="Show password" />
                                    </div>
                                    <RectangularButton
                                        text="Sign in"
                                        fullWidth
                                        endIcon={<ArrowRight />}
                                        type="submit"
                                        disabled={formProps.isSubmitting || !formProps.isValid}
                                        loading={formProps.isSubmitting}
                                    />
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </RightSide>
        </Container>
    );
};
export default Login;
