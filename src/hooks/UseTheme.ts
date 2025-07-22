import { useState } from "react";
import Themes from "../services/Themes";

export function useTheme() : [string, () => void]
{
    const DarkThemeClassName: string = "dark-mode";

    let [theme, setTheme] = useState(Themes.Light);

    let body = document.querySelector("body");

    const toggleTheme = () => {
        switch(theme)
        {
            case Themes.Light:
                setTheme(Themes.Dark);
                body?.classList.remove(DarkThemeClassName);
                break;
            case Themes.Dark:
                setTheme(Themes.Light);
                body?.classList.add(DarkThemeClassName);
                break;
        }
    };

    return [theme, toggleTheme];
}