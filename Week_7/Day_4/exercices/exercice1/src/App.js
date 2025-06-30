import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile Screen</h1>;
const ShopScreen = () => {
  throw new Error("Something broke in the shop!");
};

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-light p-3">
        <div className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active bg-primary text-white" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active bg-primary text-white" : "nav-link"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active bg-primary text-white" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
