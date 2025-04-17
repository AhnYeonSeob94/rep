import React from 'react'
import useLibraryStore from '../store/useLibraryStore';

const MyBooksPage = () => {
    const { favoriteBooks } = useLibraryStore();

  return (
    <div className="container py-5">
      <h2 className="mb-4">나의 책 리스트</h2>
      {favoriteBooks.length > 0 ? (
        <ul className="list-group">
          {favoriteBooks.map((book) => (
            <li className="list-group-item" key={book.key}>
              <strong>{book.title}</strong> by {book.authors?.map((a) => a.name).join(', ')}
            </li>
          ))}
        </ul>
      ) : (
        <p>아직 좋아요를 누른 책이 없습니다.</p>
      )}
    </div>
  );
}

export default MyBooksPage