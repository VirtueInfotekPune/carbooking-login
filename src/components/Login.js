import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const emailToCheck = 'vedant@gmail.com'; // Email from the available data
    const passwordToCheck = 'test1234';   // Password from the available data
  
    if (email === emailToCheck && password === passwordToCheck) {
      // Successful login, navigate to the admin site
      window.location.href = 'https://newcarbooking.vercel.app';
    } else {
      // Show an alert for incorrect email or password
      alert('Incorrect email or password. Please try again.');
    }
  }
  

  return (
    <>
    {/* <h1 className='heading-admin'>Welcome To Admin Dashboard</h1>
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div> */}


<div className="flex justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 h-3/4 mt-28">
          <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-teal-600" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Admin Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <div className="mt-4">
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-teal-500 rounded-lg hover:bg-teal-700 transition duration-200"
                >
                  LogIn
                </button>
              </div>
            </div>
          </form>
          {/* <div className="mt-6 text-grey-dark">
            <span className="mr-2">Don't have an account?</span>
            <Link to='/register' className="text-teal-600 hover:underline font-bold">
              Register
            </Link>
          </div> */}
        </div>
      </div>

    </>
  );
}

export default Login;
