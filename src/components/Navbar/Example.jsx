import React from "react";
import { BrowserRouter as Router,Routes,Route,Link,Outlet,} from 
"react-router-dom";

const Route = () => {
    function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="profile">Profile</Link>
          <Link to="settings">Settings</Link>
        </nav>
        <Outlet />
      </div>
    );
  }
};
export default Route;
