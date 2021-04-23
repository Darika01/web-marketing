import { useEffect, useState } from 'react';

import Navbar from 'components/core/Navbar/Navbar';
import Dashboard from 'components/pages/Dashboard/Dashboard';
import NotFound from 'components/pages/NotFound/NotFound';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useLocation
} from 'react-router-dom';
import styled, {
	DefaultTheme,
	ThemeProvider
} from 'styled-components';

import Login from './components/pages/Login/Login';
import Loader from './components/shared/atoms/Loader/Loader';
import { ThemeStateProvider, useThemeContext } from './context/themeStore';
import GlobalStyle from './locales/utils/themeConfig/globalStyle';
import commonTheme from './locales/utils/themeConfig/themes/commonTheme';

const Layout = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    & > div:first-child {
        width: 100%;
    }
`;

const App: React.FC = () => {
    const { pathname } = useLocation();
    const { contextThemeState } = useThemeContext();

    const [IsLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    const theme: DefaultTheme = { ...commonTheme, palette: { ...commonTheme.palette, ...contextThemeState.theme } };

    useEffect(() => {
        setIsLoggedIn(Boolean(sessionStorage.getItem('token')));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {IsLoggedIn === null && <Loader />}
            <Layout>
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/login" component={Login} />
                    {!IsLoggedIn && <Redirect to="/login" />}
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="*" component={NotFound} />
                    </div>
                </Switch>
            </Layout>
        </ThemeProvider>
    );
};

const AppContainer: React.FC = () => {
    return (
        <ThemeStateProvider>
            <Router>
                <App />
            </Router>
        </ThemeStateProvider>
    );
};

export default AppContainer;
