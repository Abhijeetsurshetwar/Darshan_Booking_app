
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Login } from './Redux/Slice';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const reqInfo = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userId,
                password: password,
            }),
        };

        try {
            const response = await fetch('http://localhost:8060/authenticate/login', reqInfo);

            if (!response.ok) {
                throw new Error('Invalid credentials or server error.');
            }

            const data = await response.json();

            if (data?.username && data?.roles && data?.token) {
                console.log(data);

                // Dispatch the token and user info to Redux
                dispatch(Login({
                    uname: data.username,
                    email: data.email,
                    roles: data.roles,
                    token: data.token,  // Store JWT token in Redux
                    refreshToken: data.refreshToken
                }));

                // Navigate based on role
                if (data.roles.includes('ROLE_ADMIN')) {
                    navigate('/admin/dashboard');
                } else if (data.roles.includes('Owner')) {
                    navigate('/owner');
                } else {
                    navigate('/home');
                }
            } else {
                throw new Error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login Error:', error.message);
            alert(error.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div
                className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
                style={{ background: 'linear-gradient(to bottom right, #fef3c7, #e9d5ff)' }}
            >
                <div
                    className="bg-white p-4 rounded-lg shadow-lg"
                    style={{ width: '24rem', backdropFilter: 'blur(5px)' }}
                >
                    <div className="text-center mb-4">
                        <UserCircle2
                            className="mb-2"
                            style={{ width: '4rem', height: '4rem', color: '#d97706' }}
                        />
                        <h2 className="h4 text-dark fw-bold">Welcome Back</h2>
                        <p className="text-muted">Sign in to book your darshan</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label fw-semibold text-dark">
                                User ID
                            </label>
                            <input
                                id="userId"
                                type="text"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                className="form-control"
                                required
                                aria-describedby="userIdHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold text-dark">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                                aria-describedby="passwordHelp"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-3 text-center">
                        <p className="text-muted small">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-warning fw-semibold">
                                Register here
                            </Link>
                        </p>
                        <p className="text-muted small">
                            {' '}
                            <Link to="/mainpage" className="text-warning fw-semibold">
                                Back To Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
