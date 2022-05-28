import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { Layer } from './Shared/Layer'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <Layer>
                            <Home />
                        </Layer>
                    }
                />
                <Route
                    path="products/:id"
                    element={
                        <Layer>
                            <Product />
                        </Layer>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
