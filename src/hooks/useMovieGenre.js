import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
import useLanguageStore from "../store/useLanguageStore";

const fetchMovieGenre=(language)=>{
    return api.get(`/genre/movie/list?language=${language}`)
}

export const useMovieGenreQuery=()=>{
    const { language } = useLanguageStore();

    return useQuery({
        queryKey : ['movie-genre',language],
        queryFn: ()=>fetchMovieGenre(language),
        select:(result)=>result.data.genres,
        staleTime: 300000, //5분
    })
}