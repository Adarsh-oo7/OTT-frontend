import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for form and fields
const ChangePasswordWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #e50914;
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 18px;
  color: #fff;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d40813;
  }
`;

// Main component
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    // Perform change password action (e.g., API call)
    // You can add your API logic here
    console.log('Password changed successfully');
  };

  return (
    <ChangePasswordWrapper>
      <Title>Change Password</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Change Password</SubmitButton>
      </Form>
    </ChangePasswordWrapper>
  );
};

export default ChangePassword;
