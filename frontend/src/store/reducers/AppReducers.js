export default (state = {}, action) => {
  switch (action.type) {
    case 'PIE_CHART_DATA':
      return {
        ...state,
        pieChartData: [...action.payload],
      };
    case 'BTN_LOADER':
      return {
        ...state,
        btnLoader: action.payload,
      };

    default:
      return state;
  }
};
