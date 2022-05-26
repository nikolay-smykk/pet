import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './style.scss'

export const Header = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
            className="header"
        >
            <AiOutlineMenu className="menu" />
            <Link to="/" className="link">
                MINIMALIZM-STUDIO
            </Link>
            <nav>
                <Link to="/cart">
                    <BsHandbag className="cart" />
                </Link>
            </nav>
        </motion.div>
    )
}
