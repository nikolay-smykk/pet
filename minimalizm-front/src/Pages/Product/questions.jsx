import { IoMdInformation } from 'react-icons/io'
import { useState } from 'react'
import { Label } from './label'

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

const radioLabel = ['x', 's', 'm', 'l', 'xl', 'xxl']

export const Questions = () => {
    return (
        <div className="questions">
            <div className="wrap-radio">
                {radioLabel.map((value) => (
                    <Label value={value} />
                ))}
            </div>
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
