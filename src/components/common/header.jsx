import React from "react";
import logo from "../../include/images/logo.svg";
import salvexLogo from "../../include/images/salvex-logo.svg";

const Header = () => {
  return (
    <header id="header">
      <div class="header-top-container d-flex align-items-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 d-flex align-items-center">
              <div class="htc-text-box">
                <strong>$5.2B Global Marketplace </strong> for Asset Recovery &
                Surplus Inventory
              </div>
              <div class="htc-nav  ms-auto d-none d-xl-block">
                <ul class="htc-nav-list text-capitalize d-flex align-items-center">
                  <li class="htc-nav-item">
                    <a
                      href="#!"
                      class="htc-nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#notificationCollapse"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 4.58333C19 6.56235 17.3957 8.16667 15.4167 8.16667C13.4377 8.16667 11.8334 6.56235 11.8334 4.58333C11.8334 2.60431 13.4377 1 15.4167 1C17.3957 1 19 2.60431 19 4.58333Z"
                          fill="#FF4242"
                          stroke="#F5F5F5"
                          stroke-width="2"
                        />
                        <path
                          d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Notifications
                    </a>
                  </li>
                  <li class="htc-nav-item">
                    <a
                      href="#!"
                      class="htc-nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#chatCollapse"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.4409 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Chat
                    </a>
                  </li>
                  <li class="htc-nav-item">
                    <a
                      href="#!"
                      class="htc-nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#profileCollapse"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Account
                    </a>
                  </li>
                  <li class="htc-nav-item">
                    <a href="#!" class="htc-nav-link">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.33337 14.1666L12.5 9.99998L8.33337 5.83331"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5 10H2.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-main-container">
        <nav class="navbar navbar-expand-xl">
          <div class="container-fluid">
            <div class="nav-inside position-relative flex-wrap d-flex align-items-center">
              <a class="navbar-brand" href="#!">
                <img class="d-none d-lg-block" src={logo} alt="" />
                <img class="d-block d-lg-none" src={salvexLogo} alt="" />
              </a>
              <button
                class="nav-icon"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#categoriesCollapse"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div class="navbar-collapse flex-grow-0 d-none d-xl-block">
                <div class="navbar-inside ml-auto">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#!">
                        Categories
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!">
                        Manufacturers
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#!"
                        onclick="toggleVisibility('dropDownRegions');"
                      >
                        Regions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="header-nav-list ms-auto d-flex align-items-center d-xl-none">
                <li class="hnl-item">
                  <a
                    href="#!"
                    class="hnl-link"
                    data-bs-toggle="modal"
                    data-bs-target="#upcomingBidCollapse"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1704 4.39258H5.17041C4.06584 4.39258 3.17041 5.28801 3.17041 6.39258V20.3926C3.17041 21.4971 4.06584 22.3926 5.17041 22.3926H19.1704C20.275 22.3926 21.1704 21.4971 21.1704 20.3926V6.39258C21.1704 5.28801 20.275 4.39258 19.1704 4.39258Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.1704 2.39258V6.39258"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.17041 2.39258V6.39258"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.17041 10.3926H21.1704"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li class="hnl-item">
                  <a
                    href="#!"
                    class="hnl-link"
                    data-bs-toggle="modal"
                    data-bs-target="#chatCollapse"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li class="hnl-item">
                  <a
                    href="#!"
                    class="hnl-link"
                    data-bs-toggle="modal"
                    data-bs-target="#notificationCollapse"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="18.5"
                        cy="5.5"
                        r="4.5"
                        fill="#FF4242"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                </li>
                <li class="hnl-item">
                  <a
                    href="#!"
                    class="hnl-link"
                    data-bs-toggle="modal"
                    data-bs-target="#profileCollapse"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div class="header-right d-flex align-items-center flex-grow-1">
                <div class="flex-grow-1 ms-auto dropdown position-static">
                  <div
                    class="header-search-box d-flex align-items-center flex-grow-1 ms-auto dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.4">
                        <path
                          d="M9.20475 15.8333C12.8867 15.8333 15.8714 12.8486 15.8714 9.16667C15.8714 5.48477 12.8867 2.5 9.20475 2.5C5.52285 2.5 2.53809 5.48477 2.53809 9.16667C2.53809 12.8486 5.52285 15.8333 9.20475 15.8333Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5381 17.5L13.9131 13.875"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <input
                      type="text"
                      class="search-input"
                      placeholder="Search"
                    />
                  </div>
                  <div class="dropdown-menu full-width-dropdown-menu dropdown-menu-end">
                    <div class="fwdm-head">
                      <h3>Test</h3>
                    </div>
                    <div class="fwdm-body" data-simplebar>
                      <div class="fwdm-inner-content d-flex flex-wrap">
                        <div class="fwdm-box">
                          <h4>Search in Category</h4>
                          <ul>
                            <li>
                              <a href="#!">Agriculture and Food (40)</a>
                            </li>
                            <li>
                              <a href="#!">Aviation (525)</a>
                            </li>
                            <li>
                              <a href="#!">Building Materials (123)</a>
                            </li>
                            <li>
                              <a href="#!">
                                Chemicals, Minerals, Fertilizers and Plastics
                                (81)
                              </a>
                            </li>
                            <li>
                              <a href="#!">Commercial Equipment (365)</a>
                            </li>
                            <li>
                              <a href="#!">Computers & Peripherals (48)</a>
                            </li>
                            <li>
                              <a href="#!">Consumer Goods (235)</a>
                            </li>
                            <li>
                              <a href="#!">
                                Electrical Utilities & Downstream (111)
                              </a>
                            </li>
                            <li>
                              <a href="#!">Heavy Equipment (127)</a>
                            </li>
                            <li>
                              <a href="#!">Marine (61)</a>
                            </li>
                            <li>
                              <a href="#!">Metals (29)</a>
                            </li>
                            <li>
                              <a href="#!">Oil and Gas (1226)</a>
                            </li>
                            <li>
                              <a href="#!">Paper & Pulp (7)</a>
                            </li>
                            <li>
                              <a href="#!">Pipe (605)</a>
                            </li>
                            <li>
                              <a href="#!">Refinery Plant (1)</a>
                            </li>
                          </ul>
                        </div>
                        <div class="fwdm-box">
                          <h4>Search in Region</h4>
                          <ul>
                            <li>
                              <a href="#!">United States (1505)</a>
                            </li>
                            <li>
                              <a href="#!">Africa (196)</a>
                            </li>
                            <li>
                              <a href="#!">Americas (282)</a>
                            </li>
                            <li>
                              <a href="#!">Asia-Pacific (265)</a>
                            </li>
                            <li>
                              <a href="#!">Europe (401)</a>
                            </li>
                            <li>
                              <a href="#!">Middle East (232)</a>
                            </li>
                            <li>
                              <a href="#!">South America (20)</a>
                            </li>
                            <li>
                              <a href="#!">Central America (45)</a>
                            </li>
                          </ul>
                        </div>
                        <div class="fwdm-box">
                          <h4>Search in Manufacturer</h4>
                          <ul>
                            <li>
                              <a href="#!">Airbus (38)</a>
                            </li>
                            <li>
                              <a href="#!">ATR (10)</a>
                            </li>
                            <li>
                              <a href="#!">Baker Hughes (15)</a>
                            </li>
                            <li>
                              <a href="#!">BMW (13)</a>
                            </li>
                            <li>
                              <a href="#!">Boeing (97)</a>
                            </li>
                            <li>
                              <a href="#!">Bombardier (10)</a>
                            </li>
                            <li>
                              <a href="#!">Cameron (15)</a>
                            </li>
                            <li>
                              <a href="#!">Caterpillar (20)</a>
                            </li>
                            <li>
                              <a href="#!">Cessna Aircraft Company (13)</a>
                            </li>
                            <li>
                              <a href="#!">CFM International (14)</a>
                            </li>
                            <li>
                              <a href="#!">Eaton (13)</a>
                            </li>
                            <li>
                              <a href="#!">General Electric (22)</a>
                            </li>
                            <li>
                              <a href="#!">Honeywell (41)</a>
                            </li>
                            <li>
                              <a href="#!">HONEYWELL AEROSPACE (15)</a>
                            </li>
                            <li>
                              <a href="#!">NOV (15)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown position-static">
                  <a href="#!" class="header-btn d-none d-xl-block">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.0002 4.16669V15.8334"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.16687 10H15.8335"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Post a Listing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
