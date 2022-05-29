import { useState } from 'react'
import { IoMdInformation } from 'react-icons/io'
import { observer } from 'mobx-react-lite'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Cart } from '../../State/Cart'
import { size } from '../../Settings/size'

const questions = [
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
const cart = new Cart()

export const Questions = observer(() => {
    let [question, setQuestion] = useState('')
    const handleChange = (event) => {
        cart.setInputValue(event.target.value)
        setQuestion(size[event.target.value.toLowerCase()])
    }

    return (
        <div className="questions">
            <div className="wrap-radio">
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                        Размер
                        {cart.getInputValue()
                            ? ': ' + cart.getInputValue()
                            : ''}
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={cart.getInputValue()}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value={size.s.size.value}
                            control={<Radio />}
                            label={size.s.size.title}
                        />
                        <FormControlLabel
                            value={size.m.size.value}
                            control={<Radio />}
                            label={size.m.size.title}
                        />
                        <FormControlLabel
                            value={size.l.size.value}
                            control={<Radio />}
                            label={size.l.size.title}
                        />
                        <FormControlLabel
                            value={size.xl.size.value}
                            control={<Radio />}
                            label={size.xl.size.title}
                        />
                        <FormControlLabel
                            value={size.xxl.size.value}
                            control={<Radio />}
                            label={size.xxl.size.title}
                        />
                        <FormControlLabel
                            value={size.other.size.value}
                            control={<Radio />}
                            label={size.other.size.title}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {Object.values(question).map((item, index) => {
                console.log('item', item)
                return (
                    <div className="question" key={item.title}>
                        <span>{item.title}</span>
                        <input
                            type="number"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            defaultValue={item.title}
                        />
                        <IoMdInformation className="icon" />
                    </div>
                )
            })}
        </div>
    )
})
