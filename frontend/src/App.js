import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';

import AppCard from './jsx/layouts/AppCard';
import AppPieChart from './jsx/layouts/AppPieChart';
import Loader from './jsx/layouts/Loader';
import DeliveryForm from './jsx/pages/DeliveryForm';
import { getPieChartData } from './store/actions/AppActions';

const App = () => {
  const dispatch = useDispatch();

  const { pieChartData } = useSelector(state => state.app);

  useEffect(() => {
    dispatch(getPieChartData());
  }, []);

  return pieChartData ? (
    <section className='d-flex align-items-center justify-content-center main-container'>
      <Container>
        <AppCard>
          <AppPieChart />
          <DeliveryForm />
        </AppCard>
      </Container>
    </section>
  ) : (
    <Loader />
  );
};

export default App;
