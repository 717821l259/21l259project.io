// src/components/Service.js
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Service = () => {
  return (
    <div>
            <header className="service-header">
      </header>
      <section className="content">
        <div className="category">
          <h2>Part Of Truckload</h2>
          <p>Our reliable truckload service provides transportation for large shipments.</p>
        </div>

        <div className="category">
          <h2>Full Truckload</h2>
          <p>Experience the convenience of a full truck dedicated to your shipments.</p>
        </div>

        <div className="category">
          <h2>District Load</h2>
          <p>Efficient district-level shipping for optimized delivery within specific regions.</p>
        </div>

        <div className="category">
          <h2>Warehouse</h2>
          <p>Explore our secure warehouse facilities for storage and distribution.</p>
        </div>
      </section>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Sriram Traders
              </h6>
              <p>
              Our Working hours are weekly five days and we also service for house transfer with specific package. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  HTML
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  CSS
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ship Now
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                82 A/3 Rottadi Street,Watrap,Virdhunagar district
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                thirupathys721@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 9360383381
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +9994167540
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          SriramTraders.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Service;
