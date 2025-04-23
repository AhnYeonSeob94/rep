import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import useLanguageStore from "../store/useLanguageStore";

const fetchRecommendedMovies = (movieId, language) => {
  return api.get(`/movie/${movieId}/recommendations`, {
    params: {
      language,
    },
  });
};

export const useRecommendedMoviesQuery = (movieId) => {
  const { language } = useLanguageStore();

  return useQuery({
    queryKey: ['recommended-movies', movieId, language],
    queryFn: () => fetchRecommendedMovies(movieId, language),
    select: (result) => result.data.results,
    enabled: !!movieId,
    staleTime: 1000 * 60 * 10,
  });
};
