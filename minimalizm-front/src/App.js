import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import { Layout } from './features/counter/layout'
import { Header } from './features/header'

function App() {
    return (
        <Layout>
            <Header />
            <Counter />
        </Layout>
    )
}

export default App
