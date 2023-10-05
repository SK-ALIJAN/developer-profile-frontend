import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
const SuccessContainer = styled.div`
  text-align: center;
  margin: 50px auto;
`;

const SuccessMessage = styled.h2`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  font-size: 48px;
  color: #28a745; /* Green color */
`;

const OkayButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessPage = () => {
  return (
    <SuccessContainer>
      <IconContainer>
        <FaCheckCircle />
      </IconContainer>
      <SuccessMessage>Application Submitted Successfully!</SuccessMessage>
      <OkayButton to="/">Okay</OkayButton>
    </SuccessContainer>
  );
};

export default SuccessPage;
