import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({ children }) => {
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
    return user ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
