import React,{useState} from "react"
import Childone from "./child"
import Childtwo from "./child2"

export default function Parent() {

    const [money, setMoney] = useState(0)

    return (<>
        <h1>Parent Money = {money}</h1>
        <Childone money={money} setMoney={setMoney} />
        <Childtwo money={money} setMoney={setMoney} />
        </>
    )
}