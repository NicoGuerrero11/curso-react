const name: string = 'Nicolas';
const lastName: string = 'Guerrero';
const city: string[] = ['Buenos Aires', 'Cordoba', 'Mendoza'];
export default function MyAwesomeApp() {

  return (
    <div>
        <h1 data-testid= "first-name-title">{name}</h1>
        <h3>{lastName}</h3>
        <p className="mi-clase-favorita">{city.join(", ")}</p>
        <p style={{backgroundColor: 'yellow' }}>
          esto es un comentario amarillo
        </p>
    </div>
  )
}



