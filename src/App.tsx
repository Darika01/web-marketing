import { useEffect, useState } from 'react';

import Loader from 'components/atoms/Loader/Loader';
import Dashboard from 'components/pages/Dashboard/Dashboard';
import Login from 'components/pages/Login/Login';
import NotFound from 'components/pages/NotFound/NotFound';
import LoginLayout from 'components/templates/LoginLayout/LoginLayout';
import MainLayout from 'components/templates/MainLayout/MainLayout';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useLocation
} from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeStateProvider, useThemeContext } from './context/themeStore';
import GlobalStyle from './utils/themeConfig/globalStyle';
import commonTheme from './utils/themeConfig/themes/commonTheme';

const App: React.FC = () => {
    const { pathname } = useLocation();
    const { contextThemeState } = useThemeContext();

    const [IsLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    const theme: DefaultTheme = { ...commonTheme, palette: { ...commonTheme.palette, ...contextThemeState.theme } };

    const isToken = Boolean(sessionStorage.getItem('token'));

    useEffect(() => {
        setIsLoggedIn(isToken);
    }, [isToken]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {IsLoggedIn === null && <Loader />}
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/login">
                    {IsLoggedIn ? (
                        <Redirect to="/" />
                    ) : (
                        <LoginLayout>
                            <Login />
                        </LoginLayout>
                    )}
                </Route>
                {!IsLoggedIn && <Redirect to="/login" />}
                <Route exact path="/">
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                </Route>
                <Route exact path="*">
                    <MainLayout>
                        <NotFound />
                    </MainLayout>
                </Route>
            </Switch>
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
