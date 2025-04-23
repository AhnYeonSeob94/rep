import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieTrailer = (id) => api.get(`/movie/${id}/videos`);

export const useMovieTrailerQuery = (id) =>
  useQuery({
    queryKey: ['movie-trailer', id],
    queryFn: () => fetchMovieTrailer(id),
    select: (result) => result.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube'),
    enabled: !!id
  });