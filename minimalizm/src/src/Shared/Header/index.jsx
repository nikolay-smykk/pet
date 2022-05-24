import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import './style.scss'

export const Header = () => {
    return (
        <header>
            <AiOutlineMenu className="menu" />
            <span>MINIMALIZM-STUDIO</span>
            <nav>
                <Link to="/cart">
                    <BsHandbag className="cart" />
                </Link>
            </nav>
        </header>
    )
}
