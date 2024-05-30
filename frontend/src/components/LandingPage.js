    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import './LandingPage.css';

    function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
        <div className="content">
            <h1>Welcome to Startoon Labs</h1>
            <div className="button-group">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Signup</button>
            </div>
        </div>
        </div>
    );
    }

    export default LandingPage;