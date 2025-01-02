import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

export default function LoginForm()  {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      const reqInfo ={
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
            uname : userId,
            password:password
        })
      }
      fetch('http://localhost:8080/login',reqInfo)
      .then((res)=>{console.log(res); return res.json()}).then((data)=>{console.log(data)})
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ background: 'linear-gradient(to bottom right, #fef3c7, #e9d5ff)' }}>
            <div className="bg-white p-4 rounded-lg shadow-lg" style={{ width: '24rem', backdropFilter: 'blur(5px)' }}>
                <div className="text-center mb-4">
                    <UserCircle2 className="mb-2" style={{ width: '4rem', height: '4rem', color: '#d97706' }} />
                    <h2 className="h4 text-dark fw-bold">Welcome Back</h2>
                    <p className="text-muted">Sign in to book your darshan</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold text-dark">User ID</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold text-dark">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning w-100"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <p className="text-muted small">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-warning fw-semibold">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

