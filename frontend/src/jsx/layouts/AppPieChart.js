import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { useSelector, useDispatch } from 'react-redux';
import { getPieChartData } from '../../store/actions/AppActions';

export const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

export const options = {
  title: 'Delivery Details',
};

const AppPieChart = () => {
  const dispatch = useDispatch();

  const { pieChartData } = useSelector(state => state.app);

  useEffect(() => {
    dispatch(getPieChartData());
  }, []);

  return pieChartData ? (
    <Chart
      chartType='PieChart'
      data={pieChartData}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  ) : (
    <h1>Loading...</h1>
  );
};

export default AppPieChart;
