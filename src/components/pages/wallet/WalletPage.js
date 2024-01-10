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
                <Route path="/username/dashboard" element={<Dashboard />} />
                <Route path="/username/sendFunds" element={<SendFunds />} />
                <Route path="/username/transactionHistory" element={<TransactionHistory />} />
                <Route path="/username/exchangeRates" element={<ExchangeRates />} />
                <Route path="/username/feesAndTariffs" element={<FeesAndTariffs />} />
            </Routes>
        </div>
    );
};

export default WalletPage;