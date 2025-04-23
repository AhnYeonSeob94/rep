import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendedMovies = (movieId) => {
  return api.get(`/movie/${movieId}/recommendations`, {
    params: {
      language: "en-US"
    }
  });
};

export const useRecommendedMoviesQuery = (movieId) => {
  return useQuery({
    queryKey: ['recommended-movies', movieId],
    queryFn: () => fetchRecommendedMovies(movieId),
    select: (result) => result.data.results,
    enabled: !!movieId,
    staleTime: 1000 * 60 * 10
  });
};