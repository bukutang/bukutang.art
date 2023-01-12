# bukutang.art

[![Netlify Status](https://api.netlify.com/api/v1/badges/43cfcda5-386b-4b0b-b991-f11d47538397/deploy-status)](https://app.netlify.com/sites/loving-archimedes-d38be8/deploys)
![Current Nodejs version](http://img.shields.io/badge/node-16.13.0-brightgreen.svg)
[![Uptime Robot status](https://img.shields.io/uptimerobot/status/m789722795-989987eb4e45abfa09f36ca0)](https://bukutang.art/)

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
hexo new <模板> <標題>
```

可用模板請參照 [scaffolds](scaffolds) 資料夾，或是自行在 [Front-matter](https://hexo.io/zh-tw/docs/front-matter) 添加 `categories: <分類>`

#### 直接新增檔案

請到 `source/_posts` 新增，效果相同但要自己套用 Front-matter 資訊。

### Lint

#### 檢查

使用以下指令檢查 Markdown：

Windows：

```
yarn run lint
```

Linux：

```
yarn run test
```

#### 修復

如果支援的話，可以使用快速修復功能。

依照作業系統所使用的檢查指令後方直接加上 `--fix` 的 flag 即可。例如：

```
yarn run lint --fix
```

## 開發

### 注意事項

1. 本專案使用 [shoka 主題](https://github.com/amehime/hexo-theme-shoka) 為基底[加以修改](https://github.com/bukutang/hexo-theme-shoka)，用 submodule 的方式置於 themes/shoka。

### Emoji for Commit

| 文章分類 | Emoji | Github code |
| ---- | ---- | ---- |
| 木雕 | 🪵 | |
| 水晶 | 🔮 | |
| 玉器 | 🪨 | |
| 玉雕 | 🪨 | |
| 其他 | 📛 | |
| 書法 | 🔲 | |
| 國畫 - 山水 | ⛰ | |
| 國畫 - 花鳥 | 🕊 | |
| 國畫 - 人物 | 👤 | |
| 瓷器 | 🍵 | |
| 陶器 | 🏺 | |
| 紫砂 | 🫖 | |
| 銅器 | 🥉 | |
| 篆刻 | 🖆 | |
| 禪繞粉彩 | ⚜ | |

| 類型 | Emoji | Github code |
| ---- | ---- | ---- |
| 合併 | 🥂 | |
| 安裝套件 | ➕ | |
| 移除套件 | ➖ | |
| 套件更新 | ⬆️ | |
| 套件降版 | ⬇️ | |
| 套件釘版 | 📌 | |
| 文件 | 📝 | |

### 需求

1. node 14.18.1 或以上
2. [hexo-cli](https://hexo.io/zh-tw/docs/#%E5%AE%89%E8%A3%9D%E9%9C%80%E6%B1%82) 或使用 [`npx`](https://hexo.io/docs/index.html#Advanced-installation-and-usage)
3. yarn（用 npm 安裝：`npm install -g yarn`）

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
