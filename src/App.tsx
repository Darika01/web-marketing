import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/core/Navbar/Navbar';
import GlobalStyle from './locales/utils/themeConfig/globalStyle';
import Dashboard from './components/pages/Dashboard/Dashboard';
import NotFound from './components/pages/NotFound/NotFound';
import { ThemeStateProvider, useThemeContext } from './context/themeStore';
import { DefaultTheme } from 'styled-components';
import commonTheme from './locales/utils/themeConfig/themes/commonTheme';

const App: React.FC = () => {
    const { pathname } = useLocation();
    const { contextThemeState } = useThemeContext();

    const theme: DefaultTheme = { ...commonTheme, palette: { ...commonTheme.palette, ...contextThemeState.theme } };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/" component={Dashboard} />
                <Route exact path="*" component={NotFound} />
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
