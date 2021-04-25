import React, {
	createContext,
	useContext,
	useReducer
} from 'react';

import darkTheme from 'utils/themeConfig/themes/darkTheme';
import lightTheme from 'utils/themeConfig/themes/lightTheme';

import { APPLY_THEME } from './actions';

const isDarkTheme = localStorage.getItem('isDarkTheme');
!isDarkTheme && localStorage.setItem('isDarkTheme', 'false');

type IStateTYPE = {
    theme: any;
    isDarkTheme: string | null;
};
type ActionTYPE = {
    type: string;
    isDarkTheme: string;
};

const initialState: any = {
    theme: isDarkTheme ? darkTheme : lightTheme,
    isDarkTheme
};

const themeStore = createContext(initialState);
const useThemeContext = (): any => useContext(themeStore);

const { Provider } = themeStore;

const ThemeStateProvider: React.FC = ({ children }) => {
    const [contextThemeState, dispatchThemeContext] = useReducer(
        (contextThemeState: IStateTYPE, action: ActionTYPE) => {
            switch (action.type) {
                case APPLY_THEME:
                    localStorage.setItem('isDarkTheme', action.isDarkTheme);
                    return {
                        ...contextThemeState,
                        theme: action.isDarkTheme ? darkTheme : lightTheme,
                        isDarkTheme: action.isDarkTheme
                    };
                default:
                    return contextThemeState;
            }
        },
        initialState
    );

    return <Provider value={{ contextThemeState, dispatchThemeContext }}>{children}</Provider>;
};

export { ThemeStateProvider, themeStore, useThemeContext };