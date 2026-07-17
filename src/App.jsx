import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Builder from "./pages/Builder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<Route
path="/builder"
element={
    <ProtectedRoute>
        <Builder />
    </ProtectedRoute>
}
/>
        <Route 
path="/login" 
element={<Login/>}
/>


<Route 
path="/register" 
element={<Register/>}
/>


<Route 
path="/profile" 
element={<Profile/>}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;