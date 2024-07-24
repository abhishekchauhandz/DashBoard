import React from 'react';

const TopSessions = () => {
    return (
        <div className="sessionsContainer">
            <div className="sessionsHeader">
                <h4>Top 5 Session Picks by Users</h4>
                <a href="#" className="seeAll">See All</a>
            </div>
            <table className="sessionsTable">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Service Name</th>
                        <th>Counts</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Soul Healing Workshop</td>
                        <td>62 times</td>
                        <td>500K Rs.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Heal Inner World</td>
                        <td>55 times</td>
                        <td>300K Rs.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Meaning of Life</td>
                        <td>45 times</td>
                        <td>200K Rs.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Stress Relieve Session</td>
                        <td>35 times</td>
                        <td>100K Rs.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Meet on the Screen</td>
                        <td>24 times</td>
                        <td>50K Rs.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TopSessions