import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bag } from './pages/Bag';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import CartContext, { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartContext.Provider value={CartProvider}>
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Bag" element={<Bag />} />
                        <Route path="/Product" element={<Product />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContext.Provider>
    );
}

export default App;
