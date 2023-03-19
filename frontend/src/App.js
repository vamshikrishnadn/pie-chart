import React from 'react';
import Container from 'react-bootstrap/Container';

import AppCard from './jsx/layouts/AppCard';
import AppPieChart from './jsx/layouts/AppPieChart';
import DeliveryForm from './jsx/pages/DeliveryForm';

const App = () => {
  return (
    <section className='d-flex align-items-center justify-content-center main-container'>
      <Container>
        <AppCard>
          <AppPieChart />
          <DeliveryForm />
        </AppCard>
      </Container>
    </section>
  );
};

export default App;
