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
  const [lastRequest, setLastRequest] = useState(null);

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
    
    addLog('🚀 Waking up server...');
    addLog('📡 Sending request to Render.com');
    
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
    
    // Function to fetch real logs from server
    const fetchServerLogs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/logs`);
        if (res.ok) {
          const data = await res.json();
          if (data.logs && data.logs.length > 0) {
            setLogs(data.logs);
          }
        }
      } catch (err) {
        // Server not ready yet
      }
    };
    
    // Poll for logs every 2 seconds
    const logInterval = setInterval(fetchServerLogs, 2000);
    
    // Try to wake up the server
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        
        // Fetch final logs
        await fetchServerLogs();
        
        addLog('✅ Server is ready!');
        addLog('🎉 Instance started successfully');
        setResponse(data);
        setInstanceStarting(false);
        setLoading(false);
        clearInterval(countdownInterval);
        clearInterval(logInterval);
      }
    } catch (err) {
      addLog('⚠️ Server still starting, please wait...');
      // Server might still be starting, keep waiting
      setTimeout(async () => {
        try {
          await fetchServerLogs();
          addLog('✅ Server ready!');
        } catch (e) {
          addLog('⏱️ Startup timeout reached');
          addLog('💡 Try clicking "Login" to test connection');
        }
        setInstanceStarting(false);
        setLoading(false);
        clearInterval(countdownInterval);
        clearInterval(logInterval);
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

  const testEndpoint = async (endpoint) => {
    setLoading(true);
    setError(null);
    
    // Store request details
    const requestDetails = {
      method: 'GET',
      url: `${API_BASE_URL}${endpoint}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    setLastRequest(requestDetails);
    
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
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };
  
  const copyPostmanRequest = () => {
    if (!lastRequest) return;
    
    const postmanFormat = `${lastRequest.method} ${lastRequest.url}
Headers:
Authorization: Bearer ${token}
Content-Type: application/json`;
    
    copyToClipboard(postmanFormat);
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

      {/* Token Input Field */}
      <div className="token-input-section">
        <label htmlFor="token-input" className="token-label">
          JWT Token (Edit to test invalid tokens):
        </label>
        <div className="token-input-wrapper">
          <input
            id="token-input"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Login to get token or paste your own token here..."
            className="token-input"
          />
          {token && (
            <button 
              onClick={() => setToken('')} 
              className="clear-token-btn"
              title="Clear token"
            >
              ✕
            </button>
          )}
        </div>
        <p className="token-hint">
          💡 Tip: Modify the token to test authentication errors (401 Unauthorized)
        </p>
      </div>

      <div className="api-buttons">
        <button onClick={startInstance} disabled={loading || instanceStarting} className="api-btn start-btn">
          {instanceStarting ? `Starting... ${countdown}s` : 'Start Instance'}
        </button>
        <button onClick={testLogin} disabled={loading || instanceStarting} className="api-btn login-btn">
          Login (Get Token)
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

      {lastRequest && (
        <div className="request-details-box">
          <div className="request-header">
            <span>📤 Request Details</span>
            <button onClick={copyPostmanRequest} className="copy-btn" title="Copy for Postman">
              📋 Copy for Postman
            </button>
          </div>
          <div className="request-content">
            <div className="request-line">
              <span className="request-label">Method:</span>
              <code className="request-value">{lastRequest.method}</code>
            </div>
            <div className="request-line">
              <span className="request-label">URL:</span>
              <code className="request-value">{lastRequest.url}</code>
            </div>
            <div className="request-line">
              <span className="request-label">Authorization:</span>
              <code className="request-value">Bearer {token.substring(0, 20)}...{token.substring(token.length - 10)}</code>
            </div>
            <div className="request-line">
              <span className="request-label">Content-Type:</span>
              <code className="request-value">application/json</code>
            </div>
          </div>
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
        <span className="tech-badge">Docker</span>
      </div>
    </div>
  );
}

export default ApiTester;
