import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './dashboard.css';

const generateRandomUser = () => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const genders = ["male", "female", "other"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomEmail = `${randomName.toLowerCase()}@example.com`;
  const randomCount = Math.floor(Math.random() * 100);
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  const randomLastLoginDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();

  return {
    name: randomName,
    email: randomEmail,
    count: randomCount,
    gender: randomGender,
    lastLoginDate: randomLastLoginDate,
  };
};

const generateRandomUserCount = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      date: new Date(Date.now() - i * 1000000000).toISOString().split('T')[0],
      count: Math.floor(Math.random() * 100),
    });
  }
  return data.reverse();
};

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [view, setView] = useState('home');

  useEffect(() => {
    const fetchData = () => {
      const randomUsers = Array.from({ length: 15 }, generateRandomUser); // Generate 15 users
      const randomUserCount = generateRandomUserCount();

      setUsers(randomUsers);
      setUserCount(randomUserCount);
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="buttons-container">
          <button onClick={() => setView('home')} className={view === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => setView('graph')} className={view === 'graph' ? 'active' : ''}>Graph</button>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>

      <div className="dashboard-content">
        {view === 'home' ? (
          <table className="user-table">
            <thead>
              <tr className="table-header">
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Count</th>
                <th>Last Login Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.count}</td>
                  <td>{new Date(user.lastLoginDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="graph-container">
            <LineChart width={800} height={400} data={userCount}>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;