import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Analytics.css";

const userGrowthData = [
    { month: "Jan", users: 500 },
    { month: "Feb", users: 900 },
    { month: "Mar", users: 1500 },
    { month: "Apr", users: 2000 },
    { month: "May", users: 2500 },
    { month: "Jun", users: 3000 },
];

const flaggedContentData = [
    { month: "Jan", flagged: 50 },
    { month: "Feb", flagged: 120 },
    { month: "Mar", flagged: 200 },
    { month: "Apr", flagged: 260 },
    { month: "May", flagged: 310 },
    { month: "Jun", flagged: 380 },
];

const Analytics = () => {
    return (
        <div className="analytics-container">
           

            {/* Main Content */}
            <div className="main-content-area">
                <div className="analytics-box">
                    <h2 className="analytics-title">📊 Analytics Overview</h2>

                    {/* Charts Section */}
                    <div className="chart-section">
                        {/* User Growth Chart */}
                        <div className="chart-container">
                            <h3 className="chart-title">User Growth</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={userGrowthData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Flagged Content Chart */}
                        <div className="chart-container">
                            <h3 className="chart-title">Flagged Content</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={flaggedContentData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="flagged" fill="#ff4d4d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
