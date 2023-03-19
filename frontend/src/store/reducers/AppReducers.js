export default (state = {}, action) => {
  switch (action.type) {
    case 'PIE_CHART_DATA':
      return {
        ...state,
        pieChartData: [...action.payload],
      };

    default:
      return state;
  }
};
