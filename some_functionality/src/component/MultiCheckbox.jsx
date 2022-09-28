import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';

const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" }
];

function MultiCheckbox() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(userData)
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if(name === 'allSelect') {
            let tempUsers = users.map((each) => {
                return { ...each, isChecked: checked}
            })
            setUsers(tempUsers)
        } else {
            let tempUser = users.map((each) => each.name === name ? {...each, isChecked: checked } : each);
            setUsers(tempUser)
        }
    }
    
    return (
        <div className="container my-4" style={{ width: "500px" }}>
            <form className="form w-100">
                <h3>Select Users</h3>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name = "allSelect" checked = {users.filter((f) => f?.isChecked !== true).length < 1} onChange={handleChange} />
                    <label className="form-check-label ms-2">All Select</label>
                </div>
                {
                    users.map((each) => (
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name={each.name} checked = {each?.isChecked || false} onChange = {handleChange} />
                            <label className="form-check-label ms-2">{each.name}</label>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}

export default MultiCheckbox
