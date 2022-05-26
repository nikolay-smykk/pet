import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Card = ({ title, img, price, index }) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
            className="card"
        >
            <h3>{title}</h3>
            <div>
                <Link to={`/products/${index}`}>
                    <img src={img} alt="" />
                </Link>
            </div>
            <span className="price">{price} руб</span>
        </motion.div>
    )
}
