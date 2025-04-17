import { create } from "zustand";



const useLibraryStore = create((set)=>({
    searchQuery : '',
    setSearchQuery: (query) => set({searchQuery: query}),
    selectedBook:'',
    setSelectedBook: (book)=>set({selectedBook: book}),
}))

export default useLibraryStore;