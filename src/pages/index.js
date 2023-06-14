import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SEO } from "../components/seo";
import { Link } from "gatsby";
import Header from "../components/common/header";

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
      const response = await fetch(
        `https://dpsx4xxmntql7.cloudfront.net/api/archive/list?page=${currentPage}&q=${searchQuery}&category=marine`,
        {
          headers: {
            "X-Api-Key": "4dxa0Xndty6jPT8kD19uM7Tb4MKk0c81aD7G3aEq",
          },
        }
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
    <>
      <Header />
      <div class="filter-outer-container">
        <div class="aviation-archives-container w-lg-100 d-lg-flex flex-lg-wrap">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="aac-head d-flex align-items-md-center justify-content-between">
                  <h3>Aviation Archives</h3>
                  <div class="custom-search-box white-search-box position-relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.4">
                        <path
                          d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 17.5L13.875 13.875"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <input
                      type="text"
                      class="search-input"
                      placeholder="Search Active"
                    />
                  </div>
                </div>
                <div class="aac-body">
                  <div class="table-responsive mb-30">
                    <table class="new-product-list-table table table-bordered table-wrap">
                      <thead class="table-light">
                        <tr>
                          <th>Item</th>
                          <th>Qty</th>
                          <th>Location</th>
                          <th>End Date</th>
                          <th>Item #</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row) => (
                          <tr>
                            <td>
                              <div class="product-item d-flex">
                                <Link to={`/products/${row._id}`}>
                                  <div class="pi-img">
                                    <img src={row.primaryPicture} alt="" />
                                  </div>
                                </Link>
                                <p>{row.title}</p>
                              </div>
                            </td>
                            <td>
                              {row.quantity} {row.unit}
                            </td>
                            <td>{row.country}</td>
                            <td>{row.endDate}</td>
                            <Link to={`/products/${row._id}`}>
                              <td>{row._id}</td>
                            </Link>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="pagination-container d-flex align-items-center justify-content-between">
                    <div class="pagination-btn prev-btn">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 17L6 12L11 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 17L13 12L18 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Previous</span>
                    </div>

                    <ul class="pagination">
                      {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                      ).map((page) => (
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            {page + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div class="pagination-btn next-btn">
                      <span>Next </span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 17L18 12L13 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 17L11 12L6 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="footer">
          <div class="footer-upper">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4">
                  <div class="footer-upper-left">
                    <a href="#!" class="footer-logo">
                      <img src="include/images/footer-logo.png" alt="" />
                    </a>
                    <address>
                      440 Louisiana Street <br />
                      Suite 550, Houston, TX 77002
                    </address>
                    <ul class="social-links d-lg-flex align-items-lg-center d-none">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="footer-upper-right d-flex flex-wrap">
                    <div class="footer-box d-flex flex-column">
                      <h4>ABOUT SALVEX</h4>
                      <ul>
                        <li>
                          <a href="#!">Company</a>
                        </li>
                        <li>
                          <a href="#!">Impact</a>
                        </li>
                        <li>
                          <a href="#!">Industries</a>
                        </li>
                        <li>
                          <a href="#!">Careers</a>
                        </li>
                        <li>
                          <a href="#!">Case Studies</a>
                        </li>
                      </ul>
                    </div>
                    <div class="footer-box d-flex flex-column">
                      <h4>CONTACT US</h4>
                      <ul>
                        <li>
                          <span>P :</span>
                          <a href="tel:7132299000">713.229.9000</a>
                        </li>
                        <li>
                          <span>F :</span> 973.556.1328
                        </li>
                        <li>
                          <span>E :</span>
                          <a href="mailto:sales@salvex.com">sales@salvex.com</a>
                        </li>
                      </ul>
                      <div class="mob-social-box d-block d-lg-none">
                        <ul class="social-links d-flex align-items-center">
                          <li>
                            <a href="#!">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-lower">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 d-lg-flex align-items-lg-center justify-content-lg-center">
                  <ul class="footer-nav-list d-flex align-items-center">
                    <li>
                      <a href="#!">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#!">Privacy Policy</a>
                    </li>
                  </ul>
                  <div class="copyright-box">
                    <img src="include/images/white-copyright.svg" alt="" />
                    2021 <a href="#!">Salvex Group</a>, Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
    // <TableContainer>
    //   <Header>Auction List</Header>

    //   <Table>
    //     <thead>
    //       <tr>
    //         <TableHeaderCell>Item</TableHeaderCell>
    //         <TableHeaderCell>Title</TableHeaderCell>
    //         <TableHeaderCell>Quantity</TableHeaderCell>
    //         <TableHeaderCell>Location</TableHeaderCell>
    //         <TableHeaderCell>End Date</TableHeaderCell>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row) => (
    //         <tr key={row._id}>
    //           <TableCell>
    //             <Link to={`/products/${row._id}`}>{row._id}</Link>
    //           </TableCell>
    //           <TableCell>{row.title}</TableCell>
    //           <TableCell>
    //             {row.quantity} {row.unit}
    //           </TableCell>
    //           <TableCell>{row.city}</TableCell>
    //           <TableCell>{row.end_date}</TableCell>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    //   <PaginationContainer>
    //     {Array.from({ length: totalPages }, (_, index) => index + 1).map(
    //       (page) => (
    //         <PaginationButton key={page} onClick={() => handlePageChange(page)}>
    //           {page}
    //         </PaginationButton>
    //       )
    //     )}
    //   </PaginationContainer>
    // </TableContainer>
  );
};

export default BorderedTable;
export const Head = ({ location }) => (
  <SEO
    title={"Archive List"}
    description={"Archive List"}
    location={location}
  />
);
