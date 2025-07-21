import { createContext, useState } from "react";
import Themes from "../services/Themes";

interface IThemeContext
{
    theme: string;
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: Themes.Light,
    toggleTheme: () => {}
});

export function ThemeProvider({ children } : { children : React.ReactNode })
{
    let [theme, setTheme] = useState(Themes.Light);

    const toggleTheme = () => {
        switch(theme)
        {
            case Themes.Light:
                setTheme(Themes.Dark);
                break;
            case Themes.Dark:
                setTheme(Themes.Light);
                break;
        }
    };

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}