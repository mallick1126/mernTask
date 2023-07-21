import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import FetchUsers from "./FetchUsers";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              {/* Use Link to create a button for "Create User" */}
              <Link to="/create-user">
                <button>Create User</button>
              </Link>
            </li>
            <li>
              {/* Use Link to create a button for "Fetch Users" */}
              <Link to="/fetch-users">
                <button>Fetch Users</button>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/fetch-users" element={<FetchUsers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
