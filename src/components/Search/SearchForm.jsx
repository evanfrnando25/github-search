import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers, searchRepos } from '../../actions/searchActions';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('users');

  useEffect(() => {
    if (searchTerm) {
      if (searchType === 'users') {
        dispatch(searchUsers(searchTerm, 1));
      } else {
        dispatch(searchRepos(searchTerm, 1));
      }
    }
  }, [searchTerm, searchType, dispatch]);

  return (
    <div className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="users">Users</option>
        <option value="repos">Repositories</option>
      </select>
    </div>
  );
};

export default SearchForm;
