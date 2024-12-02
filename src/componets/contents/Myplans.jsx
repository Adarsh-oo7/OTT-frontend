import React from 'react';
import styled from 'styled-components';

// Styled components for additional custom styles
const PlanContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  
`;

const PlanDetails = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PaymentHistoryBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlanHeading = styled.h2`
  color: #e50914;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`;

const Divider = styled.hr`
  border-top: 1px solid #e50914;
  width: 80%;
  margin: 20px auto;
`;

const Myplans = () => {
  return (
    <PlanContainer className='container'>
      <div className='row'>
        <PlanHeading>My Plans</PlanHeading>
        <Divider />
      </div>
      <div className="row">
        <div className="col-md-7">
          <PlanDetails className='p-4'>
            <h5>Email: <span style={{ color: '#e50914' }}>adarshsarachandran@gmail.com</span></h5>
            <h6>Id: <span style={{ color: '#333' }}>3831323</span></h6>
            <h6>Plan Status: <span style={{ color: '#28a745' }}>Active</span></h6>
            <h6>Plan Type: <span style={{ color: '#ffc107' }}>Gold</span></h6>
          </PlanDetails>
        </div>
        <div className="col-md-5">
          <PaymentHistoryBox className='text-center'>
            <h4>Payment History</h4>
            <Divider />
            {/* You can add a table or list of payment history here */}
            <p>No payment history available</p>
          </PaymentHistoryBox>
        </div>
      </div>
    </PlanContainer>
  );
}

export default Myplans;
