import Themes from "../services/Themes";

interface HeaderProps
{
    curTheme: string;
    setTheme: (theme: string) => void;
}

function Header({ curTheme, setTheme }: HeaderProps) {
    
    const changeTheme = () =>
    {
        switch(curTheme)
        {
            case Themes.Dark:
                setTheme(Themes.Light);
                break;
            case Themes.Light:
                setTheme(Themes.Dark);
                break;
        }
    }

    return <header>
                <h1>My Todo List</h1>
                <button className="theme-toggle" id="theme-toggle" onClick={changeTheme}>🌙</button>
            </header>;
}

export default Header