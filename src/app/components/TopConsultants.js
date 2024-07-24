import React from 'react';

const TopConsultants = () => {
    return (
        <div className="consultantsContainer">
            <div className="consultantsHeader">
                <h4>Top 5 Consultants Picks by Users</h4>
                <a href="#" className="seeAll">See All</a>
            </div>
            <table className="consultantsTable">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Therapist Name</th>
                        <th>Times</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dr. Naseem Ahmad</td>
                        <td>45</td>
                        <td><button className="viewBtn"><i className="bi bi-eye"></i></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kanika Jindal</td>
                        <td>35</td>
                        <td><button className="viewBtn"><i className="bi bi-eye"></i></button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default TopConsultants;