import { useQuery } from '@tanstack/react-query';

export const useSearchBooks = (query) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();
      console.log(data);
      return data.docs;
    },
    enabled: !!query,
  });
};

export const useBooksBySubject = (book) => {
  return useQuery({
    queryKey: ['subject', book],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org/subjects/${book}.json`);
      const data = await res.json();
      console.log(data);
      return data.works;
    },
    enabled: !!book,
  });
};