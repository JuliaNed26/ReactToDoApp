import './main.css'

function App() {
  return <body>
    <div className="container">
        <header>
            <h1>My Todo List</h1>
            <button className="theme-toggle" id="theme-toggle">🌙</button>
        </header>

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
