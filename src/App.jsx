import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Your Auth context
import Login from './pages/login/Login';
import HomeRoute from './routes/homeRoute';

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <AuthProvider> {/* Now your AuthProvider is inside the Router */}
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Route */}
          <Route path="/home" element={<HomeRoute />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
