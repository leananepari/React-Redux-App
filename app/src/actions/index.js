import axios from 'axios';

export const getData = () => {
  return dispatch => {
    dispatch({ type: 'GET_DATA_START' });
    axios
      .get('https://yesno.wtf/api')
      .then(res => {
        dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
      })
      .catch(err => {
        dispatch({ type: 'GET_DATA_FAILURE', payload: 'Error'});
      });
  };
};