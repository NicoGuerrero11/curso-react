import { ItemCounter } from "../shopping-cart/ItemCounter";

interface Item {
    productName: string,
    quantity: number
}

const initialItems: Item[] = [
    { productName: 'Nintendo Switch 2', quantity: 10 },
    { productName: 'PlayStation 5', quantity: 15 },
    { productName: 'Xbox One', quantity: 20 },
]

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        initialItems.map(({productName, quantity}) => (
          <ItemCounter name={productName} quantity={quantity}/>
        ))
      }

      {/* <ItemCounter name="Nintendo Switch 2" quantity={5}/>
      <ItemCounter name="PlayStation 5" quantity={10}/>
      <ItemCounter name="Xbox One" quantity={20}/> */}
      
    </>
  )
}


