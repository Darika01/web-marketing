import { BgrColorTYPE, Container, Content } from './styles';

interface SectionContainerProps {
    bgrColor: BgrColorTYPE;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, bgrColor }) => {
    return (
        <Container bgrColor={bgrColor}>
            <Content>{children}</Content>
        </Container>
    );
};
export default SectionContainer;
