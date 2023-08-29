import axios from 'axios';

export const setLoading = () => ({
  type: 'SET_LOADING',
});

export const setSearchResults = (results) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: results,
});

export const setSearchError = (error) => ({
  type: 'SET_SEARCH_ERROR',
  payload: error,
})

export const clearSearchResults = () => ({
  type: 'CLEAR_SEARCH_RESULTS',
});

export const registerKey = (key) => ({
  type: 'REGISTER',
  key,
});

export const searchUsers = (searchTerm, page = 1) => async (dispatch) => {
  try {
    dispatch(setLoading()); // Set loading state
    const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&page=${page}`);
    const users = response.data.items.map((item) => ({
      id: item.id,
      type: 'user',
      login: item.login,
      avatar_url: item.avatar_url,
      star: item.starred_url
    }));
    const totalPages = Math.ceil(response.data.total_count / 30);
    dispatch(
      setSearchResults({
        results: users,
        currentPage: page,
        totalPages: totalPages,
      })
    );
  } catch (error) {
    console.error('Error searching users:', error);
    dispatch(setSearchError(error.message));
  }
};

export const searchRepos = (searchTerm, page = 1) => async (dispatch) => {
  try {
    dispatch(setLoading()); // Set loading state
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&page=${page}`);
    const repos = response.data.items.map((item) => ({
      id: item.id,
      type: 'repo',
      name: item.full_name,
      archive: item.archive_url
    }));
    const totalPages = Math.ceil(response.data.total_count / 30);
    dispatch(
      setSearchResults({
        results: repos,
        currentPage: page,
        totalPages: totalPages,
      })
    );
  } catch (error) {
    console.error('Error searching repositories:', error);
    dispatch(setSearchError('An error occurred while fetching repositories.'));
  }
};
