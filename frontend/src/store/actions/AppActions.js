import { toast } from 'react-toastify';

export const getPieChartData = () => dispatch => {
  // signupService(formValues)
  //   .then(res => {
  //     console.log('cementAction', res.data);
  //     navigate('/Login');
  //     return toast.success('User created successfully.');
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     console.log(error);
  //     return toast.error(error?.response?.data?.message );
  //   });
  dispatch({
    type: 'PIE_CHART_DATA',
    payload: [
      ['Delivery', 'Product Delivery'],
      ['Pending', 11],
      ['Conformed', 2],
      ['Dispatched', 2],
      ['Complete', 2],
      ['Canceled', 7],
    ],
  });
};
