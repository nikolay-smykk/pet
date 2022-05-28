import { IoMdInformation } from 'react-icons/io'
import { useState } from 'react'

const question = [
    { placeholder: 'Грудь', value: 80 },
    { placeholder: 'Талия', value: 60 },
    { placeholder: 'Бедра', value: 90 },
    { placeholder: 'Дл. Юбки', value: 80 },
    { placeholder: 'Дл. Переда', value: 42 },
    { placeholder: 'Дл. Спинка', value: 36 },
    { placeholder: 'Дл. Рукава', value: 60 },
    { placeholder: 'Высота бедра', value: 27 },
    { placeholder: 'Декольте', value: 10 },
    { placeholder: 'Глубина спинки', value: 10 },
]

const Label = () => (
    <>
        <div className="radio">
            <label>
                <input type="radio" value={'x'} />
                XS
            </label>
        </div>
        <div className="radio">
            <label className="active">
                <input type="radio" value={'x'} />S
            </label>
        </div>
        <div className="radio">
            <label>
                <input type="radio" value={'x'} />M
            </label>
        </div>
        <div className="radio">
            <label>
                <input type="radio" value={'x'} />L
            </label>
        </div>
        <div className="radio">
            <label>
                <input type="radio" value={'x'} />
                XL
            </label>
        </div>
        <div className="radio">
            <label>
                <input type="radio" value={'x'} />
                XXL
            </label>
        </div>
    </>
)

export const Questions = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="questions">
            <div className="wrap-radio"></div>
            {question.map((item, index) => (
                <div className="question" key={item.placeholder}>
                    <span>{item.placeholder}</span>
                    <input
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        defaultValue={item.value || ''}
                        placeholder={item.placeholder || ''}
                    />
                    <IoMdInformation className="icon" />
                </div>
            ))}
        </div>
    )
}
