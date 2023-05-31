import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
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

const UserDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the ID
    fetchUserData(id);
  }, [id]);

  const fetchUserData = async (id) => {
    try {
      // Make API request to fetch user data based on the ID
      const response = await fetch(
        `https://newdevapi.salvex.com/api/detail/${id}`,
        {
          headers: {
            "X-Api-Key": "4dxa0Xndty6jPT8kD19uM7Tb4MKk0c81aD7G3aEq",
          },
        }
      );
      const data = await response.json();
      setUserData(data);
      document.title = `Auction Detail: ${data.title}`;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>Auction Detail Page</Title>
      <UserDetails>
        <Label>ID:</Label>
        <Value>{id}</Value>
        <Label>Title:</Label>
        <Value>{userData.title}</Value>
      </UserDetails>
    </Container>
  );
};

export default UserDetailPage;
export const Head = () => <SEO />;
