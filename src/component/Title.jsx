import React from 'react'
import useLibraryStore from '../store/useLibraryStore'

const Title = () => {
    const { searchQuery, setSearchQuery } = useLibraryStore();

  return (
    <div className="py-5 text-white text-center" style={{ backgroundColor: '#1d3b35' }}>
      <h1 className="mb-4 fw-bold" style={{ fontSize: '2.5rem' }}>
        도서관 TEST
      </h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="책 제목이나 작가를 검색하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control w-50 me-2"
        />
        <button className="btn btn-warning">검색</button>
      </div>
    </div>
  )
}

export default Title