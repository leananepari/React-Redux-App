const initialState = {
  dataImg: '',
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_START':
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        dataImg: action.payload,
        isLoading: false,
        error: ''
      };
    case 'GET_DATA_FAILURE': 
      return {
        ...state,
        dataImg: '',
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};