import React from 'react';

const DashboardStats = () => {
    return (
        <div className="statsContainer">
            <div className="statCard">
                <h3>324</h3>
                <p>Appoin. this month</p>
            </div>
            <div className="statCard">
                <h3>22</h3>
                <p>Certified Consultants</p>
            </div>
            <div className="statCard">
                <h3>4000</h3>
                <p>Registered Users</p>
            </div>
            <div className="statCard">
                <h3>40</h3>
                <p>Blog Posts</p>
            </div>
            <div className="statCard">
                <h3>383821 Rs.</h3>
                <p>Earning this Month</p>
            </div>
            <div className="statCard">
                <h3>10.4 M Rs.</h3>
                <p>Total Earning till Now</p>
            </div>
        </div>
    );
};

export default DashboardStats;