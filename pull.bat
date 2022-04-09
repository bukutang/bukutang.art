@echo off

git pull --rebase
git submodule update --init

@pause

yarn install --frozen-lockfile

@pause
