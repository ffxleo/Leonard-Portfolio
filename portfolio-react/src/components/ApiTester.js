import React, { useState } from 'react';
import './ApiTester.css';

function ApiTester() {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [instanceStarting, setInstanceStarting] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [logs, setLogs] = useState([]);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const API_BASE_URL = 'https://leonard-portfolio.onrender.com/api';

  const startInstance = async () => {
    setInstanceStarting(true);
    setLoading(true);
    setError(null);
    setCountdown(60);
    setResponse(null);
    setLogs([]);
    
    // Add initial log
    const addLog = (message) => {
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
    };
    
    addLog('🚀 Initiating server startup...');
    addLog('📡 Sending wake-up request to Render.com');
    
    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Simulate startup logs
    setTimeout(() => addLog('🔧 Allocating server resources...'), 2000);
    setTimeout(() => addLog('📦 Loading Docker container...'), 5000);
    setTimeout(() => addLog('☕ Starting Java Virtual Machine...'), 10000);
    setTimeout(() => addLog('🌱 Initializing Spring Boot application...'), 15000);
    setTimeout(() => addLog('🔐 Configuring security and JWT...'), 20000);
    setTimeout(() => addLog('🗄️ Setting up data services...'), 25000);
    setTimeout(() => addLog('🌐 Starting web server on port 8080...'), 30000);
    setTimeout(() => addLog('⏳ Waiting for health check...'), 35000);
    
    // Try to wake up the server
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        addLog('✅ Server is ready!');
        addLog('🎉 Instance started successfully');
        setResponse(data);
        setInstanceStarting(false);
        setLoading(false);
        clearInterval(countdownInterval);
      }
    } catch (err) {
      addLog('⚠️ Server still starting, please wait...');
      // Server might still be starting, keep waiting
      setTimeout(() => {
        addLog('⏱️ Startup timeout reached');
        addLog('💡 Try clicking "Login" to test connection');
        setInstanceStarting(false);
        setLoading(false);
        clearInterval(countdownInterval);
      }, 60000);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password: 'admin123' })
      });
      
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setResponse(data);
        if (data.token) {
          setToken(data.token);
        }
      } else {
        const text = await res.text();
        setError(`Server returned non-JSON response: ${text.substring(0, 200)}`);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const sendOtp = async () => {
    if (!email) {
      setError('Please enter an email address');
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      setResponse(data);
      if (data.otp) {
        setGeneratedOtp(data.otp);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    if (!email || !otp) {
      setError('Please enter email and OTP');
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      
      const data = await res.json();
      setResponse(data);
      if (data.token) {
        setToken(data.token);
        setShowOtpForm(false);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const testEndpoint = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setResponse(data);
      } else {
        const text = await res.text();
        setError(`Server returned non-JSON response: ${text.substring(0, 200)}`);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="api-tester">
      <h3 className="api-title">Java Spring Boot REST API</h3>
      <p className="api-subtitle">Live Interactive API Testing</p>
      
      <div className="api-info">
        <p className="api-url">Base URL: <code>{API_BASE_URL}</code></p>
        {token && (
          <p className="token-status">✓ Authenticated</p>
        )}
      </div>

      <div className="api-buttons">
        <button onClick={startInstance} disabled={loading || instanceStarting} className="api-btn start-btn">
          {instanceStarting ? `Starting... ${countdown}s` : 'Start Instance'}
        </button>
        <button onClick={testLogin} disabled={loading || instanceStarting} className="api-btn login-btn">
          Login (Username/Password)
        </button>
        <button onClick={() => setShowOtpForm(!showOtpForm)} disabled={loading || instanceStarting} className="api-btn otp-btn">
          {showOtpForm ? 'Hide OTP Form' : 'Login with OTP'}
        </button>
        <button onClick={() => testEndpoint('/portfolio/person')} disabled={loading || !token || instanceStarting} className="api-btn">
          Get Person
        </button>
        <button onClick={() => testEndpoint('/portfolio/work-experience')} disabled={loading || !token || instanceStarting} className="api-btn">
          Get Work Experience
        </button>
        <button onClick={() => testEndpoint('/portfolio/education')} disabled={loading || !token || instanceStarting} className="api-btn">
          Get Education
        </button>
        <button onClick={() => testEndpoint('/portfolio/skills')} disabled={loading || !token || instanceStarting} className="api-btn">
          Get Skills
        </button>
        <button onClick={() => testEndpoint('/portfolio/projects')} disabled={loading || !token || instanceStarting} className="api-btn">
          Get Projects
        </button>
      </div>

      {showOtpForm && (
        <div className="otp-form">
          <h4 className="otp-form-title">🔐 OTP Authentication Demo</h4>
          <div className="form-group">
            <label>Email Address:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
            />
            <button onClick={sendOtp} disabled={loading} className="form-btn">
              Send OTP
            </button>
          </div>
          
          {generatedOtp && (
            <div className="otp-display">
              <p className="otp-note">📧 OTP sent! (Demo mode - OTP shown below)</p>
              <p className="otp-code">Your OTP: <strong>{generatedOtp}</strong></p>
            </div>
          )}
          
          <div className="form-group">
            <label>Enter OTP:</label>
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength="6"
              className="form-input"
            />
            <button onClick={verifyOtp} disabled={loading} className="form-btn verify-btn">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {loading && !instanceStarting && (
        <div className="loading">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      )}
      
      {instanceStarting && (
        <div className="instance-starting">
          <div className="spinner-large"></div>
          <p className="starting-message">Starting server instance...</p>
          <p className="starting-info">Free tier servers spin down after inactivity. Estimated time: ~{countdown} seconds</p>
          
          {logs.length > 0 && (
            <div className="startup-logs">
              <div className="logs-header">📋 Startup Logs</div>
              <div className="logs-content">
                {logs.map((log, index) => (
                  <div key={index} className="log-entry">{log}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {error && (
        <div className="error-box">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="response-box">
          <div className="response-header">
            <span>Response:</span>
            <button onClick={() => setResponse(null)} className="clear-btn">Clear</button>
          </div>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      <div className="api-tech">
        <span className="tech-badge">Java 17</span>
        <span className="tech-badge">Spring Boot 3.2</span>
        <span className="tech-badge">JWT Auth</span>
        <span className="tech-badge">REST API</span>
        <span className="tech-badge">Maven</span>
      </div>
    </div>
  );
}

export default ApiTester;
