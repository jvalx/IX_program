import React, {useEffect, useState} from "react";


export default function Clock() {
    const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     console.log('Component did mount or update'); 
    // });
   
    useEffect(() =>
    {
        console.log('Component did mount');

        const intervalID = setInterval(() => {
            setDate(new Date());
            console.log('Date set from interval');
        }, 1000);

        return () => {
            console.log('Component will unmount');
            clearInterval(intervalID);
        }
    }, []);
    return (
        <div className = 'mt-4 text-center'>
        { date.toLocaleTimeString()
        }
        </div>
    );
}
