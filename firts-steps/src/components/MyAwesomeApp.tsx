const name: string = 'Nicolas';
const lastName: string = 'Guerrero';
const city: string[] = ['Buenos Aires', 'Cordoba', 'Mendoza'];
export default function MyAwesomeApp() {

  return (
    <div>
        <h1>{name}</h1>
        <h3>{lastName}</h3>
        <p>{city.join(", ")}</p>
    </div>
  )
}



