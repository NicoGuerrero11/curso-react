import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {

    const [counter, setCount] = useState(quantity)

    const handlerAdd = () => {
        if (counter === 20) return
        setCount(counter + 1)
    }
    const handlerSubtract = () => {
        if (counter === 1) return
        setCount(counter - 1)
    }

  return (
    <section 
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}
    >   <span style={{width: 150,}}>
            {name}
        </span>
        <button onClick={handlerAdd}>+1</button>
        <span>{counter}</span>
        <button onClick={handlerSubtract}>-1</button>
    </section>
  )
}
