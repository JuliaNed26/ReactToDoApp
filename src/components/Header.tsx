import { useTheme } from "../hooks/UseTheme";

function Header() {
    var [_, toggleTheme] = useTheme();

    return <header>
                <h1>My Todo List</h1>
                <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>🌙</button>
            </header>;
}

export default Header