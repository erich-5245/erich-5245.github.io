# 洪翊宸 作品集網站

黑底極簡風格的攝影／影像作品集，用 GitHub Pages 免費架設。

## 資料夾結構

```
Eric作品集/
├── index.html        網站入口（不用改）
├── content.js        ★ 所有文字和照片清單都在這裡
├── assets/
│   ├── style.css     版面樣式
│   └── app.js        網站功能（輪播、排版、全螢幕看圖）
├── s/                每個系列的獨立網頁（自動產生，給 Google 搜尋和分享預覽用，不用改）
└── photos/           網頁版照片（已壓縮，JPG 和 WebP 各一份；網頁優先用 WebP）
    ├── hero/         首頁開場輪播（橫圖）
    ├── works/        得獎作品
    ├── series/
    │   ├── seoul/    每個城市一個資料夾，名稱要和 content.js 的 id 一樣
    │   ├── singles/  單張：不屬於任何城市的照片
    │   └── …
    └── about/        大頭照 portrait.jpg
```

## 怎麼改內容

- **文字**：打開 `content.js`，改引號裡的字。每段都有中文（zh）和英文（en）。
- **〔金色括號〕** 代表還沒填，網站上會用金色顯示，填好後把括號拿掉。
- **照片**：放進 `photos/` 對應的資料夾，並在 `content.js` 裡寫上檔名。
- 找不到的照片會顯示灰色方塊和該放的位置，網站不會壞掉。

## 原始照片

`開場/`、`精選/`、`系列/`、`關於/` 是相機原檔，只在整理照片時使用，`.gitignore` 已設定不會上傳到 GitHub。

## 照片規格

- 長邊約 2000px、JPG、一張幾百 KB，不要放相機原檔；另外產生同名 WebP（網頁實際載入的是 WebP，找不到才用 JPG）。
- 縮圖在 `photos/thumbs/`，分享預覽圖在 `photos/og/`。
- 改了系列（新增、改名、換封面）之後，要重新產生 `s/` 底下的網頁和 `sitemap.xml`。
- 先讀取參數（EXIF）再壓縮，參數寫進 `content.js` 的 `exif`；比例寫進 `w`、`h`。
- 影片放 YouTube，`content.js` 只填影片代碼（`yt`），縮圖會自動抓。

## 在電腦上預覽

直接雙擊 `index.html`，用瀏覽器打開就能看。

## 上線

推到 GitHub 的 `<帳號>.github.io` repository，開啟 GitHub Pages，網址就是 `https://<帳號>.github.io`。
