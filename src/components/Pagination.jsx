import React from 'react';
import '../assets/pagination.css'; // Import the Pagination styles

const Pagination = ({ currentPage, totalPages, onPageChange, searchTerm }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Set the maximum visible page numbers

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage, searchTerm) => {
    if (newPage === '...') return;

    onPageChange(newPage, searchTerm);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt; Previous
      </button>
      <div className="pagination-numbers">
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`pagination-number ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
