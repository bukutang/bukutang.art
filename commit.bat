@echo off

@REM 變更編碼為 UTF-8
chcp 65001

echo:

set /P msg=請輸入變更紀錄：

git add .
git commit -m "%msg%"

@pause
