import { useGifs } from './gifs/hooks/useGifs';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './components/CustomHeader';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './components/GifsList';




export const GifsApp = () => {
    const {gifs, previousTerm, handlerClicked, handlerSearch} = useGifs();
    
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
