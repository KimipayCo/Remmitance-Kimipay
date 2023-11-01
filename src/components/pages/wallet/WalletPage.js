import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SendFunds from "./pages/SendFunds";
import TransactionHistory from "./pages/TransactionHistory";
import ExchangeRates from "./pages/ExchangeRates";
import FeesAndTariffs from "./pages/FeesAndTariffs";
import Sidebar from './Sidebar';

const WalletPage = () => {
    return (
        <div className="page-background">
            <Sidebar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sendFunds" element={<SendFunds />} />
                <Route path="/transactionHistory" element={<TransactionHistory />} />
                <Route path="/exchangeRates" element={<ExchangeRates />} />
                <Route path="/feesAndTariffs" element={<FeesAndTariffs />} />
            </Routes>
        </div>
    );
};

export default WalletPage;