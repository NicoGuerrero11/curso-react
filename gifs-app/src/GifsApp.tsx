import { useState } from 'react';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './components/CustomHeader';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './components/GifsList';
import { getGifsByQuery } from './gifs/get-gifs-by-query.action';
import type { Gif } from './interfaces/gif.interface';



export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerm, setPreviousTerm] = useState<string[]>([])

    const handlerClicked = (term:string) => {
        console.log(term)
    }
    const handlerSearch = async (query:string) => {
        const term = query.trim().toLocaleLowerCase()
        if (!term)return;
        if(previousTerm.includes(term))return;
        setPreviousTerm((prev) => {
            const updated = [term, ...prev];
            return updated.slice(0, 8);
        });
        const gifs = await getGifsByQuery(query)
        setGifs(gifs)
    };

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
            {gifs.length > 0 ? (
                <GifsList gifs={gifs} />
            ) : (
                <GifsList gifs={mockGifs} />
            )}
        </>
    )
}
