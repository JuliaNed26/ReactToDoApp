import { useEffect, useState } from "react";
import Themes from "../services/Themes";

export function useTheme() : [string, () => void]
{
    const DarkThemeClassName: string = "dark-mode";

    let [theme, setTheme] = useState(Themes.Light);
    
    useEffect(() => {
        let body = document.querySelector("body");

        switch(theme)
        {
            case Themes.Light:
                body?.classList.remove(DarkThemeClassName);
                break;
            case Themes.Dark:
                body?.classList.add(DarkThemeClassName);
                break;
        }
    }, [theme]);

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

    return [theme, toggleTheme];
}