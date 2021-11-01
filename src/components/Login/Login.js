import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {setUser, signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));

    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">google Sign in</button>
        </div>
    );
};

export default Login;