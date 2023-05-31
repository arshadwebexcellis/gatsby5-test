import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SEO } from "../components/seo";
import { Link } from "gatsby";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
`;

const TableCell = styled.td`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
`;

const TableHeaderCell = styled.th`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  margin-bottom: 16px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PaginationButton = styled.button`
  margin: 0 4px;
  padding: 4px 8px;
`;

const BorderedTable = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchQuery]);

  const fetchData = async () => {
    try {
      document.title = "Auction List";
      const response = await fetch(
        `https://dpsx4xxmntql7.cloudfront.net/api/archive/list?page=${currentPage}&q=${searchQuery}&category=Aviation`
      );
      const result = await response.json();
      console.log(result);
      setData(result.data);
      setTotalPages(result.pagination.totalPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer>
      <Header>Auction List</Header>

      <Table>
        <thead>
          <tr>
            <TableHeaderCell>Item</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Quantity</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>End Date</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <TableCell>
                <Link to={`/details?id=${row._id}`}>{row._id}</Link>
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                {row.quantity} {row.unit}
              </TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.end_date}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationButton key={page} onClick={() => handlePageChange(page)}>
              {page}
            </PaginationButton>
          )
        )}
      </PaginationContainer>
    </TableContainer>
  );
};

export default BorderedTable;

export const Head = () => <SEO />;
