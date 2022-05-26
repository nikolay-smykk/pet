import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Questions } from './questions'
import { IMG } from '../../assets/img'
import { IoMdInformation } from 'react-icons/io'
import { Modal } from '../../Components/Modal'

import './style.scss'

export const Product = () => {
    let params = useParams()

    const key = Object.keys(IMG)[params.id]
    const { img, price, title } = IMG[key]
    const [show, setShow] = useState(false)
    return (
        <section className="product">
            <div className="title_block">
                <h1>/ {title}</h1>
                <IoMdInformation
                    className="icon"
                    onClick={() => setShow(true)}
                />
            </div>

            <div className="">
                <img src={img} alt="" />
            </div>
            <h1>Цена : {price} руб</h1>
            <Questions />
            <button className="button" type="submit">
                Купить
            </button>

            <Modal
                onClose={() => setShow(!show)}
                title="Материал"
                show={show}
            />
        </section>
    )
}
