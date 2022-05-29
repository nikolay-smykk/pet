export const Label = ({ value, active }) => {
    return (
        <div onClick={() => console.log(value, active)} className="radio">
            <label className="active">
                <input type="radio" value={value} />
                {value}
            </label>
        </div>
    )
}
