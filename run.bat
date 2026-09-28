@echo off
REM RabitSpa Self-host - RELEASE Windows (ban dong goi, layout phang, tu chua).
REM Sinh boi selfhost/build.sh --target win-x64 - KHONG can Node/pnpm/Postgres
REM cai san (dung node\node.exe dong goi kem neu co; neu khong, fallback node
REM he thong trong PATH).
REM CANH BAO: sinh tu may build macOS, CHUA duoc chay thu tren Windows that.
setlocal EnableDelayedExpansion

SET SELF_DIR=%~dp0
IF "%SELF_DIR:~-1%"=="\" SET SELF_DIR=%SELF_DIR:~0,-1%
cd /d "%SELF_DIR%"

SET BACKEND_PORT=4010
SET WEB_PORT=8895

REM --- Node runtime: uu tien ban dong goi kem, fallback he thong ---
REM --- Bo chay Node: co san > cai tren may > tu tai ve ---
REM Tu tai de ban phat hanh khong phai mang theo tep 127 MB. Chi tai dung mot
REM lan, lan sau dung lai.
SET NODE_VER=22.20.0
SET NODE_BIN=%SELF_DIR%\node\node.exe
IF NOT EXIST "%NODE_BIN%" (
    where node >nul 2>nul
    IF NOT ERRORLEVEL 1 (
        SET NODE_BIN=node
    ) ELSE (
        echo [node] Lan dau chay: dang tai bo chay Node ^(khoang 30 MB, chi mot lan^)...
        powershell -NoProfile -Command "try { $ErrorActionPreference='Stop'; $u='https://nodejs.org/dist/v%NODE_VER%/node-v%NODE_VER%-win-x64.zip'; $z=\"$env:TEMP\rabitspa-node.zip\"; Invoke-WebRequest -Uri $u -OutFile $z -UseBasicParsing; Expand-Archive -Path $z -DestinationPath \"$env:TEMP\rabitspa-node\" -Force; New-Item -ItemType Directory -Force -Path '%SELF_DIR%\node' ^| Out-Null; Copy-Item -Path \"$env:TEMP\rabitspa-node\node-v%NODE_VER%-win-x64\*\" -Destination '%SELF_DIR%\node' -Recurse -Force; Remove-Item $z -Force } catch { exit 1 }"
        IF EXIST "%SELF_DIR%\node\node.exe" (
            SET NODE_BIN=%SELF_DIR%\node\node.exe
            echo [node] Xong.
        ) ELSE (
            echo [LOI] May chua co Node.js va khong tai duoc ve.
            echo.
            echo       Cach xu ly: kiem tra ket noi mang roi chay lai,
            echo       hoac tu cai Node.js ban LTS tai https://nodejs.org roi chay lai.
            pause
            exit /b 1
        )
    )
)

REM --- Machine code - md5^(MAC^) 6 ky tu dau, sinh 1 lan roi co dinh ---
SET CODE_FILE=%SELF_DIR%\.machine-code
IF NOT EXIST "%CODE_FILE%" (
    SET MAC=
    FOR /F "usebackq tokens=1 delims=," %%m IN (`getmac /fo csv /nh 2^>nul`) DO (
        IF NOT DEFINED MAC SET MAC=%%~m
    )
    IF DEFINED MAC (
        >"%TEMP%\rabitspa_mac.txt" ECHO|SET /p="!MAC!"
        SET MD5FULL=
        FOR /F %%h IN ('certutil -hashfile "%TEMP%\rabitspa_mac.txt" MD5 ^| findstr /v "hash CertUtil"') DO (
            IF NOT DEFINED MD5FULL SET MD5FULL=%%h
        )
        SET MACHINE_CODE=!MD5FULL:~0,6!
        DEL /F /Q "%TEMP%\rabitspa_mac.txt" >nul 2>&1
    ) ELSE (
        FOR /F "delims=" %%i IN ('powershell -NoProfile -Command "-join ((97..122+48..57) ^| Get-Random -Count 6 ^| ForEach-Object {[char]$_})"') DO SET MACHINE_CODE=%%i
    )
    >"%CODE_FILE%" ECHO !MACHINE_CODE!
) ELSE (
    SET /P MACHINE_CODE=<"%CODE_FILE%"
)

REM --- Ghep may voi tai khoan tren rabitspa.com ---
REM May nay KHONG mo cong nao ra Internet. Muon truy cap tu ben ngoai, chu cua
REM hang dang nhap tren rabitspa.com, bat link public roi tao mot ma ghep; go
REM ma do vao day MOT LAN la xong.
REM
REM   run.bat --ghep-may   ghep may nay voi cua hang (chi lam mot lan)
REM   run.bat --go-ghep    quen thong tin da ghep tren may nay
IF NOT DEFINED RABITSPA_CLOUD_API SET RABITSPA_CLOUD_API=https://rabitspa.com/api/v1
SET CLOUD_API=%RABITSPA_CLOUD_API%
SET PAIR_FILE=%SELF_DIR%\.pairing.json
SET PAIR_JS=%SELF_DIR%\cloudflared\pairing.js

IF /I "%~1"=="--go-ghep" (
    IF EXIST "%PAIR_FILE%" DEL /F /Q "%PAIR_FILE%" >nul 2>&1
    echo [OK] Da xoa thong tin ghep may tren may nay ^(chi o day, tai khoan khong doi^).
    echo      Muon dung lai link public: run.bat --ghep-may
    pause
    exit /b 0
)
IF /I "%~1"=="--ghep-may" (
    IF NOT EXIST "%PAIR_JS%" (
        echo [LOI] Thieu %PAIR_JS% - ban cai khong day du, hay tai lai.
        pause
        exit /b 1
    )
    echo ====================================
    echo   Ghep may nay voi cua hang cua ban
    echo ====================================
    echo Lam theo 3 buoc:
    echo   1. Mo https://rabitspa.com/login va dang nhap
    echo      ^(chua co tai khoan thi dang ky - dung Google cung duoc^).
    echo   2. Vao muc Link public, bam Bat link, roi bam Tao ma ghep may.
    echo   3. Go ma vua hien ra vao day.
    echo.
    SET /P PAIR_CODE="Ma ghep may: "
    "%NODE_BIN%" "%PAIR_JS%" pair "%CLOUD_API%" "%PAIR_FILE%" "!PAIR_CODE!" "%MACHINE_CODE%" "Windows" "%WEB_PORT%"
    echo.
    echo      Gio chay: run.bat
    pause
    exit /b 0
)

REM --- Secrets JWT ben vung ---
SET SECRETS_FILE=%SELF_DIR%\.secrets.env
IF NOT EXIST "%SECRETS_FILE%" (
    FOR /F "delims=" %%s IN ('powershell -NoProfile -Command "-join ((65..90+97..122+48..57) ^| Get-Random -Count 48 ^| ForEach-Object {[char]$_})"') DO SET S1=%%s
    FOR /F "delims=" %%s IN ('powershell -NoProfile -Command "-join ((65..90+97..122+48..57) ^| Get-Random -Count 48 ^| ForEach-Object {[char]$_})"') DO SET S2=%%s
    FOR /F "delims=" %%s IN ('powershell -NoProfile -Command "-join ((65..90+97..122+48..57) ^| Get-Random -Count 48 ^| ForEach-Object {[char]$_})"') DO SET S3=%%s
    (
        ECHO SH_JWT_ACCESS_SECRET=!S1!
        ECHO SH_JWT_REFRESH_SECRET=!S2!
        ECHO SH_JWT_ADMIN_SECRET=!S3!
    ) > "%SECRETS_FILE%"
)
FOR /F "tokens=1,2 delims==" %%a IN (%SECRETS_FILE%) DO SET %%a=%%b

REM --- 1) Backend - DB da dong goi san (rabitspa.db, co du lieu mau) ---
SET DATABASE_PROVIDER=sqlite
SET DATABASE_URL=file:%SELF_DIR%\backend\rabitspa.db
SET PORT=%BACKEND_PORT%
SET NODE_ENV=selfhost
SET JWT_ACCESS_SECRET=%SH_JWT_ACCESS_SECRET%
SET JWT_REFRESH_SECRET=%SH_JWT_REFRESH_SECRET%
SET JWT_ADMIN_SECRET=%SH_JWT_ADMIN_SECRET%
SET JWT_ACCESS_TTL=15m
SET JWT_REFRESH_TTL=30d
SET JWT_ADMIN_TTL=8h
SET ROOT_DOMAIN=rabitspa.selfhost.invalid
SET DEV_ROOT_DOMAIN=lvh.me

echo [backend] Khoi dong tai cong noi bo %BACKEND_PORT% ...
START "RabitSpa-Backend" /MIN "%NODE_BIN%" "%SELF_DIR%\backend\dist\src\main.js"

SET BACKEND_UP=0
FOR /L %%i IN (1,1,30) DO (
    timeout /t 1 /nobreak >nul
    powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:%BACKEND_PORT%/api/v1/tenants/resolve?subdomain=demo' -TimeoutSec 2).StatusCode | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
    IF NOT ERRORLEVEL 1 (SET BACKEND_UP=1 & GOTO :backend_ready)
)
:backend_ready
IF "%BACKEND_UP%"=="0" (echo [LOI] Backend khong phan hoi sau 30s. & goto :fail)
echo [backend] OK.

REM --- 2) Webclient - Next.js standalone server.js ---
SET PORT=%WEB_PORT%
SET HOSTNAME=0.0.0.0
echo [webclient] Khoi dong tai cong %WEB_PORT% ...
START "RabitSpa-Webclient" /MIN "%NODE_BIN%" "%SELF_DIR%\webclient\server.js"

SET WEB_UP=0
FOR /L %%i IN (1,1,30) DO (
    timeout /t 1 /nobreak >nul
    powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:%WEB_PORT%/login' -TimeoutSec 2).StatusCode | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
    IF NOT ERRORLEVEL 1 (SET WEB_UP=1 & GOTO :web_ready)
)
:web_ready
IF "%WEB_UP%"=="0" (echo [LOI] webclient khong phan hoi sau 30s. & goto :fail)
echo [webclient] OK.

REM --- 3) Link public (chi khi may da duoc ghep voi cua hang) ---
REM Ung dung van chay day du ma khong can phan nay. May khong mo cong nao ra
REM Internet: no tu mo mot ket noi DI RA toi Cloudflare.
SET HAS_TUNNEL=0
SET CF_TOKEN=
SET PUBLIC_HOST=

IF EXIST "%PAIR_FILE%" IF EXIST "%PAIR_JS%" (
    FOR /F "usebackq tokens=1,* delims==" %%a IN (`"%NODE_BIN%" "%PAIR_JS%" sync "%CLOUD_API%" "%PAIR_FILE%" "Windows" 2^>nul`) DO (
        IF "%%a"=="CONNECTOR_TOKEN" SET CF_TOKEN=%%b
        IF "%%a"=="PUBLIC_HOST" SET PUBLIC_HOST=%%b
        IF "%%a"=="OFFLINE" echo [link] Chua lien lac duoc voi rabitspa.com - dung cau hinh da luu.
        IF "%%a"=="REVOKED" echo [link] [!] May nay da bi go khoi cua hang. Chay: run.bat --ghep-may
    )
    IF DEFINED CF_TOKEN SET HAS_TUNNEL=1
)

IF "%HAS_TUNNEL%"=="1" (
    SET CF_BIN=%SELF_DIR%\cloudflared\cloudflared.exe
    IF NOT EXIST "!CF_BIN!" (
        echo [link] Dang tai cong cu ket noi ^(chi lan dau^)...
        powershell -NoProfile -Command "try { Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile '%SELF_DIR%\cloudflared\cloudflared.exe' -UseBasicParsing } catch { }"
    )
    IF EXIST "!CF_BIN!" (
        REM Khong can file cau hinh: moi quy tac dinh tuyen nam san tren
        REM Cloudflare, gan voi chinh token nay.
        echo [link] Dang ket noi...
        START "RabitSpa-Link" /MIN "!CF_BIN!" tunnel --no-autoupdate run --token !CF_TOKEN!
        echo [link] Da khoi dong: https://!PUBLIC_HOST!
    ) ELSE (
        echo [link] [!] Khong tai duoc cong cu ket noi - lan nay chi chay noi bo.
    )
) ELSE (
    IF EXIST "%PAIR_FILE%" (
        echo [link] May da ghep nhung cua hang chua bat link public - dang chay noi bo.
        echo        Bat link tai https://rabitspa.com/login roi chay lai.
    ) ELSE (
        echo [link] Dang chay noi bo ^(chua co dia chi truy cap tu ngoai^).
        echo        Muon mo link public: run.bat --ghep-may
    )
)

echo ====================================
echo   RabitSpa Self-host
echo   Local        : http://localhost:%WEB_PORT%
IF "%HAS_TUNNEL%"=="1" echo   Link public  : https://%PUBLIC_HOST%
echo   Machine code : %MACHINE_CODE%
echo   Dang nhap demo: owner@demo.vn / demo1234
echo   Dong cac cua so RabitSpa-Backend / RabitSpa-Webclient / ^(RabitSpa-Link^) de dung
echo ====================================
pause
goto :eof

:fail
echo.
echo Da dung do loi o tren.
pause
exit /b 1
