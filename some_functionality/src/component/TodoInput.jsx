import React, {useState} from 'react'

function TodoInput({ createTodoItem }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === '') {
            return console.log('please add something to do')
        }
        createTodoItem(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Create todo'
                value={value}
                onChange = {(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
        </form>
    )
}

export default TodoInput
