import {useRef, useState, useEffect} from 'react';


export function useThrottle(value, interval = 500) {
    const [throttleVal, setThrottleVal] = useState(value)
    const lastExec = useRef(-1)

    useEffect(() => {
        if(Date.now() >= lastExec.current + interval) {
            setThrottleVal(val)
            lastExec.current = Date.now()
        } else {
            const timeId = setTimeout(() => {
                setThrottleVal(value)
                lastExec.current = Date.now()
            }, interval)
        }
    }, [value, interval])

    return throttleVal;
}