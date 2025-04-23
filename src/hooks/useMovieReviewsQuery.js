import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = (movieId) => {
  return api.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en-US"
    }
  });
};

export const useMovieReviewsQuery = (movieId) => {
    return useQuery({
      queryKey: ['movie-reviews', movieId],
      queryFn: () => fetchMovieReviews(movieId),
      select: (result) => result.data.results, // 리뷰 리스트만 추출
      enabled: !!movieId,
      staleTime: 1000 * 60 * 5
    });
  };