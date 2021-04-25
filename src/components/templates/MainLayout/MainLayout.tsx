import Navbar from 'components/organisms/Navbar/Navbar';

const MainLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
