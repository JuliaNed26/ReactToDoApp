import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeProvider";

function Header() {
    var themeProvider = useContext(ThemeContext);

    return <header>
                <h1>My Todo List</h1>
                <button className="theme-toggle" id="theme-toggle" onClick={themeProvider.toggleTheme}>🌙</button>
                <h1>{themeProvider.theme}</h1>
            </header>;
}

export default Header