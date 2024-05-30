import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get('/api/profile');
            setUser(response.data);
        } catch (err) {
            console.error(err);
        }
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    // Check the user's role to determine which dashboard to render
    if (user.role === 'admin') {
        return <AdminDashboard />;
    } else {
        return <Profile />;
    }
    };

    export default Dashboard;
