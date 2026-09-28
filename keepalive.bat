@echo off
REM selfhost/keepalive_win.bat — watchdog giu RabitSpa self-host chay lien tuc.
REM Chay run.bat; neu thoat (crash), tu khoi dong lai sau vai giay.
REM CHUA duoc test tren Windows that (xem canh bao dau run.bat).
REM Dung han: dong cua so nay.

setlocal EnableDelayedExpansion

SET SCRIPT_DIR=%~dp0
SET RUN=%SCRIPT_DIR%run.bat
SET DELAY=5
SET MIN_UP=15
SET MAX_FAST=5
SET COOLDOWN=60
SET FAST=0

echo [keepalive] Giam sat RabitSpa self-host. Dong cua so de dung han.
:loop
SET START=!TIME!
echo [keepalive] !TIME! khoi dong...
call "%RUN%"

call :elapsed "!START!" "!TIME!" UP

IF !UP! LSS %MIN_UP% (
    SET /A FAST+=1
    echo [keepalive] Thoat nhanh ^(~!UP!s^), lan thu !FAST!.
    IF !FAST! GEQ %MAX_FAST% (
        echo [keepalive] Crash lien tuc — nghi %COOLDOWN%s.
        timeout /t %COOLDOWN% /nobreak >nul
        SET FAST=0
    ) ELSE (
        timeout /t %DELAY% /nobreak >nul
    )
) ELSE (
    SET FAST=0
    echo [keepalive] Thoat — khoi dong lai sau %DELAY%s.
    timeout /t %DELAY% /nobreak >nul
)
GOTO :loop

:elapsed
FOR /F "tokens=1-3 delims=:." %%a IN ("%~1") DO SET /A S=%%a*3600+%%b*60+%%c 2>nul
FOR /F "tokens=1-3 delims=:." %%a IN ("%~2") DO SET /A E=%%a*3600+%%b*60+%%c 2>nul
SET /A D=E-S
IF !D! LSS 0 SET /A D+=86400
SET %3=!D!
GOTO :eof
