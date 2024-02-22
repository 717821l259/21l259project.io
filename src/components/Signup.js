import React, { useState } from 'react';
  import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  } from 'mdb-react-ui-kit';
  
  function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleSignUp = () => {
      // Perform signup logic (in-memory simulation)
      localStorage.setItem('userData', JSON.stringify({ email, password, username }));
      setLoggedIn(true);
    };
  
    const handleSignIn = () => {
      // Perform login logic (in-memory simulation)
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserData);
        if (email === storedEmail && password === storedPassword) {
          setLoggedIn(true);
          // Redirect to another page (e.g., '/about') after successful login
          window.location.href = '/about';
        } else {
          // Handle authentication failure (display error message, etc.)
          console.log('Authentication failed');
        }
      } else {
        // Handle authentication failure (display error message, etc.)
        console.log('Authentication failed');
      }
    };
  
    return (
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: '185px' }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>
  
              <p>{loggedIn ? 'You are logged in!' : 'Please sign up to create an account'}</p>
  
              {!loggedIn && (
                <>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Username'
                    id='form0'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Email address'
                    id='form1'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    id='form2'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
  
                  <div className="text-center pt-1 mb-5 pb-1">
                    <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleSignUp}>
                      Sign up
                    </MDBBtn>
                  </div>
                </>
              )}
  
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                {!loggedIn ? (
                  <>
                    <p className="mb-0">Already have an account?</p>
                    <MDBBtn outline className='mx-2' color='danger' onClick={handleSignIn}>
                      Sign in
                    </MDBBtn>
                  </>
                ) : (
                  <p className="mb-0">You are already logged in!</p>
                )}
              </div>
            </div>
          </MDBCol>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  
  export default App;
  