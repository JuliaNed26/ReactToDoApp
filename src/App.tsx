import './main.css'
import Header from './components/Header'
import Themes from './services/Themes'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(Themes.Light);

  return <body>
    <div className="container">
        <Header curTheme={theme} setTheme={setTheme}/>
        <div>{theme}</div>

        <div className="input-group">
            <input type="text" id="todo-input" placeholder="Add a new task..."/>
            <button id="add-btn">Add</button>
        </div>
        
        <div className="filters">
            <button className="filter-btn active" id="all">All</button>
            <button className="filter-btn" id="active">Active</button>
            <button className="filter-btn" id="completed">Completed</button>
        </div>
        
        <div id="todo-list"></div>
    </div>
    </body>
}

export default App
