import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const Card = ({ title, img, price, index }) => {
    return (
        <article className="card">
            <h3>{title}</h3>
            <div>
                <Link to={`/products/${index}`}>
                    <img src={img} alt="" />
                </Link>
            </div>
            <span className="price">{price} руб</span>
        </article>
    )
}
