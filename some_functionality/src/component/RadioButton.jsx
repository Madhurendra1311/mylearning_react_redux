import React from 'react';
import { useState } from 'react';


const RadioButton = () => {
    const [formData, setFormData] = useState({
        isAgree: false, //checkbox
        gender: "" //radio
    })

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // alert(`${name} ${value}`)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <form>
            <div>
                <label>Male: </label>
                <input type="radio" name = "gender" value="male" onChange={handleChange} checked = {formData?.gender == 'male'} />
                <label>Female: </label>
                <input type="radio" name = "gender" value="female" onChange={handleChange} checked = {formData?.gender == 'female'} />
            </div>
            <div>
                <input type="checkbox" name="isAgree" checked={formData?.isAgree} onChange={handleChange} />
                <label>Are you agree?</label>
            </div>
            <p>Gender: {formData.gender}</p>
        </form>
    )
}

export default RadioButton
