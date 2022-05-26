import './App.scss'
import { BrowserRouter } from 'react-router-dom'

import { AnimationRoute } from './Components/AnimationRoute'

function App() {
    return (
        <BrowserRouter>
            <AnimationRoute />
        </BrowserRouter>
    )
}

export default App
