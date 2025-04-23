import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";


const fetchPopularMovies = (language) => {
    return api.get(`/movie/popular`, {
      params: {
        language: language,
      },
    });
  };
  

export const usePopularMoviesQuery=()=>{
    const language = useLanguageStore((state) => state.language);

    return useQuery({
        queryKey: ['movie-popular', language],
        queryFn: ()=>fetchPopularMovies(language),
        select: (result)=> result.data

    })
}