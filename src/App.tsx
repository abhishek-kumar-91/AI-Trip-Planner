import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import DashboardLayout from "./pages/DashboardLayout";
import { useAuth, SignIn, SignUp } from "@clerk/clerk-react";
import HeaderComponent from "./components/HeaderComponent";
import NotFoundPage from "./pages/NotFoundPage";
import NewTrip from "./pages/NewTrip";
import YourTrip from "./pages/YourTrip";

function App() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderComponent />
      <Routes>
        {/* Public or Redirect routes */}
        <Route
          path="/"
          element={isSignedIn ? <Navigate to="/dashboard" replace /> : <WelcomePage />}
        />
        <Route
          path="/sign-in"
          element={isSignedIn ? <Navigate to="/dashboard" replace /> : <div className="justify-center flex items-center h-screen"><SignIn /></div>}
        />
        <Route
          path="/sign-up"
          element={isSignedIn ? <Navigate to="/dashboard" replace /> : <div className="justify-center flex items-center h-screen"> <SignUp /></div>}
        />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard/*"
          element={isSignedIn ? <DashboardLayout /> : <Navigate to="/" replace />}
        />

        <Route
          path="/new-trip"
          element={isSignedIn ? <NewTrip /> : <Navigate to="/" replace />}
        />
        <Route
          path="/your-trip"
          element={isSignedIn ? <YourTrip /> : <Navigate to="/" replace />}
        />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
