# bukutang.art
不孤堂官方網站

## 常用指令
### Local server
```
hexo server
```
預設在 http://localhost:4000

### 新增文章
#### 指令
```
hexo new <模板> <title>
```
1. 檔名建議使用英文（同時作為網址），內文再改用中文。
2. 可用模板請參照 [scaffolds](scaffolds) 資料夾，或是自行在 Front-matter 添加 `categories: <分類>`

#### 直接新增檔案
請到 `source/_posts` 新增，效果相同但要自己套用 Front-matter 資訊。

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

主題更新（危險操作！）
```
git pull && git submodule foreach git pull
```

## 注意 ⚠
由於主題不好客製化，要修改原始主題，因此專案目前所採用的主題是 fork 的，並請注意下列要點，未說明部分請至 repo 看 commit message：

> https://github.com/bukutang/hexo-theme-shoka

* 首頁橫幅修改為一張圖，路徑 [`themes\shoka\layout\_partials\layout.njk` 第 51 行](https://github.com/bukutang/hexo-theme-shoka/blob/bukutang/layout/_partials/layout.njk#L51)
