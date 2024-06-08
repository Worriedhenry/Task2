import React from "react";


export default function Childone({money,setMoney}) {

    return (
        <button onClick={() => setMoney(money + 1000)}>Add Money child 1</button>
    )
}