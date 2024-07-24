import React from 'react';

const RecentTickets = () => {
    return (
        <div className="ticketsContainer">
            <div className="ticketsHeader">
                <h4>Recent Tickets</h4>
                <a href="#" className="seeAll">See All</a>
            </div>
            <div className="ticket">
                <img src="/assets/avatar.jpg" alt="Rashmi Sharma" className="avatar" />
                <div>
                    <p><strong>Rashmi Sharma</strong> ~ My Payment Done Appointment Cancelled by Doctor</p>
                    <p className="ticketTime">11:25AM, June 28, 2024</p>
                    <p>I booked a Session with Doctor Sushmita Singh but she cancelled it just before the session timing starts.</p>
                </div>
            </div>
            <div className="ticket">
                <img src="/assets/avatar.jpg" alt="Rashmi Sharma" className="avatar" />
                <div>
                    <p><strong>Rashmi Sharma</strong> ~ My Payment Done Appointment Cancelled by Doctor</p>
                    <p className="ticketTime">11:25AM, June 28, 2024</p>
                    <p>I booked a Session with Doctor Sushmita Singh but she cancelled it just before the session timing starts.</p>
                </div>
            </div>
            {/* Add more tickets as needed */}
        </div>
    );
};

export default RecentTickets;