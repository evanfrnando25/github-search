import createCachedReducer from './createCachedReducer';

const initialState = {
  searchResults: [],
  isLoading: false,
  errorMessage: '',
  currentPage: 1,
  totalPages: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload.results,
        isLoading: false,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        errorMessage: '',
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case 'SET_SEARCH_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default createCachedReducer('search', initialState, searchReducer);


