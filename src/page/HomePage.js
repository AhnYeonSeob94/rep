import React from 'react';
import BookList from '../component/BookList';
import useLibraryStore from '../store/useLibraryStore';
import Title from '../component/Title';

const HomePage = () => {
  const { searchQuery } = useLibraryStore();

  return (
    <div className="container">
      <Title/>
      {!searchQuery && (
        <>
          <BookList subject="romance" />
        </>
      )}
    </div>
  );
};

export default HomePage;