import aboutImg from 'assets/images/about-img.png'; // Tell webpack this JS file uses this image
import DetailBox from 'components/molecules/DetailsBox/DetailsBox';
import DoubleTitle from 'components/molecules/DoubleTitle/DoubleTitle';
import SectionContainer from 'components/molecules/SectionContainer/SectionContainer';

const About: React.FC = () => {
    return (
        <SectionContainer bgrColor="primary">
            <div>
                <img src={aboutImg} alt="About" />;
            </div>
            <DetailBox>
                <DoubleTitle primary="About" secondary="Grow Your Business with Our Company" />
            </DetailBox>
        </SectionContainer>
    );
};
export default About;
