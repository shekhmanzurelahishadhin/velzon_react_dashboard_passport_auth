import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      
      <div className="auth-page-wrapper pt-5">
 
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div className="bg-overlay"></div>

            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div>
        </div>

      
        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center pt-4">
                            <div className="">
                                <img src="/assets/images/error.svg" alt="" className="error-basic-img move-animation"/>
                            </div>
                            <div className="mt-n4">
                                <h1 className="display-1 fw-medium">404</h1>
                                <h3 className="text-uppercase">Sorry, Page not Found 😭</h3>
                                <p className="text-muted mb-4">The page you are looking for not available!</p>
                                <NavLink to="/" className="btn btn-success"><i className="mdi mdi-home me-1"></i>Back to home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
   
        </div>
   

       
        <footer className="footer galaxy-border-none">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p className="mb-0 text-muted">&copy;
                                <script>document.write(new Date().getFullYear())</script> Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        

    </div>

    </div>
  )
}
