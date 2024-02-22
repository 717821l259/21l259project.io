import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Home = () => {
  return (
    <div>
      {/* Carousel with Bootstrap styling and dark theme */}
      <Carousel className='container' data-bs-theme="dark">
        {/* First Slide */}
        <Carousel.Item>
          {/* Image for the first slide */}
          <img
            className="d-block w-100"
            src="http://abtps.com/images/breadcrumbs_bg.jpg"
            alt="First slide"
            style={{ maxHeight: '500px' }}
          />
          {/* Carousel caption with a brief description */}
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          {/* Image for the second slide */}

          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/9754798/pexels-photo-9754798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            style={{ maxHeight: '475px' }}
          />
          {/* Carousel caption with a brief description */}
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          {/* Image for the third slide */}
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/blue-semi-truck-with-trailer-road_887562-1788.jpg?size=626&ext=jpg&ga=GA1.1.1006742107.1703221757&semt=sph"
            alt="Third slide"
            style={{ maxHeight: '500px' }}
          />
          {/* Carousel caption with a brief description */}
        </Carousel.Item>
      </Carousel>

      {/* Overview Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Welcome to Our Parcel Service</h2>
        <p className="text-center">
          We deliver your parcels with care and speed. Track your packages, schedule pickups,
          and experience hassle-free shipping with us.
        </p>
      </div>
      <div className="container mt-5">   
  <MDBRow>
    {/* Column 1: Time Management */}
    <MDBCol md="4" className="mb-4">
      <img
        src="https://img.freepik.com/free-vector/express-courier-delivery-professional-postal-service-cargo-transportation-business-gods-distribution-home-delivering-idea-design-element_335657-34.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais"
        alt="Time Management"
        className="img-fluid mb-3"
        style={{ maxHeight: '150px' }}
      />
      <h4 className="mb-3">Time Management</h4>
      <p>
        We value your time and ensure efficient time management throughout the shipping process.
      </p>
    </MDBCol>

    {/* Column 2: Fast Delivery */}
    <MDBCol md="4" className="mb-4">
      <img
        src="https://media.istockphoto.com/id/849921508/vector/express-delivery-icon-concept-truck-with-stop-watch-icon-for-service-order-fast-free-and.jpg?s=612x612&w=0&k=20&c=HqxEhRqWAHW1_1iZPqumhAD1471RLH1b-B0XtQQ3gKc="
        alt="Fast Delivery"
        className="img-fluid mb-3"
        style={{ maxHeight: '150px' }}
      />
      <h4 className="mb-3">Fast Delivery</h4>
      <p>
        Experience fast and reliable delivery services to get your parcels to their destination promptly.
      </p>
    </MDBCol>

    {/* Column 3: Safety */}
    <MDBCol md="4" className="mb-4">
      <img
        src="https://img.freepik.com/premium-vector/3d-parcel-box-shield-with-green-check-mark-shipping-insurance-transportation-safety-logistics-concept-vector-3d-illustration_221648-1273.jpg"
        alt="Safety"
        className="img-fluid mb-3"
        style={{ maxHeight: '150px' }}
      />
      <h4 className="mb-3">Safety</h4>
      <p>
        We prioritize the safety of your parcels, ensuring they reach their destination intact and secure.
      </p>
    </MDBCol>
  </MDBRow>
</div>
<MDBRow className="mt-5" style={{ marginLeft: '70px', marginRight: '0px' }}> {/* Adjusted margin using ml-3 and mr-3 */}
      {/* Half Content Column */}
      <MDBCol md="6" className="mb-4">
        <h4 className="mb-3">SRIRAM TRADERS</h4>
        <p>
        Energistically utilize team driven niche markets rather than leveraged platforms. Monotonectally restore tactical "outside the box" thinking and technically sound deliverables.
        </p>
        <p>
        Compellingly develop fully researched process improvements through innovative opportunities. Credibly productize highly efficient potentialities for vertical core competencies. Quickly maintain pandemic experiences rather than low-risk high-yield processes.
        </p>
      </MDBCol>

      {/* Half Image Column */}
      <MDBCol md="6" className="mb-4">
        <img
          src="https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=ais"
          alt="Half Image"
          className="img-fluid rounded"
          style={{ maxHeight: '80%', width: '100%', objectFit: 'cover' }}
        />
      </MDBCol>
    </MDBRow>
 <MDBRow className="mt-5" style={{ marginLeft: '10px', marginRight: '5px' }}>
        {/* Column 1: Schedule a Free Pickup */}
        <MDBCol md="4" className="mb-4">
          <img
            src="https://www.delhivery.com/_nuxt/img/how-works1.3096370.png"
            alt="Schedule a Free Pickup"
            className="img-fluid mb-3"
          />
          <h4 className="mb-3">Schedule a Free Pickup</h4>
          <p>Contact us to arrange a convenient time for parcel pickup.</p>
        </MDBCol>

        {/* Column 2: We Arrive at Your Location */}
        <MDBCol md="4" className="mb-4">
          <img
            src="https://www.delhivery.com/_nuxt/img/how-works2.f798377.png"
            alt="We Arrive at Your Location"
            className="img-fluid mb-3"
          />
          <h4 className="mb-3">We Arrive at Your Location</h4>
          <p>Our team will arrive at your specified location to collect the parcel.</p>
        </MDBCol>

        {/* Column 3: Sit Back and Relax */}
        <MDBCol md="4" className="mb-4">
          <img
            src="https://www.delhivery.com/_nuxt/img/how-works3.1faa3af.png"
            alt="Sit Back and Relax"
            className="img-fluid mb-3"
          />
          <h4 className="mb-3">Sit Back and Relax</h4>
          <p>Once collected, you can relax as we take care of the parcel delivery process.</p>
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
  );
};
export default Home;
