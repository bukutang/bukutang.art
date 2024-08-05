@echo on
chcp 65001

call git switch main
call git merge dev -m "🥂 Merge branch 'dev'"
@echo:
@echo Merge dev done, please check before push!
@echo:
@pause
call git push
call git switch -
@pause
