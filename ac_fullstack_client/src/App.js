import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerPage from "./screens/Customer/CustomerPage";
import ProgramPage from "./screens/Program/ProgramPage";
import OrderPage from "./screens/Order/OrderPage";
import HomePage from "./screens/HomePage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/program" element={<ProgramPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/" element={<HomePage />} />







            </Routes>
        </BrowserRouter>
    );
};

export default App;