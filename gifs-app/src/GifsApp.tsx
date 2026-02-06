import { useState } from 'react';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './components/CustomHeader';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './components/GifsList';
export const GifsApp = () => {
    const [previousTerm, setPreviousTerm] = useState(["Goku"])

    const handlerClicked = (term:string) => {
        console.log(term)
    }
    const handlerSearch = (query:string) => {
        console.log(query);
    }

    return (
        <>
            {/* header */}
            <CustomHeader 
                title='Buscador de Gifs'
                description='Busca el gif que quieras'
            />
            {/* buscador */}
            <SearchBar placeholder='Buscar gifs' buttonTitle='Buscar' onQuery={handlerSearch} />

            {/* busquedad previas */}
            <PreviousSearches title='Busquedas Previas' list={previousTerm} onLabelClick={handlerClicked}/>

            {/* gifs */}
            <GifsList gifs={mockGifs}/>
        </>
    )
}
