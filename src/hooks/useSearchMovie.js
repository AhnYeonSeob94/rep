import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";

const fetchSearchMovie = ({ keyword, page, language }) => {
    if (keyword) {
      return api.get(`/search/movie?query=${keyword}&page=${page}&language=${language}`);
    } else {
      return api.get(`/movie/popular?page=${page}&language=${language}`);
    }
  };

export const useSearchMovieQuery=({keyword, page})=>{
    const { language } = useLanguageStore();

    return useQuery({
        queryKey:['movie-search',{keyword,page, language}],
        queryFn:()=>fetchSearchMovie({keyword, page, language}),
        select: (result)=>result.data,
    })
}