import axios from "axios"
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyGif } from "../interfaces/giphy.response";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: import.meta.env.VITE_API_KEY
        }
    })

    const gifs: Gif[] = response.data.data.map((gif: GiphyGif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));

    return gifs;
};