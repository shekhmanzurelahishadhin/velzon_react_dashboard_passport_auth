import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import api from '../../../src/api/axios';
import { toast } from 'react-toastify';

export default function () {
    const [form, setForm] = useState({ email: '', password: '', message: '' });
    const [loading, setLoading] = useState(false);

    const updateField = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        api.post('/login', form)
            .then(function (response) {
                console.log('Login successful:', response.data);

                if (response.data.token) {
                    localStorage.setItem('auth_token', response.data.token);
                     toast.success('Login successful!');
                }
                setForm({ email: '', password: '', message: '' });
            })
            .catch(function (error) {
                 toast.error('Login failed. Please check your credentials.');
            })
            .finally(function () {
                setLoading(false);
            });
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
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Velzon.</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <form onSubmit={handleSubmit}>

                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" className="form-control" name='email' id="email" placeholder="Enter Email" value={form.email} onChange={updateField} />
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <NavLink to="/auth/reset-password" className="text-muted">Forgot password?</NavLink>
                                                    </div>
                                                    <label className="form-label" htmlFor="password-input">Password</label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <input type="password" name='password' className="form-control pe-5 password-input" placeholder="Enter password" value={form.password} id="password-input" onChange={updateField} />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-success w-100" type="submit" disabled={loading}>
                                                        {!loading && <span>Sign In</span>}
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
                                                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
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
                                    <p className="mb-0">Don't have an account ? <Link to="/auth/register" className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
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
