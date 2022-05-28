import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const Footer = () => {
    return (
        <footer>
            <Link to="/"></Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="/"></Link>
        </footer>
    )
}
