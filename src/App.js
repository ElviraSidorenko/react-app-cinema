import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Upcoming from "./pages/upcoming";
import Cafe from "./pages/cafe";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/cafe" element={<Cafe />} />
                <Route
                    path="/booking"
                    element={<Booking />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;
