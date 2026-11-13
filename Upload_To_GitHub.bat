@echo off
title Upload Portfolio to GitHub
color 0A
cd /d "C:\Users\User\OneDrive\Desktop\portfolio"

echo ==========================================================
echo         CONNECTING & UPLOADING PORTFOLIO TO GITHUB
echo ==========================================================
echo.
echo Repo: https://github.com/fahim6t6/muhammed-fahim-portfolio
echo.
echo If GitHub asks to sign in, click 'Sign in with your browser'
echo.

"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe" push -u origin main

echo.
echo ==========================================================
echo  DONE! Press any key to close this window.
echo ==========================================================
pause
