import React from "react";


export default function Childtwo({money,setMoney}) {

    return (
        <button onClick={() => setMoney(money + 500)}>Add Money child 2</button>
    )
}