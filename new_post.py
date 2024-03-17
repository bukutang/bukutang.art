#!/usr/bin/env python3


import os


category = []
# 找鷹架全部的分類
scaffolds = os.listdir('scaffolds')
for scaffold in scaffolds:
    category.append(scaffold.replace('.md', ''))

# 顯示
for i, v in enumerate(category):
    print(i, v)
print()

# 選擇分類和輸入新文章的標題
layout = int(input('請輸入要產生的新文章分類編號：'))
title = input("請輸入新文章的標題：")

# 執行指令
os.popen('hexo new {} "{}"'.format(category[layout], title))
