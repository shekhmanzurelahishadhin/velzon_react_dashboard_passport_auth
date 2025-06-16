import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function Sidebar() {
    const {user, logout} = useAuth();
     const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
    return (
        <div>
            <div className="app-menu navbar-menu">

                <div className="navbar-brand-box">

                    <NavLink to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </NavLink>

                    <NavLink to="/" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="17" />
                        </span>
                    </NavLink>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>

                <div className="dropdown sidebar-user m-1 rounded">
                    <button type="button" className="btn material-shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="d-flex align-items-center gap-2">
                            <img className="rounded header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                            <span className="text-start">
                                <span className="d-block fw-medium sidebar-user-name-text">{user ? user?.name : ''}</span>
                                <span className="d-block fs-14 sidebar-user-name-sub-text"><i className="ri ri-circle-fill fs-10 text-success align-baseline"></i> <span className="align-middle">Online</span></span>
                            </span>
                        </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">

                        <h6 className="dropdown-header">Welcome {user ? user?.name : ''}!</h6>
                        <NavLink className="dropdown-item" to="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></NavLink>
                        <NavLink className="dropdown-item" to="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></NavLink>
                        <NavLink className="dropdown-item" to="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></NavLink>
                        <NavLink className="dropdown-item" to="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="pages-profile.html"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></NavLink>
                        <NavLink className="dropdown-item" to="pages-profile-settings.html"><span className="badge bg-success-subtle text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></NavLink>
                        <NavLink className="dropdown-item" to="auth-lockscreen-basic.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></NavLink>
                        <NavLink className="dropdown-item" to="" onClick={handleLogout}><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></NavLink>
                    </div>
                </div>
                <div id="scrollbar" className='h-100 simplebar-scrollable-y'>
                    <div className="container-fluid">


                        <div id="two-column-menu">
                        </div>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarSoftConfig" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSoftConfig">
                                    <i className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Soft Configure</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarSoftConfig">
                                    <ul className="nav nav-sm flex-column">
                                           <li className="nav-item">
                                            <a href="#sidebarProjects" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProjects" data-key="t-calender">
                                                Products
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarProjects">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="/project-categories" className="nav-link" data-key="t-main-calender"> Project Category </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-calendar-month-grid.html" className="nav-link" data-key="t-month-grid"> Month Grid </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/test" className="nav-link" data-key="t-analytics"> Analytics </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard-crm.html" className="nav-link" data-key="t-crm"> CRM </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="#" className="nav-link" data-key="t-ecommerce"> Ecommerce </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard-crypto.html" className="nav-link" data-key="t-crypto"> Crypto </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard-projects.html" className="nav-link" data-key="t-projects"> Projects </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard-nft.html" className="nav-link" data-key="t-nft"> NFT</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard-job.html" className="nav-link" data-key="t-job">Job</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
                                    <i className="ri-apps-2-line"></i> <span data-key="t-apps">Apps</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarApps">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="apps-chat.html" className="nav-link" data-key="t-chat"> Chat </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarEmail" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">
                                                Email
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarEmail">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-mailbox.html" className="nav-link" data-key="t-mailbox"> Mailbox </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#sidebaremailTemplates" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebaremailTemplates" data-key="t-email-templates">
                                                            Email Templates
                                                        </a>
                                                        <div className="collapse menu-dropdown" id="sidebaremailTemplates">
                                                            <ul className="nav nav-sm flex-column">
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-email-basic.html" className="nav-link" data-key="t-basic-action"> Basic Action </NavLink>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-email-ecommerce.html" className="nav-link" data-key="t-ecommerce-action"> Ecommerce Action </NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarEcommerce" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEcommerce" data-key="t-ecommerce">
                                                Ecommerce
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarEcommerce">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-products.html" className="nav-link" data-key="t-products"> Products </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-product-details.html" className="nav-link" data-key="t-product-Details"> Product Details </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-add-product.html" className="nav-link" data-key="t-create-product"> Create Product </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-orders.html" className="nav-link" data-key="t-orders">
                                                            Orders </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-order-details.html" className="nav-link" data-key="t-order-details"> Order Details </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-customers.html" className="nav-link" data-key="t-customers"> Customers </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-cart.html" className="nav-link" data-key="t-shopping-cart"> Shopping Cart </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-checkout.html" className="nav-link" data-key="t-checkout"> Checkout </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-sellers.html" className="nav-link" data-key="t-sellers">
                                                            Sellers </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-ecommerce-seller-details.html" className="nav-link" data-key="t-sellers-details"> Seller Details </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarProjects" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProjects" data-key="t-projects">
                                                Projects
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarProjects">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-projects-list.html" className="nav-link" data-key="t-list"> List
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-projects-overview.html" className="nav-link" data-key="t-overview"> Overview </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-projects-create.html" className="nav-link" data-key="t-create-project"> Create Project </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a threfo="#sidebarTasks" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTasks" data-key="t-tasks"> Tasks
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarTasks">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-tasks-kanban.html" className="nav-link" data-key="t-kanbanboard">
                                                            Kanban Board </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-tasks-list-view.html" className="nav-link" data-key="t-list-view">
                                                            List View </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-tasks-details.html" className="nav-link" data-key="t-task-details"> Task Details </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarCRM" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCRM" data-key="t-crm"> CRM
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarCRM">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crm-contacts.html" className="nav-link" data-key="t-contacts">
                                                            Contacts </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crm-companies.html" className="nav-link" data-key="t-companies">
                                                            Companies </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crm-deals.html" className="nav-link" data-key="t-deals"> Deals
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crm-leads.html" className="nav-link" data-key="t-leads"> Leads
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarCrypto" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrypto" data-key="t-crypto"> Crypto
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarCrypto">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-transactions.html" className="nav-link" data-key="t-transactions"> Transactions </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-buy-sell.html" className="nav-link" data-key="t-buy-sell">
                                                            Buy & Sell </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-orders.html" className="nav-link" data-key="t-orders">
                                                            Orders </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-wallet.html" className="nav-link" data-key="t-my-wallet">
                                                            My Wallet </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-ico.html" className="nav-link" data-key="t-ico-list"> ICO
                                                            List </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-crypto-kyc.html" className="nav-link" data-key="t-kyc-application"> KYC Application </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarInvoices" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInvoices" data-key="t-invoices">
                                                Invoices
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarInvoices">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-invoices-list.html" className="nav-link" data-key="t-list-view">
                                                            List View </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-invoices-details.html" className="nav-link" data-key="t-details">
                                                            Details </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-invoices-create.html" className="nav-link" data-key="t-create-invoice"> Create Invoice </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarTickets" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTickets" data-key="t-supprt-tickets">
                                                Support Tickets
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarTickets">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-tickets-list.html" className="nav-link" data-key="t-list-view">
                                                            List View </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-tickets-details.html" className="nav-link" data-key="t-ticket-details"> Ticket Details </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarnft" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarnft" data-key="t-nft-marketplace">
                                                NFT Marketplace
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarnft">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-marketplace.html" className="nav-link" data-key="t-marketplace"> Marketplace </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-explore.html" className="nav-link" data-key="t-explore-now"> Explore Now </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-auction.html" className="nav-link" data-key="t-live-auction"> Live Auction </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-item-details.html" className="nav-link" data-key="t-item-details"> Item Details </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-collections.html" className="nav-link" data-key="t-collections"> Collections </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-creators.html" className="nav-link" data-key="t-creators"> Creators </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-ranking.html" className="nav-link" data-key="t-ranking"> Ranking </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-wallet.html" className="nav-link" data-key="t-wallet-connect"> Wallet Connect </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-nft-create.html" className="nav-link" data-key="t-create-nft"> Create NFT </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="apps-file-manager.html" className="nav-link"> <span data-key="t-file-manager">File Manager</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="apps-todo.html" className="nav-link"> <span data-key="t-to-do">To Do</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarjobs" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarjobs" data-key="t-jobs"> Jobs</a>
                                            <div className="collapse menu-dropdown" id="sidebarjobs">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="apps-job-statistics.html" className="nav-link" data-key="t-statistics"> Statistics </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#sidebarJoblists" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarJoblists" data-key="t-job-lists">
                                                            Job Lists
                                                        </a>
                                                        <div className="collapse menu-dropdown" id="sidebarJoblists">
                                                            <ul className="nav nav-sm flex-column">
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-job-lists.html" className="nav-link" data-key="t-list"> List
                                                                    </NavLink>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-job-grid-lists.html" className="nav-link" data-key="t-grid"> Grid </NavLink>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-job-details.html" className="nav-link" data-key="t-overview"> Overview</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#sidebarCandidatelists" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCandidatelists" data-key="t-candidate-lists">
                                                            Candidate Lists
                                                        </a>
                                                        <div className="collapse menu-dropdown" id="sidebarCandidatelists">
                                                            <ul className="nav nav-sm flex-column">
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-job-candidate-lists.html" className="nav-link" data-key="t-list-view"> List View
                                                                    </NavLink>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <NavLink to="apps-job-candidate-grid.html" className="nav-link" data-key="t-grid-view"> Grid View</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-job-application.html" className="nav-link" data-key="t-application"> Application </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-job-new.html" className="nav-link" data-key="t-new-job"> New Job </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-job-companies-lists.html" className="nav-link" data-key="t-companies-list"> Companies List </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="apps-job-categories.html" className="nav-link" data-key="t-job-categories"> Job Categories</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="apps-api-key.html" className="nav-link" data-key="t-api-key">API Key</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                    <i className="ri-layout-3-line"></i> <span data-key="t-layouts">Layouts</span> <span className="badge badge-pill bg-danger" data-key="t-hot">Hot</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarLayouts">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="layouts-horizontal.html" target="_blank" className="nav-link" data-key="t-horizontal">Horizontal</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="layouts-detached.html" target="_blank" className="nav-link" data-key="t-detached">Detached</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="layouts-two-column.html" target="_blank" className="nav-link" data-key="t-two-column">Two Column</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="layouts-vertical-hovered.html" target="_blank" className="nav-link" data-key="t-hovered">Hovered</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-pages">Pages</span></li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <i className="ri-account-circle-line"></i> <span data-key="t-authentication">Authentication</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="#sidebarSignIn" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin"> Sign In
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarSignIn">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-signin-basic.html" className="nav-link" data-key="t-basic"> Basic
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-signin-cover.html" className="nav-link" data-key="t-cover"> Cover
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarSignUp" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignUp" data-key="t-signup"> Sign Up
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarSignUp">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-signup-basic.html" className="nav-link" data-key="t-basic"> Basic
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-signup-cover.html" className="nav-link" data-key="t-cover"> Cover
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#sidebarResetPass" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarResetPass" data-key="t-password-reset">
                                                Password Reset
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarResetPass">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-pass-reset-basic.html" className="nav-link" data-key="t-basic">
                                                            Basic </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-pass-reset-cover.html" className="nav-link" data-key="t-cover">
                                                            Cover </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#sidebarchangePass" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarchangePass" data-key="t-password-create">
                                                Password Create
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarchangePass">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-pass-change-basic.html" className="nav-link" data-key="t-basic">
                                                            Basic </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-pass-change-cover.html" className="nav-link" data-key="t-cover">
                                                            Cover </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#sidebarLockScreen" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLockScreen" data-key="t-lock-screen">
                                                Lock Screen
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarLockScreen">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-lockscreen-basic.html" className="nav-link" data-key="t-basic">
                                                            Basic </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-lockscreen-cover.html" className="nav-link" data-key="t-cover">
                                                            Cover </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#sidebarLogout" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLogout" data-key="t-logout"> Logout
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarLogout">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-logout-basic.html" className="nav-link" data-key="t-basic"> Basic
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-logout-cover.html" className="nav-link" data-key="t-cover"> Cover
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarSuccessMsg" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSuccessMsg" data-key="t-success-message"> Success Message
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarSuccessMsg">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-success-msg-basic.html" className="nav-link" data-key="t-basic">
                                                            Basic </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-success-msg-cover.html" className="nav-link" data-key="t-cover">
                                                            Cover </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarTwoStep" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTwoStep" data-key="t-two-step-verification"> Two Step Verification
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarTwoStep">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-twostep-basic.html" className="nav-link" data-key="t-basic"> Basic
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-twostep-cover.html" className="nav-link" data-key="t-cover"> Cover
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarErrors" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarErrors" data-key="t-errors"> Errors
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarErrors">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="auth-404-basic.html" className="nav-link" data-key="t-404-basic"> 404
                                                            Basic </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-404-cover.html" className="nav-link" data-key="t-404-cover"> 404
                                                            Cover </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-404-alt.html" className="nav-link" data-key="t-404-alt"> 404 Alt
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-500.html" className="nav-link" data-key="t-500"> 500 </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="auth-offline.html" className="nav-link" data-key="t-offline-page"> Offline Page </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                                    <i className="ri-pages-line"></i> <span data-key="t-pages">Pages</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarPages">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="pages-starter.html" className="nav-link" data-key="t-starter"> Starter </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarProfile" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProfile" data-key="t-profile"> Profile
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarProfile">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="pages-profile.html" className="nav-link" data-key="t-simple-page">
                                                            Simple Page </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="pages-profile-settings.html" className="nav-link" data-key="t-settings"> Settings </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-team.html" className="nav-link" data-key="t-team"> Team </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-timeline.html" className="nav-link" data-key="t-timeline"> Timeline </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-faqs.html" className="nav-link" data-key="t-faqs"> FAQs </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-pricing.html" className="nav-link" data-key="t-pricing"> Pricing </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-gallery.html" className="nav-link" data-key="t-gallery"> Gallery </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-maintenance.html" className="nav-link" data-key="t-maintenance"> Maintenance
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-coming-soon.html" className="nav-link" data-key="t-coming-soon"> Coming Soon
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-sitemap.html" className="nav-link" data-key="t-sitemap"> Sitemap </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-search-results.html" className="nav-link" data-key="t-search-results"> Search Results </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-privacy-policy.html" className="nav-link" data-key="t-privacy-policy">Privacy Policy</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="pages-term-conditions.html" className="nav-link" data-key="t-term-conditions">Term & Conditions</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLanding" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLanding">
                                    <i className="ri-rocket-line"></i> <span data-key="t-landing">Landing</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarLanding">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="landing.html" className="nav-link" data-key="t-one-page"> One Page </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="nft-landing.html" className="nav-link" data-key="t-nft-landing"> NFT Landing </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="job-landing.html" className="nav-link" data-key="t-job">Job</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-components">Components</span></li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUI">
                                    <i className="ri-pencil-ruler-2-line"></i> <span data-key="t-base-ui">Base UI</span>
                                </a>
                                <div className="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <NavLink to="ui-alerts.html" className="nav-link" data-key="t-alerts">Alerts</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-badges.html" className="nav-link" data-key="t-badges">Badges</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-buttons.html" className="nav-link" data-key="t-buttons">Buttons</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-colors.html" className="nav-link" data-key="t-colors">Colors</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-cards.html" className="nav-link" data-key="t-cards">Cards</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-carousel.html" className="nav-link" data-key="t-carousel">Carousel</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-dropdowns.html" className="nav-link" data-key="t-dropdowns">Dropdowns</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-grid.html" className="nav-link" data-key="t-grid">Grid</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <NavLink to="ui-images.html" className="nav-link" data-key="t-images">Images</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-tabs.html" className="nav-link" data-key="t-tabs">Tabs</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-accordions.html" className="nav-link" data-key="t-accordion-collapse">Accordion & Collapse</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-modals.html" className="nav-link" data-key="t-modals">Modals</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-offcanvas.html" className="nav-link" data-key="t-offcanvas">Offcanvas</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-placeholders.html" className="nav-link" data-key="t-placeholders">Placeholders</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-progress.html" className="nav-link" data-key="t-progress">Progress</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-notifications.html" className="nav-link" data-key="t-notifications">Notifications</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <NavLink to="ui-media.html" className="nav-link" data-key="t-media-object">Media
                                                        object</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-embed-video.html" className="nav-link" data-key="t-embed-video">Embed
                                                        Video</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-typography.html" className="nav-link" data-key="t-typography">Typography</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-lists.html" className="nav-link" data-key="t-lists">Lists</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-links.html" className="nav-link"><span data-key="t-links">Links</span> <span className="badge badge-pill bg-success" data-key="t-new">New</span></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-general.html" className="nav-link" data-key="t-general">General</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-ribbons.html" className="nav-link" data-key="t-ribbons">Ribbons</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="ui-utilities.html" className="nav-link" data-key="t-utilities">Utilities</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI">
                                    <i className="ri-stack-line"></i> <span data-key="t-advance-ui">Advance UI</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-sweetalerts.html" className="nav-link" data-key="t-sweet-alerts">Sweet
                                                Alerts</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-nestable.html" className="nav-link" data-key="t-nestable-list">Nestable
                                                List</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-scrollbar.html" className="nav-link" data-key="t-scrollbar">Scrollbar</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-animation.html" className="nav-link" data-key="t-animation">Animation</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-tour.html" className="nav-link" data-key="t-tour">Tour</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-swiper.html" className="nav-link" data-key="t-swiper-slider">Swiper
                                                Slider</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-ratings.html" className="nav-link" data-key="t-ratings">Ratings</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-highlight.html" className="nav-link" data-key="t-highlight">Highlight</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="advance-ui-scrollspy.html" className="nav-link" data-key="t-scrollSpy">ScrollSpy</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="widgets.html">
                                    <i className="ri-honour-line"></i> <span data-key="t-widgets">Widgets</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms">
                                    <i className="ri-file-list-3-line"></i> <span data-key="t-forms">Forms</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarForms">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="forms-elements.html" className="nav-link" data-key="t-basic-elements">Basic
                                                Elements</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-select.html" className="nav-link" data-key="t-form-select"> Form Select </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-checkboxs-radios.html" className="nav-link" data-key="t-checkboxs-radios">Checkboxs & Radios</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-pickers.html" className="nav-link" data-key="t-pickers"> Pickers </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-masks.html" className="nav-link" data-key="t-input-masks">Input Masks</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-advanced.html" className="nav-link" data-key="t-advanced">Advanced</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-range-sliders.html" className="nav-link" data-key="t-range-slider"> Range
                                                Slider </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-validation.html" className="nav-link" data-key="t-validation">Validation</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-wizard.html" className="nav-link" data-key="t-wizard">Wizard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-editors.html" className="nav-link" data-key="t-editors">Editors</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-file-uploads.html" className="nav-link" data-key="t-file-uploads">File
                                                Uploads</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-layouts.html" className="nav-link" data-key="t-form-layouts">Form Layouts</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="forms-select2.html" className="nav-link" data-key="t-select2">Select2</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables">
                                    <i className="ri-layout-grid-line"></i> <span data-key="t-tables">Tables</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarTables">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="tables-basic.html" className="nav-link" data-key="t-basic-tables">Basic Tables</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="tables-gridjs.html" className="nav-link" data-key="t-grid-js">Grid Js</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="tables-listjs.html" className="nav-link" data-key="t-list-js">List Js</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="tables-datatables.html" className="nav-link" data-key="t-datatables">Datatables</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                                    <i className="ri-pie-chart-line"></i> <span data-key="t-charts">Charts</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarCharts">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="#sidebarApexcharts" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApexcharts" data-key="t-apexcharts">
                                                Apexcharts
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarApexcharts">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-line.html" className="nav-link" data-key="t-line"> Line
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-area.html" className="nav-link" data-key="t-area"> Area
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-column.html" className="nav-link" data-key="t-column">
                                                            Column </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-bar.html" className="nav-link" data-key="t-bar"> Bar </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-mixed.html" className="nav-link" data-key="t-mixed"> Mixed
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-timeline.html" className="nav-link" data-key="t-timeline">
                                                            Timeline </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-range-area.html" className="nav-link"><span data-key="t-range-area">Range Area</span> <span className="badge badge-pill bg-success" data-key="t-new">New</span></NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-funnel.html" className="nav-link"><span data-key="t-funnel">Funnel</span> <span className="badge badge-pill bg-success" data-key="t-new">New</span></NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-candlestick.html" className="nav-link" data-key="t-candlstick"> Candlstick </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-boxplot.html" className="nav-link" data-key="t-boxplot">
                                                            Boxplot </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-bubble.html" className="nav-link" data-key="t-bubble">
                                                            Bubble </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-scatter.html" className="nav-link" data-key="t-scatter">
                                                            Scatter </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-heatmap.html" className="nav-link" data-key="t-heatmap">
                                                            Heatmap </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-treemap.html" className="nav-link" data-key="t-treemap">
                                                            Treemap </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-pie.html" className="nav-link" data-key="t-pie"> Pie </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-radialbar.html" className="nav-link" data-key="t-radialbar"> Radialbar </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-radar.html" className="nav-link" data-key="t-radar"> Radar
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="charts-apex-polar.html" className="nav-link" data-key="t-polar-area">
                                                            Polar Area </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="charts-chartjs.html" className="nav-link" data-key="t-chartjs"> Chartjs </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="charts-echarts.html" className="nav-link" data-key="t-echarts"> Echarts </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons">
                                    <i className="ri-compasses-2-line"></i> <span data-key="t-icons">Icons</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarIcons">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="icons-remix.html" className="nav-link"><span data-key="t-remix">Remix</span> <span className="badge badge-pill bg-info">v3.6</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="icons-boxicons.html" className="nav-link"><span data-key="t-boxicons">Boxicons</span> <span className="badge badge-pill bg-info">v2.1.4</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="icons-materialdesign.html" className="nav-link"><span data-key="t-material-design">Material Design</span> <span className="badge badge-pill bg-info">v7.2.96</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="icons-lineawesome.html" className="nav-link" data-key="t-line-awesome">Line Awesome</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="icons-feather.html" className="nav-link"><span data-key="t-feather">Feather</span> <span className="badge badge-pill bg-info">v4.29.1</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="icons-crypto.html" className="nav-link"> <span data-key="t-crypto-svg">Crypto SVG</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps">
                                    <i className="ri-map-pin-line"></i> <span data-key="t-maps">Maps</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarMaps">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <NavLink to="maps-google.html" className="nav-link" data-key="t-google">
                                                Google
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="maps-vector.html" className="nav-link" data-key="t-vector">
                                                Vector
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="maps-leaflet.html" className="nav-link" data-key="t-leaflet">
                                                Leaflet
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMultilevel">
                                    <i className="ri-share-line"></i> <span data-key="t-multi-level">Multi Level</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarMultilevel">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarAccount" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2"> Level
                                                1.2
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarAccount">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link" data-key="t-level-2.1"> Level 2.1 </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a to="#sidebarCrm" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2"> Level 2.2
                                                        </a>
                                                        <div className="collapse menu-dropdown" id="sidebarCrm">
                                                            <ul className="nav nav-sm flex-column">
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link" data-key="t-level-3.1"> Level 3.1
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link" data-key="t-level-3.2"> Level 3.2
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link menu-link" to="/auth/login">
                                    Login
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link menu-link" to="/auth/login">
                                    <i className="ri-login-box-line"></i> <span data-key="t-widgets">Login</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="sidebar-background"></div>
            </div>
        
            <div className="vertical-overlay"></div>
        </div>
    )
}
