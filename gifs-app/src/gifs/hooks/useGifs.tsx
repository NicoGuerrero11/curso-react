import { useState } from "react"
import type { Gif } from '../../interfaces/gif.interface';
import { getGifsByQuery } from '../get-gifs-by-query.action';

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerm, setPreviousTerm] = useState<string[]>([])
    
    const handlerClicked = async (term:string) => {
        if (gifsCache[term]){
            setGifs(gifsCache[term])
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
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

        gifsCache[query] = gifs;
        
    };
    return {
        gifs,
        previousTerm,
        handlerClicked,
        handlerSearch,
    }
}
