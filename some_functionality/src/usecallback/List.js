import React, { useState, useCallback, useEffect } from 'react';


export default function List({getItem}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItem())
        console.log('Updating items');
    }, [getItem])

    return items?.map((each) => <div key={each}>{each}</div>)
}