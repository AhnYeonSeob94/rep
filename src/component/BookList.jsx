import React from 'react'
import useLibraryStore from '../store/useLibraryStore';
import { useBooksBySubject, useSearchBooks  } from '../query/useLibraryAPI'

const BookList = ({subject}) => {
    const { searchQuery } = useLibraryStore();

    const searchResult = useSearchBooks(searchQuery);
    const subjectResult = useBooksBySubject(subject);

    const books = searchQuery ? searchResult.data : subjectResult.data;
    const isLoading = searchQuery ? searchResult.isLoading : subjectResult.isLoading;

    if(isLoading) return <p>Loading spinner</p>;

  return (
    <div className="container mb-5">
      <h2 className="mb-4">
      {searchQuery
          ? `"${searchQuery}" 검색 결과`
          : subject.replaceAll('_', ' ').toUpperCase()}
      </h2>
      <div className="row g-4">
        {books?.map((book) => {
          const coverUrl = book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : 'https://via.placeholder.com/150x220?text=No+Image';

          return (
            <div key={book.key} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="card h-100 shadow-sm">
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body p-2 d-flex flex-column justify-content-between">
                  <h6 className="card-title text-truncate" title={book.title}>
                    {book.title}
                  </h6>
                  <p className="card-text text-muted small mb-0">
                    {book.authors?.map((a) => a.name).join(', ') || '저자 미상'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {books?.length === 0 && (
        <p className="text-muted text-center mt-3">표시할 책이 없습니다.</p>
      )}
    </div>
  )
}

export default BookList