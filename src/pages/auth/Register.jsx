import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function () {
    const [form, setForm] = useState({ email: '', name: '', password: '', password_confirmation: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const { register } = useAuth()

    const updateField = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Clear error for that specific field
        if (errors[e.target.name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: null }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        register(form, setForm, setErrors, setLoading);
    };
 
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
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a href="index.html" className="d-inline-block auth-logo">
                                            <img src="assets/images/logo-light.png" alt="" height="20" />
                                        </a>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="card mt-4 card-bg-fill">

                                    <div className="card-body p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                            <p className="text-muted">Get your free velzon account now</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <form className="needs-validation" onSubmit={handleSubmit}>

                                                <div className="mb-3">
                                                    <label for="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                                    <input type="email" name='email' className={`form-control ${errors?.email ? 'is-invalid' : ''}`} id="useremail" placeholder="Enter email address" value={form.email} onChange={updateField} required />
                                                    <div className="invalid-feedback">
                                                        Please enter email
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="name" className="form-label">Username <span className="text-danger">*</span></label>
                                                    <input type="text" name='name' className={`form-control ${errors?.name ? 'is-invalid' : ''}`} id="name" placeholder="Enter username" value={form.name} onChange={updateField} required />
                                                    <div className="invalid-feedback">
                                                        Please enter username
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" for="password-input">Password</label>
                                                    <div className="position-relative auth-pass-inputgroup">
                                                        <input type="password" name='password' className={`form-control pe-5 password-input ${errors?.password ? 'is-invalid' : ''}`} onpaste="return false" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" value={form.password} onChange={updateField} required />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                        <div className="invalid-feedback">
                                                            Please enter password
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="mb-3">
                                                    <label className="form-label" for="confirm-password-input">Confirm Password</label>
                                                    <div className="position-relative auth-pass-inputgroup">
                                                        <input type="password" name='password_confirmation' className={`form-control pe-5 confirm-password-input ${errors?.password_confirmation ? 'is-invalid' : ''}`} onpaste="return false" placeholder="Enter confirm password" id="confirm-password-input" aria-describedby="passwordInput" value={form.password_confirmation} onChange={updateField} required />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none" type="button" id="password-addon-confirm"><i className="ri-eye-fill align-middle"></i></button>
                                                        <div className="invalid-feedback">
                                                            Please enter confirm password
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <a href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                                                </div>

                                                <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                    <h5 className="fs-13">Password must contain:</h5>
                                                    <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                    <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                    <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                    <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                                </div>

                                                <div className="mt-4">
                                                     <button className="btn btn-success w-100" type="submit" disabled={loading}>
                                                        {!loading && <span>Sign Up</span>}
                                                        {loading && (
                                                            <div
                                                                className="spinner-border text-light"
                                                                role="status"
                                                                style={{ width: '1rem', height: '1rem', verticalAlign: 'middle' }}
                                                            >
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        )}
                                                    </button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect m-1 waves-light"><i className="ri-facebook-fill fs-16"></i></button>
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect m-1 waves-light"><i className="ri-google-fill fs-16"></i></button>
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect m-1 waves-light"><i className="ri-github-fill fs-16"></i></button>
                                                        <button type="button" className="btn btn-info btn-icon waves-effect m-1 waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>


                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <NavLink to="/auth/login" className="fw-semibold text-primary text-decoration-underline"> Signin </NavLink> </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


                <footer className="footer">
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
