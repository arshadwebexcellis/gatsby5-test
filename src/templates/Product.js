import React from "react";
import { SEO } from "../components/seo";
import "./../include/css/bootstrap.min.css";
import "./../include/css/style.css";
import Header from "../components/common/header";

const Product = ({ pageContext }) => {
  return (
    <>
      <Header />
      <div class="product-details-wrapper">
        <div class="product-details-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="product-details-box w-lg-100 d-lg-flex flex-lg-wrap">
                  <div class="pd-sidebar">
                    <div class="pd-sidebar-inner sticky-top">
                      <div class="product-slider-outer">
                        <ul class="product-slider mob-full-width">
                          <li class="product-slider-item">
                            <div class="product-img-box">
                              <img src={pageContext.primaryPicture} alt="" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-none d-lg-block"></div>
                    </div>
                  </div>
                  <div class="pd-text-box d-flex flex-column">
                    <div class="pd-box  d-none d-lg-block">
                      <div class="breadcrumb-container">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="#!">All Listings</a>
                          </li>
                          {pageContext.categorySlug.split(" > ").map((cat) => (
                            <li class="breadcrumb-item">
                              <a href="#!">{cat}</a>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div class="product-heading-box d-flex align-items-start justify-content-between">
                        <h1>{pageContext.title}</h1>
                      </div>
                    </div>
                    <div class="pd-box  d-block d-lg-none">
                      <h6>Oil and Gas</h6>
                      <h3>
                        Coiled Tubing Motion Compensated Lift Frame Equipment
                      </h3>
                    </div>
                    <div class="pd-box">
                      <div class="tab-pane-content-box">
                        <table class="table table-width-auto align-middle table-borderless">
                          <tbody>
                            <tr>
                              <td>ID</td>
                              <td>:</td>
                              <td>{pageContext.mongodb_id}</td>
                            </tr>
                            <tr>
                              <td>Quantity</td>
                              <td>:</td>
                              <td>{`${pageContext.quantity} ${pageContext.unit}`}</td>
                            </tr>
                            <tr>
                              <td>Manufacturer</td>
                              <td>:</td>
                              <td>
                                <p class="dark-green-text text-decoration-underline">
                                  {pageContext.traderCompany}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="pd-box">
                      <h4>Seller Description</h4>
                      <p>
                        Coiled Tubing Motion Compensated Lift Frame Equipment
                        Consolidated
                      </p>
                      <ul class="dot-list text-uppercase">
                        <li>
                          <strong>ITEM 1 –</strong>1 X MOTION COMPENSATED LIFT
                          FRAME.
                        </li>
                        <li>
                          <strong>ITEM 2 –</strong>2 X HOSE BASKETS WITH HOSES
                          AND CONTROL PANELS.
                        </li>
                        <li>
                          <strong>ITEM 3 –</strong>1 X NPV ACCUMULATOR BOTTLE
                          SKID.
                        </li>
                        <li>
                          <strong>ITEM 4 /5/6 –</strong>1 X LIFTING SUB / 4 X
                          PALLETS OF SLINGS AND SHACKLES / 5 X CRATES WITH WIRE
                          ROPES AND SHACKLES – LOCATION NOT KNOWN.
                        </li>
                        <li>
                          <strong>ITEM 7 –</strong> 1 X ZONE AND HYDRAULIC POWER
                          UNIT.
                        </li>
                      </ul>
                      <div class="pd-item-box">
                        <h4>Seller Description</h4>
                        <div class="table-responsive">
                          <table class="table small-font-size table-bordered table-md">
                            <thead class="table-light">
                              <tr>
                                <th>Part Number</th>
                                <th>Description of Part</th>
                                <th>Quantity</th>
                                <th>Notes</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>23467</td>
                                <td>Engine Wash Probe</td>
                                <td>1</td>
                                <td>JMP/CF6/D/6511</td>
                              </tr>
                              <tr>
                                <td>23467</td>
                                <td>Ladder</td>
                                <td>2</td>
                                <td>SMALL</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="pd-box d-block d-lg-none">
                      <h4>Supporting Documents</h4>
                      <ul class="doc-list d-flex align-items-center mb-0">
                        <li class="doc-item">
                          <div class="doc-img-box d-flex align-items-center justify-content-center">
                            <img src="include/images/pdf-file.svg" alt="" />
                          </div>
                          <p>File.pdf</p>
                        </li>
                        <li class="doc-item">
                          <div class="doc-img-box d-flex align-items-center justify-content-center">
                            <img src="include/images/doc-file.svg" alt="" />
                          </div>
                          <p>File.doc</p>
                        </li>
                      </ul>
                    </div>
                    <div class="pd-box">
                      <h4>Seller Terms</h4>
                      <ul class="dot-list green-text">
                        <li>
                          Salvex and the seller have the right to reject any and
                          all offers.
                        </li>
                        <li>
                          This product is sold <b>AS IS, WHERE IS.</b>
                        </li>
                        <li>
                          Buyer is responsible for all taxes, duties, loading
                          and freight charges.
                        </li>
                        <li>
                          Seller does not offer any warranties or manufacturer
                          warranties.
                        </li>
                        <li>
                          Upon receipt of cleared funds, Seller will provide the
                          Buyer a Release Order for item pick up. Title
                          transfers from Seller to Buyer upon issuance of the
                          Release Order.
                        </li>
                        <li>
                          <b>
                            It is Buyer's responsibility to verify quantities
                            and condition at the time of pick up.
                          </b>{" "}
                          Once the product has been removed from Seller's
                          location, there will be no adjustments based on
                          quantity or condition.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bids-cta-container d-block d-md-none">
          <div class="bids-cta-header d-flex align-items-center">
            <div class="flex-grow-1">
              <p>Wholesale price</p>
              <strong>$2,00,000</strong>
            </div>
            <div class="flex-grow-1">
              <p>Time Remaining</p>
              <strong>05h : 34m : 00s</strong>
            </div>
          </div>
          <a href="#!" class="btn btn-default btn-block btn-xxl">
            + Place a Bid
          </a>
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
  );
};

export default Product;

export const Head = ({ location, pageContext }) => (
  <SEO title={pageContext.title} description={pageContext.title} />
);
