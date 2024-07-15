import React, {useEffect, useState} from "react";
import { useThrottle } from "./useThrottle";

export default function Throttling() {
    const [val, setVal] = useState('')
    const throttleVal = useThrottle(val);

    useEffect(() => {
        console.log("throttle val!!", throttleVal)
    }, [throttleVal])

    function handleChange(e) {
        setVal(e.target.val)
    }

    return(
        <div>
            <input placeholder="type value..." onChange={handleChange} />
        </div>
    )
}