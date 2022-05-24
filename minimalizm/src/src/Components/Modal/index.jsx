import { IoIosClose } from 'react-icons/io'
import './style.scss'

const composition = [
    { title: 'Шерсть', value: '20 %' },
    { title: 'Котон', value: '80 %' },
    { title: 'Элостан', value: '15 %' },
]

export const Modal = ({ title, show, onClose }) => {
    if (!show) return null
    return (
        <div onClick={onClose} className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h1>{title}</h1>
                    <button
                        className="modal_close"
                        type="submit"
                        onClick={onClose}
                    >
                        <IoIosClose className="icon-close" />
                    </button>
                </div>
                <div className="modal_body">
                    <div className="compositions">
                        {composition.map((item, index) => (
                            <div className="composition" key={item.title}>
                                <span>{item.title}</span>
                                <span>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
