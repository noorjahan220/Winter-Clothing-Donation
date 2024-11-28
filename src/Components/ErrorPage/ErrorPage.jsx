import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorPage = () => {
    const navigate = useNavigate();

   
    const goHome = () => {
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f0f0f0' }}>
            <DotLottieReact
                src="https://lottie.host/db927a33-b60b-4974-9676-b80357693d54/0fFomuWfgj.lottie"
                loop
                autoplay
            />
            <h2 style={{ marginTop: '20px', color: '#ff4d4d' }}>Oops! Page Not Found.</h2>
            <p>The page you're looking for doesn't exist.</p>
            <button
                onClick={goHome}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
