import React from 'react'
import './style.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layer = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>

            <Footer />
        </>
    )
}
