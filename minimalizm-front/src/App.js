import React from 'react'
import { Catalog } from './pages/Catalog'
import './App.css'
import { Layout } from './features/layout'
import { Header } from './features/header'
import { Counter } from './features/counter/Counter'

function App() {
    return (
        <Layout>
            <Header />
            <Catalog />
            <Counter />
        </Layout>
    )
}

export default App
