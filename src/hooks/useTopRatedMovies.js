import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";

const fetchPopularMovies=(language)=>{
    return api.get(`/movie/top_rated`, {
        params: {
          language: language,
        },
      });
    };

export const useTopRatedMoviesQuery=()=>{
    const language = useLanguageStore((state) => state.language);

    return useQuery({
        queryKey: ['movie-top-rated', language],
        queryFn: ()=>fetchPopularMovies(language),
        select: (result)=> result.data

    })
}