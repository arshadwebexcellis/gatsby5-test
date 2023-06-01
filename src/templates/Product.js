import React, { Component } from "react";
import styled from "styled-components";
import { SEO } from "../components/seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const UserDetails = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
`;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Value = styled.p`
  margin-bottom: 8px;
`;

const Product = ({ pageContext }) => {
  return (
    <Container>
      <Title>Auction Detail Page</Title>
      <UserDetails>
        <Label>ID:</Label>
        <Value>{pageContext.id}</Value>
        <Label>Title:</Label>
        <Value>{pageContext.title}</Value>
        <Label>Category:</Label>
        <Value>{pageContext.categorySlug}</Value>
      </UserDetails>
    </Container>
  );
};

export default Product;

export const Head = ({ location, pageContext }) => (
  <SEO title={pageContext.title} description={pageContext.title} />
);
