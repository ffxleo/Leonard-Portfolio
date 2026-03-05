@echo off
echo ========================================
echo Testing Portfolio API
echo ========================================
echo.

echo Testing Health Endpoint...
curl http://localhost:8080/api/health
echo.
echo.

echo Testing Portfolio Data Endpoint...
curl http://localhost:8080/api/portfolio
echo.
echo.

echo ========================================
echo Tests Complete
echo ========================================
pause
