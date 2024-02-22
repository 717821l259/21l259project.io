import React, { useState } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    parcelType:"",
    weight:"",
    billNo:"",
    parcelImage: null,
     });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming single file upload, adjust as needed
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., API calls, state updates, etc.
    console.log("Registration submitted:", formData);
    // Reset the form or navigate to another page after registration
  };

  return (

    <div className="register-form">
          <div
    className="about-header"
    style={{
      backgroundImage: `url("http://abtps.com/images/breadcrumbs_bg.jpg")`,
    }}
  >
  </div>
  <div className="order-p">
    <h2>Ship Now</h2>
  </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Parcel Type:
          <input
            type="text"
            name="parcelType"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Bill No:
          <input
            type="text"
            name="billNo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Parcel Image:
          <input
            type="file"
            name="parcelImage"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>+
      
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
export default RegistrationPage;