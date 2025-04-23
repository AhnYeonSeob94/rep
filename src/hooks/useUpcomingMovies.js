import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";

const fetchUpcomingMovies = (language) => {
    return api.get(`/movie/upcoming`, {
        params: {
          language: language,
        },
      });
    };

export const useUpcomingMoviesQuery = () => {
    const language = useLanguageStore((state) => state.language);
    
    return useQuery({
        queryKey: ['movie-upcoming',language],
        queryFn: ()=>fetchUpcomingMovies(language),
        select: (result) => result.data
    });
};