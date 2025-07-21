import './main.css'
import Header from './components/Header'
import { ThemeProvider } from './hooks/ThemeProvider';

function App() {
    return <ThemeProvider>
        <body>
            <div className="container">
                <Header />
            </div>
        </body>
    </ThemeProvider>
}

export default App
