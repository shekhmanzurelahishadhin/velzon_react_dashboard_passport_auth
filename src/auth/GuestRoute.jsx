// src/routes/GuestRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';


const GuestRoute = ({ children }) => {
    const { user, authLoading } = useAuth();
    if (authLoading) {
        return <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>;
    }
    return !user ? children : <Navigate to="/" replace />;
};

export default GuestRoute;
