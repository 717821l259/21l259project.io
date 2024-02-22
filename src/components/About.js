// src/components/About.js

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const About = () => {
  return (
    <div className="about-container">
      <div
        className="about-header"
        style={{
          backgroundImage: `url("http://abtps.com/images/breadcrumbs_bg.jpg")`,
        }}
      >
         <div className="header-content">
          <h1 className="header-title">About Us</h1>
          <div className='con'>
          <p className="header-subtitle">We are cargo pioneer ready for any cargo challenge.</p>
        </div>
        </div>
        {/* Content inside the header can be added if needed */}
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <div className='text-colour'>
          <h1>SRIRAM Parcel Service</h1>
        </div>
        <p>The customer is very important, the customer will be followed by the customer. No dui or free developer. Mauris sometimes freed from pure cursing, or feugiat's ultricies laugh.</p>
      </div>


      <div className="container pos-rel">
        <div className="row">
          <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
            <h1 className="heading-main">
              <span>Our Goodness</span>
              What Makes Us Special
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-id"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Environmental Responsibility</h4>
                  <p>Recognizing our responsibility to the environment, we are committed to sustainable and eco-friendly practices. From optimizing delivery routes to reducing packaging waste, we aim to minimize our ecological footprint.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-live-support"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Customer Support</h4>
                  <p>Our Customer Support Team operates in the Administrative Office and branch offices around the clock, ensuring quick delivery and resolving any discrepancies that may arise.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.4s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-history"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Reliability &amp; Punctuality</h4>
                  <p>Respecting customer needs and the importance of their property, we take the utmost care in handling property and maintain the promise of dependability.</p>
                </div>
              </div>
            </div>
          </div>
          <MDBRow className="justify-content-around" style={{ marginLeft: '20px', marginRight: '200px' }}>
        {/* Column 1: Location */}
        <MDBCol md="3" className="mb-4">
          <MDBIcon icon="map-marker-alt" size="4x" className="mb-3" />
          <h4 className="mb-3">Location</h4>
          <p>2</p>
          {/* Additional content specific to Location */}
        </MDBCol>

        {/* Column 2: Clients */}
        <MDBCol md="3" className="mb-4">
          <MDBIcon icon="far fa-circle-user" size="4x" className="mb-3" />
          <h4 className="mb-3">Clients</h4>
          <p>10,000</p>
        </MDBCol>

        {/* Column 3: Vehicle */}
        <MDBCol md="3" className="mb-4">
          <MDBIcon icon="fas fa-truck" size="4x" className="mb-3" />
          <h4 className="mb-3">Vehicle</h4>
          <p>3</p>
          {/* Additional content specific to Vehicle */}
        </MDBCol>

        {/* Column 4: Tones */}
        <MDBCol md="3" className="mb-4">
          <MDBIcon icon="weight" size="4x" className="mb-3" />
          <h4 className="mb-3">Tones</h4>
          <p>10,000,00</p>
          {/* Additional content specific to Tones */}
        </MDBCol>
      </MDBRow>
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
      </div>
    </div>
  );
};

export default About;
 