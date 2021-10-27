# bukutang.art
不孤堂官方網站

## 開發
### 注意事項
1. 本專案使用 [shoka 主題](https://github.com/amehime/hexo-theme-shoka)，以 submodule 的方式置於 themes/shoka。

### 需求
1. node 14.18.1 或以上
2. [hexo-cli](https://hexo.io/zh-tw/docs/#%E5%AE%89%E8%A3%9D%E9%9C%80%E6%B1%82) 或使用 `npx`

### 建置
1. `git clone https://github.com/bukutang/bukutang.art.git --recurse-submodules` 連 submodule 一起初始化
2. `cd bukutang.art`
3. 如果剛剛忘記 submodule 初始化，請下 `git submodule init && git submodule update`
4. `yarn install`
5. `hexo server`

### 更新
一般更新
```
git pull
```

主題更新（⚠ 危險操作！）
```
git pull && git submodule foreach git pull
```
