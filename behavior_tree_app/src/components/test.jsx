import { useState } from 'react';


function Test() 
{
    const [count, setCount] = useState(0);
    function OnClickButton()
    {
        setCount(count + 1);
    }

    return (
        <button
            onClick = { OnClickButton }
        >
            Click { count } Times 
        </button>
    );
}

export default Test