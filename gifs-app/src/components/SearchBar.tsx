import {useState } from "react"

interface Props{
    placeholder? : string,
    buttonTitle : string
    onQuery: (query:string) => void
}

export const SearchBar = ({placeholder = "Buscar", buttonTitle, onQuery}: Props) => {

const [query, setquery] = useState('')

const handlerSearch= () => {
  onQuery(query)
  setquery('')
}
const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement> ) => {
  if (event.key === 'Enter'){
              handlerSearch()
            }
}

  return (
    <div className="search-container">
        <input  
          type="text" 
          placeholder={placeholder} 
          value={query}
          onChange={(event) => setquery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handlerSearch}>{buttonTitle}</button>
    </div>
  )
}
