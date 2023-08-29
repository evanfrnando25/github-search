import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchUsers, searchRepos } from '../../actions/searchActions';
import UserCard from '../Card/UserCard';
import RepoCard from '../Card/RepoCard';
import Pagination from '../Pagination';
import LoadingSpinner from '../Loading'
import '../../assets/pagination.css'
import '../../assets/card.css'

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.search.isLoading);
  const currentPage = useSelector((state) => state.search.currentPage);
  const totalPages = useSelector((state) => state.search.totalPages);
  const errorMessage = useSelector((state) => state.search.errorMessage);

  

  const handlePageChange = (newPage, searchTerm) => {
    if (searchResults.length > 0) {
      const resultType = searchResults[0].type;
      
      if (resultType === 'user') {
        dispatch(searchUsers(searchTerm, newPage)); // Fetch users with login as searchTerm
      } else if (resultType === 'repo') {
        dispatch(searchRepos(searchTerm, newPage)); // Fetch repositories with repo name as searchTerm
      }
    }
  };

  return (
    <div className='card-grid'>
      {isLoading && !errorMessage ? (
        <LoadingSpinner />
      ) :
        errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
        ) : (
        searchResults.map((result) =>
          result.type === 'user' ? (
              <UserCard key={result.id} user={result} />
          ) : (
              <RepoCard key={result.id} repo={result} />
          )
        )
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => handlePageChange(newPage, currentPage)}
      />
    </div>
  );
};

export default SearchResult;
