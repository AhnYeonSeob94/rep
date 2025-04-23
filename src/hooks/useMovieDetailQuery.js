import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieDetail=(id)=>{
    console.log("ID뭔데?",id);
    return api.get(`/movie/${id}`);
}

export const useMovieDetailQuery =(id)=>{
    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: ()=>fetchMovieDetail(id),
        enabled: !!id, // id 있을 때만 실행
        select: (result)=> result.data,
        staleTime: 1000 * 60 * 10,
    })
}