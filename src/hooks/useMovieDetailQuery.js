import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";

const fetchMovieDetail = (id, language) => {
  return api.get(`/movie/${id}?language=${language}`);
};

export const useMovieDetailQuery = (id) => {
  const { language } = useLanguageStore();

  return useQuery({
    queryKey: ['movie-detail', id, language],
    queryFn: () => fetchMovieDetail(id, language),
    enabled: !!id,
    select: (result) => result.data,
    staleTime: 1000 * 60 * 10,
  });
};
