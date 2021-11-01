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
        <div  className="container">
            <div style={{margin:'0 auto'}}>
            <h2 className="text-center mt-5">Please Login</h2>
            <button style={{marginLeft:"45%", marginBottom:"30px",marginTop:"20px"}} onClick={handleGoogleLogin} className="btn btn-primary">google Sign in</button>
            </div>
        </div>
    );
};

export default Login;