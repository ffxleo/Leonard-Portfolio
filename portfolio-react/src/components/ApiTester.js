import React, { useState } from 'react';
import './ApiTester.css';

function ApiTester() {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://leonard-portfolio.onrender.com/api';

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

  const testHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      
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
      <p className="api-subtitle">Live Interactive API Testing (This is free instance will spin down with inactivity, which can delay requests by 50 seconds or more.)</p>
      
      <div className="api-info">
        <p className="api-url">Base URL: <code>{API_BASE_URL}</code></p>
        {token && (
          <p className="token-status">✓ Authenticated</p>
        )}
      </div>

      <div className="api-buttons">
        <button onClick={testHealth} disabled={loading} className="api-btn health-btn">
          Health Check
        </button>
        <button onClick={testLogin} disabled={loading} className="api-btn login-btn">
          Login (Get Token)
        </button>
        <button onClick={() => testEndpoint('/portfolio/person')} disabled={loading || !token} className="api-btn">
          Get Person
        </button>
        <button onClick={() => testEndpoint('/portfolio/work-experience')} disabled={loading || !token} className="api-btn">
          Get Work Experience
        </button>
        <button onClick={() => testEndpoint('/portfolio/education')} disabled={loading || !token} className="api-btn">
          Get Education
        </button>
        <button onClick={() => testEndpoint('/portfolio/skills')} disabled={loading || !token} className="api-btn">
          Get Skills
        </button>
        <button onClick={() => testEndpoint('/portfolio/projects')} disabled={loading || !token} className="api-btn">
          Get Projects
        </button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      
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
