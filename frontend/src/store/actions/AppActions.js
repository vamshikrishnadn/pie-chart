import { toast } from 'react-toastify';
import { getOrder, addOrder } from '../../services/AppServices';

export const getPieChartData = () => dispatch => {
  getOrder()
    .then(res => {
      dispatch({
        type: 'PIE_CHART_DATA',
        payload: res.data.payload,
      });
      return;
    })
    .catch(error => {
      console.error(error);
      return toast.error(error?.response?.data?.message);
    });
};

export const addNewOrder = values => dispatch => {
  dispatch(btnLoader(true));
  addOrder(values)
    .then(res => {
      dispatch(btnLoader(false));
      dispatch({
        type: 'PIE_CHART_DATA',
        payload: res.data.payload,
      });
      return toast.success('Successfully added.');
    })
    .catch(error => {
      console.error(error);
      dispatch(btnLoader(false));
      return toast.error(error?.response?.data?.message);
    });
};

export const btnLoader = status => dispatch => {
  return dispatch({
    type: 'BTN_LOADER',
    payload: status,
  });
};
