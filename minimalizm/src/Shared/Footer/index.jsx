import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <motion.div
            className="footer"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
        >
            <Link to="/"></Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="/"></Link>
        </motion.div>
    )
}
