import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivetRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>;
    }

    return children;
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;