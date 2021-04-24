import RectangularButton from 'components/shared/atoms/buttons/RectangularButton/RectangularButton';
import FormikTextInput from 'components/shared/molecules/FormikITextnput/TextInputFormik/FormikTextInput';
import { Form, Formik } from 'formik';
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
};

const initValues = {
    username: '',
    password: ''
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

const postData = async (values: formValuesTYPE) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('You have successfully logged in with values: ', values);
};

const Login: React.FC = () => {
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
                                        <FormikTextInput name="password" label="Password" />
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
