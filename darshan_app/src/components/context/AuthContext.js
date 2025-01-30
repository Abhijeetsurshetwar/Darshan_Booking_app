// import React from 'react';
// //import { useAuth } from './AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const LoginForm = () => {
//     const { login } = useAuth();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       login(); // Call the login function from context
//     };
  
//     return (
//       <form onSubmit={handleSubmit} className="p-4">
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input type="text" className="form-control" id="username" required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" required />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     );
//   };
// export default LoginForm;



import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) { 
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}