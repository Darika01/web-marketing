import RectangularButton from 'components/shared/atoms/buttons/RectangularButton/RectangularButton';
import FormikTextInput from 'components/shared/molecules/FormikITextnput/TextInputFormik/FormikTextInput';
import { Form, Formik } from 'formik';

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
                        initialValues={{ login: '' }}
                        // initialErrors={setInitErrors()}
                        // validationSchema={ErrorsSchema}
                        onSubmit={() => console.log(`submit`)}
                        // onReset={() => setIsViewMode(true)}
                    >
                        {formProps => (
                            <>
                                <Form className="cardForm">
                                    <div>
                                        <FormikTextInput name="username" label="Username" />
                                        <FormikTextInput name="Password" label="Password" />
                                    </div>
                                    <RectangularButton
                                        text="Sign in"
                                        fullWidth
                                        endIcon={<ArrowRight />}
                                        type="submit"
                                        disabled={formProps.isSubmitting || !formProps.isValid}
                                        // loading={Loading}
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
