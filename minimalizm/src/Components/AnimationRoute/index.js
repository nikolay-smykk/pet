import { Route, useLocation, Routes } from 'react-router-dom'
import { Home } from '../../Pages/Home'
import { Product } from '../../Pages/Product'
import { About } from '../../Pages/About'
import { Layer } from '../../Shared/Layer'

import { AnimatePresence } from 'framer-motion'

export const AnimationRoute = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    exact
                    component={Home}
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
                <Route
                    path="about"
                    element={
                        <Layer>
                            <About />
                        </Layer>
                    }
                />
                <Route
                    path="contact"
                    element={
                        <Layer>
                            <Home />
                        </Layer>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}
