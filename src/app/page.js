"use client";

import ChartComponent from './components/ChartComponent';
import DashboardStats from './components/DashboardStats';
import RecentTickets from './components/RecentTickets';
import TopConsultants from './components/TopConsultants';
import TopSessions from './components/Topsessions';
export default function Home() {
    return (
        <div className="dashboard">
            <div className="statsContainer">
                <DashboardStats />
            </div>
            <div className="mainContent">
                <div className="ticketsContainer">
                    <RecentTickets />
                </div>
                <div className="consultantsContainer">
                    <TopConsultants />
                </div>
                <div className="chartContainer">
                    <ChartComponent />
                </div>
                <div className="sessionsContainer">
                    <TopSessions />
                </div>
            </div>
        </div>
    );
}
