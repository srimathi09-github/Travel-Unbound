import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import CreateTrip from "./pages/CreateTrip";
import TripPlan from "./pages/TripPlan";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/destinations"
            element={<Destinations />}
          />

          <Route
            path="/destinations/:id"
            element={<DestinationDetails />}
          />

          <Route
            path="/create-trip"
            element={<CreateTrip />}
          />

          <Route
            path="/trip-plan"
            element={<TripPlan />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;