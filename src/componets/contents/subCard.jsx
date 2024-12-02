// SubscriptionPlan.js
import React from 'react';
import styled from 'styled-components';

const SubscriptionCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PlanTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const PlanPrice = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
  color: #e50914;
`;

const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  font-size: 16px;
  margin: 10px 0;
  color: #555;
`;

const SubscribeButton = styled.button`
  background-color: #e50914;
  color: white;
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #d40813;
  }
`;

const SubscriptionPlan = ({ title, price, features }) => {
  return (
    <SubscriptionCard>
      <PlanTitle>{title}</PlanTitle>
      <PlanPrice>${price}/month</PlanPrice>
      <PlanFeatures>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </PlanFeatures>
      <SubscribeButton>Subscribe Now</SubscribeButton>
    </SubscriptionCard>
  );
};

const App = () => {
  const plans = [
    {
      title: 'Basic',
      price: '8.99',
      features: ['Watch on 1 screen', '720p resolution', 'Unlimited movies and TV shows'],
    },
    {
      title: 'Standard',
      price: '12.99',
      features: ['Watch on 2 screens', '1080p resolution', 'Offline downloads', 'Unlimited movies and TV shows'],
    },
    {
      title: 'Premium',
      price: '15.99',
      features: ['Watch on 4 screens', '4K+HDR resolution', 'Offline downloads', 'Unlimited movies and TV shows'],
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {plans.map((plan, index) => (
        <SubscriptionPlan
          key={index}
          title={plan.title}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default App;
