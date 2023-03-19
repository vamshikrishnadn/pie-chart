import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const DeliveryForm = () => {
  // states
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  // constants
  const availableStatus = ['Pending', 'Conformed', 'Dispatched', 'Complete', 'Canceled'];

  const handleChange = e => {
    setStatus(e.target?.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('called');
  };

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col-12 col-md-4'>
          <Form onSubmit={handleSubmit}>
            <div>
              <label>Select Status * </label>
              <Form.Select
                aria-label='Status'
                className='mb-2 d-inline-block'
                onChange={handleChange}
                value={status}
              >
                <option>Select Status</option>
                {availableStatus?.map((status, i) => (
                  <option value={status} key={i} className='text-capitalize'>
                    {status}
                  </option>
                ))}
              </Form.Select>
            </div>
            <Button
              variant='outline-success'
              className='d-inline-block'
              disabled={!status}
              type='submit'
              style={{ width: '100px' }}
            >
              {loading ? (
                <Spinner animation='border' role='status' size='sm'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DeliveryForm;
