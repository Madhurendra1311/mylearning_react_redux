import React, { useState, useMemo, useEffect } from 'react';

export default function DemoUseMemo() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])

    // concept

    // const themeStyle = {
    //     backgroundColor: dark ? '#333' : '#FFF',
    //     color: dark ? '#FFF' : '#333'
    // }

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? '#333' : '#FFF',
            color: dark ? '#FFF' : '#333'
        }
    }, [dark])

    useEffect(() => {
        console.log('theme changed');
    }, [themeStyle])

    return (
        <>
            <input
                type='number'
                value={number} 
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}> change theme </button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log("calling slow function");
    for(let i = 0; i < 1000000; i++) {
        return num*2
    }
}