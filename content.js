/* =============================================================
   洪翊宸 作品集｜內容檔
   網站上所有文字和照片清單都在這裡，改這個檔就好。

   規則：
   - 每段文字都有 zh（中文）和 en（英文）兩格。
   - 〔金色括號〕代表還沒填，填好後把括號拿掉。
   - 照片檔案放在 photos/ 底下，這裡寫的是「photos/ 之後的路徑」。
   - 照片找不到時會顯示灰色方塊和該放的路徑，不會壞掉。
   - 參數（exif）和照片比例（w、h）會由整理照片的程式自動填，不用手打。
   ============================================================= */

const C = {

  /* ---------- 基本資料 ---------- */
  name:  { zh: '洪翊宸', en: 'Eric Hung' },
  intro: { zh: '什麼都拍，只要它讓我停下來多看一眼。', en: 'I photograph anything that makes me stop and look twice.' },
  about: {
    zh: '我是洪翊宸，就讀陽明交大管理科學系。這裡的照片大多來自旅行和日常的抓拍：山海、城市、街角的一隻貓，只要讓我停下來多看一眼，就會被收進鏡頭。拍照讓我換個角度看世界，也讓我習慣放慢腳步，留意別人容易略過的細節。拍人的時候，我喜歡記下他們真實的情緒，尤其是開心的那一刻，也曾為營隊和畢業典禮擔任活動攝影。',
    en: 'I\'m Eric Hung, a Management Science student at National Yang Ming Chiao Tung University. Most of these photographs come from travel and everyday moments: mountains, cities, a cat on a street corner, anything that makes me stop and look twice. Photography gives me another angle on the world and teaches me to slow down and notice the details others walk past. When I photograph people, I try to keep their real emotions, especially their moments of joy, and I have also shot camps and graduation ceremonies as an event photographer.' },
  contact: { email: 'erichung20050611@gmail.com', ig: '' },  /* 有 IG 再填，例如 '@erichung.photo'；留空就不顯示 */

  /* 瀏覽統計（GoatCounter）：註冊後把網址前面那段代碼填在這裡，例如 'erichung'；留空就不統計 */
  analytics: 'erich-5245',

  /* ---------- 首頁開場輪播（建議 5–6 張橫圖） ---------- */
  hero: [
    { file: 'hero/dsc03751.jpg', series: 'shikoku', title: { zh: '四國', en: 'Shikoku' }, sub: { zh: '2026.06', en: '2026.06' } },
    { file: 'hero/img_8071.jpg', series: 'seoul', title: { zh: '首爾', en: 'Seoul' }, sub: { zh: '2026.01', en: '2026.01' } },
    { file: 'hero/img_6678.jpg', series: 'busan', title: { zh: '釜山', en: 'Busan' }, sub: { zh: '2025.09', en: '2025.09' } },
    { file: 'hero/img_0223.jpg', series: 'hokuriku', title: { zh: '北陸', en: 'Hokuriku' }, sub: { zh: '2024.08', en: '2024.08' } },
    { file: 'hero/img_9218.jpg', series: 'beijing', title: { zh: '北京', en: 'Beijing' }, sub: { zh: '2024.07', en: '2024.07' } }
  ],

  /* ---------- 影像作品：得獎照片（同一張照片、兩個版本） ---------- */
  works: [
    {
      img: 'photos/works/stairs.jpg',
      place: { zh: '首爾・梨花女子大學 ECC', en: 'Ewha Womans University ECC, Seoul' },
      from: 'seoul',
      exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "200"},
      /* 兩個版本共用的文字 */
      intro: {
        zh: '在重複的秩序裡穿行，於陰影中找到自己的節拍。',
        en: 'Navigating the repetitive patterns of order, finding one\'s own beat in the shadows.' },
      composition: {
        zh: '階梯與盆栽層層重複，構成嚴整的秩序；午後一道斜影，把畫面切成拼圖般的幾何。我等紅衣行人走到中心點才按下快門，讓那一抹紅成為整片灰色裡的視覺重心。',
        en: 'Steps and planters repeat into a strict order, and a sharp afternoon shadow cuts the frame into geometric pieces. I waited for the figure in red to reach the center, giving the grey scene a single point of focus.' },
      /* 各比賽的版本 */
      versions: [
        { title: { zh: '破格', en: 'Breaking the Grid' },
          contest: { zh: '2026 全國學生攝影比賽', en: '2026 National Student Photography Competition' },
          category: { zh: '個人組・中華攝影教育學會主辦', en: 'Individual · Organized by the Chinese Society of Photography Education' },
          award: { zh: '銅獎', en: 'Bronze Award' },
          year: '2026' },
        { title: { zh: '日常的節奏', en: 'Rhythm of the Routine' },
          contest: { zh: 'World Grand Prix Photography Awards', en: 'World Grand Prix Photography Awards' },
          category: { zh: '紀實與人物攝影：抓拍瞬間', en: 'Documentary & People: Candid Moments' },
          award: { zh: '銀獎', en: 'Silver Award' },
          year: '2026',
          link: 'https://www.wgppa.com/winners/rhythm-of-the-routine' }
      ]
    }
  ],

  /* ---------- 影像作品：影片（yt = YouTube 網址最後那串代碼） ---------- */
  films: [
    { yt: 'iOHFZAwJs84', series: 'shikoku', thumb: 'photos/films/shikoku.jpg',
      title: { zh: 'Shikoku: A Cinematic Gaze', en: 'Shikoku: A Cinematic Gaze' }, year: '2026', runtime: '5:26',
      note: {
        zh: '人群快轉，時間卻在凝視裡慢了下來。這是一趟沒有對白、也沒有刻意擺拍的旅程，我讓自己成為四國街頭的透明旁觀者：從金刀比羅宮望不到頭的石階、道後溫泉的薄霧，到小豆島渡輪上的海風。我沒有想記住每一張臉，只想留下那些被光切開、被時間放慢的片刻。',
        en: 'The crowd fast-forwards, yet time slows within a gaze. A journey with no dialogue and no posing: I wandered Shikoku as a quiet observer, from the endless stone steps of Kotohira-gū and the thin mist of Dōgo Onsen to the sea breeze on the Shōdoshima ferry. I didn\'t try to remember every face. I only wanted to keep the fleeting moments cut by light and slowed by time.' },
      credits: [
        { k: { zh: '音樂', en: 'Music' }, v: { zh: 'The 1975 – About You', en: 'The 1975 – About You' } },
        { k: { zh: '器材', en: 'Shot on' }, v: { zh: 'Sony A7 IV（24–70mm f/2.8）、iPhone 16 Pro', en: 'Sony A7 IV (24–70mm f/2.8), iPhone 16 Pro' } },
        { k: { zh: '地點', en: 'Location' }, v: { zh: '高松・松山・小豆島', en: 'Takamatsu, Matsuyama, Shōdoshima' } }
      ] }
  ],

  /* ---------- 精選（可以和城市系列重複） ----------
     file：photos/ 之後的路徑；直接指向系列裡的照片，不用另存一份
     from：這張也在哪個系列（填系列的 id，沒有就刪掉這格）
     w、h、exif：程式自動填的尺寸和參數 */
  singles: [
    { file: 'series/chengdu/img_8599.jpg', from: 'chengdu', w: 2000, h: 1333,
      title: { zh: '紅樹與燈籠', en: 'Red Canopy, Paper Lanterns' }, text: { zh: '在五鳳溪龍吟天城和組員闖關的空檔，抬頭看到這棵掛滿燈籠的紅樹。它其實是一處造景，但畫面裡只剩樹、燈籠和天空，簡單俐落，就是我想要的樣子。', en: 'Between challenges with my team at Longyin Tiancheng in Wufengxi, I looked up and saw this red tree hung with lanterns. It is a set piece, but cut down to the tree, the lanterns and the sky, the frame became as clean as I wanted.' },
      place: { zh: '成都・五鳳溪龍吟天城', en: 'Longyin Tiancheng, Wufengxi, Chengdu' }, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/4.5", "shutter": "1/80s", "iso": "200"} },
    { file: 'series/busan/img_6838.jpg', from: 'busan', w: 1333, h: 2000,
      title: { zh: '巷口', en: 'Around the Corner' }, text: { zh: '在甘川洞文化村漫無目的地亂晃，轉進一條小巷時，剛好和牠對上眼。要說為什麼拍，大概就是因為牠是一隻貓吧。', en: 'I was wandering aimlessly through Gamcheon Culture Village when I turned into an alley and locked eyes with it. Why did I take the shot? Mostly because it was a cat.' },
      place: { zh: '釜山・甘川洞文化村', en: 'Gamcheon Culture Village, Busan' }, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/6.3", "shutter": "1/100s", "iso": "100"} },
    { file: 'series/seoul/img_7912.jpg', from: 'seoul', w: 2000, h: 1333,
      title: { zh: '漢江的金光', en: 'Gold on the Han' }, text: { zh: '和朋友在汝矣島現代百貨的倫敦貝果博物館買了麵包，準備到漢江邊坐著吃。傍晚的陽光打在大樓玻璃上，又反射到江面，實在想不到不拍的理由。', en: 'My friends and I picked up bread from London Bagel Museum at The Hyundai Seoul and headed down to the river to eat. The evening sun hit the glass towers and bounced onto the water. I couldn\'t think of a reason not to shoot.' },
      place: { zh: '首爾・汝矣島漢江公園', en: 'Yeouido Hangang Park, Seoul' }, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/400s", "iso": "200"} },
    { file: 'series/shikoku/dsc03384.jpg', from: 'shikoku', w: 1333, h: 2000,
      title: { zh: '線軸裡的燈', en: 'Light Among the Spools' }, text: { zh: '在今治的毛巾美術館參觀毛巾的製作過程，看到一座用一卷卷紗線堆成的小房子。走進去才發現，整個空間只靠中間一顆燈泡照亮。四周的線軸往中心收，視線最後落在那一點光上，我很喜歡這樣的構圖。', en: 'Touring the towel-making exhibits at the Towel Museum in Imabari, I found a small room built from spools of yarn. Inside, the whole space was lit by a single bulb. The spools close in from every side and lead the eye to that one point of light, and I love that composition.' },
      place: { zh: '愛媛・今治毛巾美術館', en: 'Towel Museum, Imabari, Ehime' }, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/1600s", "iso": "1250"} },
    { file: 'series/wudang/img_5479.jpg', from: 'wudang', w: 2000, h: 1333,
      title: { zh: '群峰之間', en: 'Into the Peaks' }, text: { zh: '梅竹書院第三屆來到湖北武當山。搭纜車上山時回頭一看，索道和層層群峰剛好全收進同一個畫面，就把它拍了下來。', en: 'My third Meizhu Academy trip took us to the Wudang Mountains in Hubei. Looking back from the cable car on the way up, I saw the ropeway and the ridges line up in a single frame, so I took the shot.' },
      place: { zh: '湖北・武當山', en: 'Wudang Mountains, Hubei' }, exif: {"camera": "Canon EOS 700D", "focal": "50mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
    { file: 'series/seoul/img_7865.jpg', from: 'seoul', w: 1333, h: 2000,
      title: { zh: '樓梯間的光', en: 'Light in the Stairwell' }, text: { zh: '在梨花女子大學逛完紀念品店，走出來抬頭一看，陽光順著窗戶灑進樓梯間，在階梯上排出一道道光影。一切剛好到位，不記錄下來太可惜。', en: 'Walking out of the gift shop at Ewha Womans University, I looked up to find sunlight pouring through the windows into the stairwell, laying stripes of light down the steps. Everything lined up at once, and it had to be recorded.' },
      place: { zh: '首爾・梨花女子大學', en: 'Ewha Womans University, Seoul' }, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/4.5", "shutter": "1/1000s", "iso": "200"} },
    { file: 'series/shikoku/dsc03539.jpg', from: 'shikoku', w: 2000, h: 1333,
      title: { zh: '窗邊的橘色娃娃', en: 'Orange by the Window' }, text: { zh: '從松山城下來，往導遊說的集合點走時，和家人走進一間當地特產店。愛媛以橘子聞名，店裡擺滿了橘子汁，大家的目光都在商品上，只有我一進門就注意到掛在窗邊的娃娃。後來家人看到照片，還問我這是在哪裡拍的。', en: 'Coming down from Matsuyama Castle on the way to our tour\'s meeting point, my family and I stepped into a local shop. Ehime is famous for its mandarins, and the shelves were full of mandarin juice. Everyone was looking at the products, but I noticed the dolls hanging by the window the moment I walked in. Later my family saw the photo and asked where I had taken it.' },
      place: { zh: '愛媛・松山', en: 'Matsuyama, Ehime' }, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/5", "shutter": "1/500s", "iso": "320"} },
    { file: 'series/xiamen/img_8748.jpg', from: 'xiamen', w: 1333, h: 2000,
      title: { zh: '一個人的機艙', en: 'A Row to Myself' }, text: { zh: '梅竹書院第二屆，從廈門高崎飛往北京大興。艙門關上後，我發現整排座位只有我一個人。我刻意壓低周圍的曝光，把焦點放在窗外，框住的剛好是另一架飛機的機尾。', en: 'On my second Meizhu Academy trip, flying from Xiamen Gaoqi to Beijing Daxing, the cabin door closed and I realised I had the whole row to myself. I underexposed the cabin and focused on the view outside, which happened to frame the tail of another plane.' },
      place: { zh: '廈門高崎國際機場', en: 'Xiamen Gaoqi International Airport' }, exif: {"camera": "Canon EOS 700D", "focal": "143mm", "aperture": "f/7.1", "shutter": "1/500s", "iso": "100"} },
    { file: 'series/singles/dsc04533.jpg', from: 'singles', w: 2000, h: 1333,
      title: { zh: '草叢裡的紅鶴', en: 'Flamingo in the Grass' }, text: { zh: '在新竹動物園拍的。我用前方的草當前景，等牠的身體彎出最好看的姿態，才按下快門。', en: 'Taken at Hsinchu Zoo. I used the grass in front as a foreground and waited for its body to settle into the right curve before pressing the shutter.' },
      place: { zh: '新竹市立動物園', en: 'Hsinchu Zoo' }, exif: {"camera": "Sony A7 IV", "focal": "267mm", "aperture": "f/6.3", "shutter": "1/1000s", "iso": "500"} },
    { file: 'series/chengdu/img_8575.jpg', from: 'chengdu', w: 1333, h: 2000,
      title: { zh: '今朝有戲', en: 'A Show Today' }, text: { zh: '在五鳳溪古鎮的路邊，一位大爺守著幾箱橘子做生意，身後的招牌寫著「今朝有戲」。人、橘子和那四個字湊在一起，畫面很有意思。', en: 'By the road in Wufengxi Ancient Town, an old man was selling crates of oranges under a sign that read \'A show today\'. The man, the fruit and those four characters made for a frame I found too interesting to pass.' },
      place: { zh: '成都・五鳳溪古鎮', en: 'Wufengxi Ancient Town, Chengdu' }, exif: {"camera": "Canon EOS 700D", "focal": "84mm", "aperture": "f/5", "shutter": "1/800s", "iso": "200"} },
    { file: 'series/shikoku/dsc03451.jpg', from: 'shikoku', w: 2000, h: 1333,
      title: { zh: '大街道的夜', en: 'Night on Ōkaidō' }, text: { zh: '那天住在松山大街道旁的飯店，晚上到商店街閒晃，看到一台計程車停在路邊。我喜歡這種帶著年代感的車，像老車，卻還保留著自己的樣子。', en: 'We stayed at a hotel next to Ōkaidō in Matsuyama. Wandering the shopping street that night, I found a taxi parked by the curb. I love cars like this: they carry their age like an old car, yet still keep their own character.' },
      place: { zh: '愛媛・松山大街道', en: 'Ōkaidō, Matsuyama, Ehime' }, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/100s", "iso": "640"} },
    { file: 'series/singles/img_8767.jpg', from: 'singles', w: 2000, h: 1333,
      title: { zh: '鏡頭裡的鏡頭', en: 'Frame Within a Frame' }, text: { zh: '2026 年 5 月，大巨蛋的中信兄弟音樂祭。前方的人舉起相機，螢幕裡亮著場上的同一刻。我把他的剪影和那塊小小的螢幕一起放進畫面：場上正在發生什麼，台下的人又怎麼把它留下來，都在同一張照片裡。', en: 'CTBC Brothers Music Festival at the Taipei Dome, May 2026. The person in front of me raised his camera, its screen glowing with the same moment unfolding on the field. I framed his silhouette together with that small screen, so one photo holds both what was happening on the field and how the crowd was holding on to it.' },
      place: { zh: '台北大巨蛋', en: 'Taipei Dome' }, exif: {"camera": "Canon EOS 700D", "focal": "89mm", "aperture": "f/4.5", "shutter": "1/200s", "iso": "6400"} }
  ],

  /* ---------- 城市系列（新到舊） ----------
     id：英文小寫，也是資料夾名稱 photos/series/<id>/
     cover：封面，建議用直的（不寫就用第一張）；coverPos：橫圖當封面時，裁切的左右位置（0% 最左、100% 最右）
     photos：照片依拍攝時間排序；想加地點就在那張加上 place: { zh: '…', en: '…' }
       一句簡述：caption: { zh: '…', en: '…' }，會顯示在看大圖時的下方，也當作圖片的替代文字 */
  series: [
    { id: 'quanzhou-fuzhou', name: { zh: '泉州・福州', en: 'Quanzhou & Fuzhou' }, year: '2026.10', cover: 'dsc00021.jpg',
      intro: { zh: '梅竹書院第六屆，帶著 GR IIIx 在泉州與福州之間走走拍拍。', en: 'Meizhu Academy, sixth edition: wandering between Quanzhou and Fuzhou with a GR IIIx.' },
      photos: [
        { file: 'dsc09993.jpg', caption: { zh: '木桌上的 GR IIIx，這趟旅程的隨身相機', en: 'A GR IIIx on a wooden table, my everyday camera for this trip' }, w: 2000, h: 1333, exif: {"camera": "Sony A7C II", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/60s", "iso": "1600"} },
        { file: 'dsc00020.jpg', caption: { zh: '傍晚點亮的鏤空燈塔裝置，襯著漸暗的天空', en: 'An openwork lighthouse installation lit at dusk against a darkening sky' }, w: 2000, h: 1333, exif: {"camera": "Sony A7C II", "focal": "50mm", "aperture": "f/3.2", "shutter": "1/125s", "iso": "3200"} },
        { file: 'r0006515.jpg', caption: { zh: '夜色裡遠遠亮著燈的城堡造型建築', en: 'A castle-like building glowing far off in the night' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/8s", "iso": "640"} },
        { file: 'r0006517.jpg', caption: { zh: '色彩繁複的彩繪玻璃天花板，滿版的花紋', en: 'An ornate stained-glass ceiling covered edge to edge in patterns' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/160s", "iso": "640"} },
        { file: 'dsc00021.jpg', caption: { zh: '從暗房間的窗框望出去，海面與跨海大橋', en: 'Through a dark window frame: the sea and a cross-sea bridge' }, w: 1333, h: 2000, exif: {"camera": "Sony A7C II", "focal": "70mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "160"} },
        { file: 'r0006528.jpg', caption: { zh: '陽台欄杆後方，遠處的城堡尖塔與圓頂', en: 'Behind a balcony railing, distant castle spires and a dome' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/11", "shutter": "1/250s", "iso": "640"} },
        { file: 'r0006537.jpg', caption: { zh: '藍天白雲下的開元寺東塔，一旁是老街店舖', en: 'The East Pagoda of Kaiyuan Temple under blue sky, old-street shops beside it' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/14", "shutter": "1/250s", "iso": "640"} },
        { file: 'r0006545.jpg', caption: { zh: '從路口望向西塔，電線和樹梢橫過天空', en: 'Looking up the street at the West Pagoda, wires and treetops across the sky' }, w: 1333, h: 2000, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/10", "shutter": "1/200s", "iso": "640"} },
        { file: 'r0006554.jpg', caption: { zh: '閩台緣博物館展櫃裡的一口古銅鐘', en: 'An ancient bronze bell in a case at the Museum of Fujian–Taiwan Kinship' }, w: 1333, h: 2000, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/6s", "iso": "640"} },
        { file: 'r0006568.jpg', caption: { zh: '「四十多年了，放我回家吧！」', en: '“Forty-some years now. Let me go home!”' }, w: 1333, h: 2000, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/80s", "iso": "640"} },
        { file: 'r0006571.jpg', caption: { zh: '藍天下的閩台緣博物館', en: 'The Museum of Fujian–Taiwan Kinship under a blue sky' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/14", "shutter": "1/200s", "iso": "640"} },
        { file: 'dsc00023.jpg', caption: { zh: '午後的海灣，遠方橫著一長條跨海大橋', en: 'An afternoon bay with a long cross-sea bridge on the horizon' }, w: 2000, h: 1333, exif: {"camera": "Sony A7C II", "focal": "70mm", "aperture": "f/3.2", "shutter": "1/1600s", "iso": "50"} },
        { file: 'dsc00030.jpg', caption: { zh: '逆光的海面閃著銀光，大橋成了一道剪影', en: 'Backlit water flashing silver, the bridge reduced to a silhouette' }, w: 2000, h: 1333, exif: {"camera": "Sony A7C II", "focal": "70mm", "aperture": "f/4", "shutter": "1/5000s", "iso": "50"} },
        { file: 'r0006580.jpg', caption: { zh: '藍天下，紅白相間的弧形洋樓轉角', en: 'A curved red-and-white colonial building corner under blue sky' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/10", "shutter": "1/320s", "iso": "640"} },
        { file: 'r0006581.jpg', caption: { zh: '只拍水面，細細的波紋鋪滿整個畫面', en: 'Nothing but water, fine ripples filling the frame' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/13", "shutter": "1/320s", "iso": "640"} },
        { file: 'dsc00034.jpg', caption: { zh: '橘紅色的夕陽，正落在對岸的天際線上', en: 'An orange-red sun setting on the far shore’s skyline' }, w: 1027, h: 1541, exif: {"camera": "Sony A7C II", "focal": "70mm", "aperture": "f/4", "shutter": "1/125s", "iso": "80"} },
        { file: 'r0006624.jpg', caption: { zh: '夜晚的海灘上，一座被打亮的海螺雕塑', en: 'A lit conch-shell sculpture on the beach at night' }, w: 1333, h: 2000, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/6s", "iso": "640"} },
        { file: 'r0006625.jpg', caption: { zh: '靠近看海螺雕塑的曲線與孔洞，背後是夜海', en: 'Up close, the conch’s curves and holes against the night sea' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/10s", "iso": "640"} },
        { file: 'r0006680.jpg', caption: { zh: '瑞幸咖啡門口發光的藍色鹿頭招牌', en: 'Luckin Coffee’s glowing blue deer-head sign' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/5.6", "shutter": "1/160s", "iso": "640"} },
        { file: 'r0006695.jpg', caption: { zh: '高樓之間，路燈桿上掛著兩面五星旗', en: 'Between towers, two Chinese flags on a lamppost' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/10", "shutter": "1/160s", "iso": "640"} },
        { file: 'r0006714.jpg', caption: { zh: '寥寥無幾的候機大廳，被福州的夕陽填滿', en: 'A nearly empty departure hall, filled with the Fuzhou sunset' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/8", "shutter": "1/200s", "iso": "640"} }
      ] },

    { id: 'shikoku', name: { zh: '四國', en: 'Shikoku' }, year: '2026.06', cover: 'dsc03257.jpg',
      intro: { zh: '和家人走過香川、德島、愛媛與小豆島，把旅途裡的片刻放慢來看。', en: 'With my family through Kagawa, Tokushima, Ehime and Shōdoshima, slowing the journey down.' },
      photos: [
        { file: 'dsc03106.jpg', caption: { zh: '山腳下一台紅色的販賣機', en: 'A red vending machine at the foot of the hill' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/11", "shutter": "1/100s", "iso": "100"} },
        { file: 'dsc03111.jpg', caption: { zh: '綠蔭下的金刀比羅宮參道，遊客撐著傘往上走', en: 'The shaded approach to Kotohira-gū, visitors climbing under umbrellas' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/10", "shutter": "1/500s", "iso": "640"} },
        { file: 'dsc03115.jpg', caption: { zh: '石鳥居上的「金」字紋，金刀比羅宮的標誌', en: 'The “金” crest on a stone torii, the mark of Kotohira-gū' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/4", "shutter": "1/250s", "iso": "50"} },
        { file: 'dsc03129.jpg', caption: { zh: '藍天下飄揚的金刀比羅宮旗幟', en: 'Kotohira-gū banners flying under a blue sky' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "67mm", "aperture": "f/2.8", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03186.jpg', caption: { zh: '掛著「金」字白燈籠的社殿一角', en: 'A corner of the shrine hung with white “金” lanterns' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/1600s", "iso": "800"} },
        { file: 'dsc03188.jpg', caption: { zh: '樹林環繞的木造社殿與迴廊', en: 'Wooden shrine halls and corridors ringed by forest' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/3200s", "iso": "2000"} },
        { file: 'dsc03202.jpg', caption: { zh: '兩旁樹蔭夾道的石板參道', en: 'A stone-paved approach lined with shade trees' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "200"} },
        { file: 'dsc03257.jpg', caption: { zh: '用藤蔓編成的祖谷葛藤橋', en: 'The Iya Kazurabashi, a bridge woven from vines' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "49mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "200"} },
        { file: 'dsc03263.jpg', caption: { zh: '從葛藤橋的縫隙往下看，底下是碧綠溪水', en: 'Through gaps in the vine bridge, green water far below' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "56mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "200"} },
        { file: 'dsc03266.jpg', caption: { zh: '從暗處望向葛藤橋，藤蔓垂在兩側', en: 'The vine bridge seen from the shadows, vines hanging on both sides' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "200"} },
        { file: 'dsc03292.jpg', caption: { zh: '大步危峽谷間湍急的溪流', en: 'A rushing stream through the Ōboke Gorge' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/3.2", "shutter": "1/320s", "iso": "100"} },
        { file: 'dsc03297.jpg', caption: { zh: '白色岩層間翻起浪花的急流', en: 'Whitewater churning between pale rock layers' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "54mm", "aperture": "f/22", "shutter": "1/8s", "iso": "100"} },
        { file: 'dsc03301.jpg', caption: { zh: '灰白色的岩壁直直落進碧綠河水', en: 'Grey-white cliffs dropping straight into green water' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "57mm", "aperture": "f/4", "shutter": "1/320s", "iso": "50"} },
        { file: 'dsc03323.jpg', caption: { zh: '遊船駛過大步危峽谷的河面', en: 'A tour boat crossing the river in Ōboke Gorge' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "64"} },
        { file: 'dsc03360.jpg', caption: { zh: '岩壁上的細瀑匯進翻騰的溪流', en: 'A thin waterfall on the cliff joining the rushing stream' }, w: 1334, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/22", "shutter": "1/6s", "iso": "100"} },
        { file: 'img_9012.jpg', caption: { zh: '站在岩石上的一隻鸕鶿', en: 'A cormorant standing on a rock' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/11", "shutter": "1/125s", "iso": "640"} },
        { file: 'dsc03365.jpg', caption: { zh: '一整面排列整齊的彩色紗線軸', en: 'A whole wall of neatly stacked colorful thread spools' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/100s", "iso": "400"} },
        { file: 'dsc03379.jpg', caption: { zh: '近拍線軸，前景清晰、後方漸漸模糊', en: 'Spools up close, sharp in front and softening behind' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/160s", "iso": "640"} },
        { file: 'dsc03383.jpg', caption: { zh: '暖色的線軸一層層往上疊', en: 'Warm-toned spools stacked layer on layer' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/100s", "iso": "1600"} },
        { file: 'dsc03384.jpg', caption: { zh: '線軸小屋裡，唯一一顆燈泡', en: 'The single light bulb in the spool hut' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/1600s", "iso": "1250"} },
        { file: 'dsc03399.jpg', caption: { zh: '掛在線軸前的糊塗塌客毛巾', en: 'A Gudetama towel hanging in front of the spools' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "67mm", "aperture": "f/2.8", "shutter": "1/320s", "iso": "1250"} },
        { file: 'dsc03400.jpg', caption: { zh: '掛在線軸前的史努比毛巾', en: 'A Snoopy towel hanging in front of the spools' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "62mm", "aperture": "f/2.8", "shutter": "1/320s", "iso": "1250"} },
        { file: 'dsc03417.jpg', caption: { zh: '昏黃燈光下，桌上準備烤的肉', en: 'Meat laid out for grilling under warm light' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "50mm", "aperture": "f/2.8", "shutter": "1/100s", "iso": "50"} },
        { file: 'dsc03441.jpg', caption: { zh: '夜裡停在商店街口的計程車', en: 'A taxi parked at the shopping-street entrance at night' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/200s", "iso": "400"} },
        { file: 'dsc03451.jpg', caption: { zh: '夜裡亮著頭燈的計程車', en: 'A taxi with its headlights on at night' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/100s", "iso": "640"} },
        { file: 'dsc03460.jpg', caption: { zh: '商店街裡擠成一排的腳踏車', en: 'Bicycles crammed into a row in the shopping arcade' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/50s", "iso": "500"} },
        { file: 'dsc03483.jpg', caption: { zh: '樹叢後露出的松山城天守', en: 'Matsuyama Castle’s keep peeking out behind trees' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "69mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03497.jpg', caption: { zh: '松山城的木門後方，石牆與長長的石階', en: 'Past a wooden gate of Matsuyama Castle, stone walls and a long stairway' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "40mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03505.jpg', caption: { zh: '松山城層疊的灰瓦屋頂', en: 'Matsuyama Castle’s layered grey-tiled roofs' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "56mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03507.jpg', caption: { zh: '從松山城往下看，整片松山市區', en: 'All of Matsuyama city, seen from the castle' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03511.jpg', caption: { zh: '從暗處斜斜框住的天守一角', en: 'A corner of the keep framed at an angle from the shadows' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "42mm", "aperture": "f/3.2", "shutter": "1/800s", "iso": "50"} },
        { file: 'img_9016.jpg', caption: { zh: '從牆縫望出去，遠處的摩天輪', en: 'A Ferris wheel in the distance, seen through a gap in the wall' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "149mm", "aperture": "f/8", "shutter": "1/1000s", "iso": "200"} },
        { file: 'dsc03538.jpg', caption: { zh: '一整面擺滿的扭蛋機', en: 'A wall packed with capsule-toy machines' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "50mm", "aperture": "f/5", "shutter": "1/500s", "iso": "1250"} },
        { file: 'dsc03539.jpg', caption: { zh: '窗邊掛成一串的橘色娃娃', en: 'A string of orange dolls hanging by the window' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/5", "shutter": "1/500s", "iso": "320"} },
        { file: 'dsc03589.jpg', caption: { zh: '停在車站月台的路面電車', en: 'A streetcar stopped at the station platform' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/640s", "iso": "64"} },
        { file: 'dsc03598.jpg', caption: { zh: '道後溫泉本館的入口與屋簷', en: 'The entrance and eaves of Dōgo Onsen Honkan' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "46mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "125"} },
        { file: 'dsc03608.jpg', caption: { zh: '街口舉起手機拍照的路人', en: 'A passer-by on a street corner raising a phone to take a photo' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/400s", "iso": "50"} },
        { file: 'img_9031.jpg', caption: { zh: '鳥居後方長長的石階，盡頭是紅色樓門', en: 'A long stone stairway beyond a torii, a red gate at the top' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "160mm", "aperture": "f/8", "shutter": "1/200s", "iso": "200"} },
        { file: 'dsc03620.jpg', caption: { zh: '等紅燈的單車騎士，頭上電線縱橫', en: 'A cyclist waiting at a red light under a web of wires' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/640s", "iso": "100"} },
        { file: 'dsc03633.jpg', caption: { zh: '港邊的高塔大樓與碼頭', en: 'A harbor tower and the pier' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "46mm", "aperture": "f/2.8", "shutter": "1/1250s", "iso": "50"} },
        { file: 'dsc03751.jpg', caption: { zh: '小豆島橄欖公園的希臘風車', en: 'The Greek windmill at Shōdoshima Olive Park' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/4000s", "iso": "50"} },
        { file: 'dsc03754.jpg', caption: { zh: '沿著海岸彎進小鎮的公路', en: 'A coastal road curving into a small town' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/4000s", "iso": "50"} },
        { file: 'dsc03793.jpg', caption: { zh: '樹林間的觀景台，遠處是瀨戶內海', en: 'A lookout among the trees, the Seto Inland Sea beyond' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "29mm", "aperture": "f/2.8", "shutter": "1/1000s", "iso": "50"} },
        { file: 'dsc03829.jpg', caption: { zh: '下午港灣裡停靠的帆船', en: 'Sailboats moored in the harbor in the afternoon' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/6400s", "iso": "64"} },
        { file: 'dsc03841.jpg', caption: { zh: '池水與松林環繞的日式庭園', en: 'A Japanese garden wrapped in ponds and pines' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "56mm", "aperture": "f/2.8", "shutter": "1/800s", "iso": "50"} },
        { file: 'dsc03844.jpg', caption: { zh: '近看盤曲的松樹枝幹', en: 'Twisting pine branches up close' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "44mm", "aperture": "f/2.8", "shutter": "1/1000s", "iso": "50"} },
        { file: 'dsc03852.jpg', caption: { zh: '一枝松樹探向平靜的池面', en: 'A pine branch reaching over a still pond' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "63mm", "aperture": "f/2.8", "shutter": "1/2000s", "iso": "50"} },
        { file: 'dsc03865.jpg', caption: { zh: '荷葉之間開著一朵粉色荷花', en: 'A single pink lotus among the lotus leaves' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/2.8", "shutter": "1/2000s", "iso": "50"} },
        { file: 'dsc03873.jpg', caption: { zh: '池畔的茶亭與修剪過的松樹', en: 'A teahouse by the pond and clipped pines' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "69mm", "aperture": "f/2.8", "shutter": "1/640s", "iso": "50"} }
      ] },

    { id: 'seoul', name: { zh: '首爾', en: 'Seoul' }, year: '2026.01', cover: 'img_7923.jpg',
      intro: { zh: '冬天的首爾：宮殿、韓屋與首爾塔，梨花女大的光影，還有一路吃不完的麵包。', en: 'Seoul in winter: palaces, hanok and N Seoul Tower, light at Ewha, and more bread than we could finish.' },
      photos: [
        { file: 'img_7735.jpg', caption: { zh: '從機窗往下看，覆雪的山地與河流', en: 'Snowy mountains and rivers, seen from the plane window' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "79mm", "aperture": "f/10", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_7739.jpg', caption: { zh: '飛往首爾途中，窗外的機翼與地平線', en: 'The wing and the horizon on the way to Seoul' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "24mm", "aperture": "f/11", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_7753.jpg', caption: { zh: '夜裡遠方亮著的樂天世界塔與城市燈火', en: 'Lotte World Tower and city lights glowing far off at night' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/5", "shutter": "1/5s", "iso": "400"} },
        { file: 'img_7758.jpg', caption: { zh: '藍天下的光化門', en: 'Gwanghwamun under a blue sky' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_7783.jpg', caption: { zh: '韓屋屋簷後方，遠處的南山首爾塔', en: 'N Seoul Tower beyond hanok eaves' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "89mm", "aperture": "f/4.5", "shutter": "1/2000s", "iso": "200"} },
        { file: 'img_7789.jpg', caption: { zh: '枝葉框住的南山塔與韓屋屋頂', en: 'Namsan Tower and hanok roofs framed by leaves' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "109mm", "aperture": "f/9", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_7792.jpg', caption: { zh: 'Artist Bakery 鐵桶裡插滿的紙捲', en: 'Paper rolls packed into a metal bin at Artist Bakery' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "41mm", "aperture": "f/5", "shutter": "1/60s", "iso": "100"} },
        { file: 'img_7803.jpg', caption: { zh: 'Artist Bakery 一盤盤剛出爐的可頌', en: 'Trays of fresh croissants at Artist Bakery' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "23mm", "aperture": "f/4", "shutter": "1/30s", "iso": "500"} },
        { file: 'img_7810.jpg', caption: { zh: '架上排滿的可頌與鹽麵包', en: 'Shelves lined with croissants and salt bread' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/3.5", "shutter": "1/30s", "iso": "160"} },
        { file: 'img_7816.jpg', caption: { zh: '黃、黑兩色的可頌並排在木盤裡', en: 'Yellow and black croissants side by side on a wooden board' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "2000"} },
        { file: 'img_7827.jpg', caption: { zh: '草莓奶油麵包配一杯花茶', en: 'A strawberry cream bun with a cup of flower tea' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "31mm", "aperture": "f/5.6", "shutter": "1/100s", "iso": "100"} },
        { file: 'img_7830.jpg', caption: { zh: '兩個人走過布滿紋理的牆面', en: 'Two people walking past a textured wall' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "135mm", "aperture": "f/5", "shutter": "1/2000s", "iso": "200"} },
        { file: 'img_7838.jpg', caption: { zh: '梨花女大的階梯，紅衣行人走在光影之間', en: 'The steps at Ewha Womans University, a figure in red walking through light and shadow' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "200"} },
        { file: 'img_7839.jpg', caption: { zh: '從另一個角度看梨花女大的階梯與盆栽', en: 'Another angle on the Ewha steps and potted plants' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_7841.jpg', caption: { zh: '峽谷盡頭，遠處的梨花女大舊校舍', en: 'At the end of the canyon, Ewha’s old campus buildings in the distance' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/4.5", "shutter": "1/1000s", "iso": "200"} },
        { file: 'img_7865.jpg', caption: { zh: '樓梯間裡，陽光一道道落在階梯上', en: 'Sunlight falling in stripes across a stairwell' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/4.5", "shutter": "1/1000s", "iso": "200"} },
        { file: 'img_7879.jpg', caption: { zh: '冬日樹影落在梨花女大的老校舍牆上', en: 'Winter tree shadows on an old Ewha building' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/4.5", "shutter": "1/1250s", "iso": "200"} },
        { file: 'img_7892.jpg', caption: { zh: '倫敦貝果博物館的椒鹽奶油貝果', en: 'A pretzel butter bagel at London Bagel Museum' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "50mm", "aperture": "f/5.6", "shutter": "1/250s", "iso": "1600"} },
        { file: 'img_7896-2.jpg', caption: { zh: '一整櫃貝果，牌子寫著各種口味', en: 'A whole case of bagels, each flavor labeled' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "23mm", "aperture": "f/3.5", "shutter": "1/30s", "iso": "320"} },
        { file: 'img_7902-2.jpg', caption: { zh: '提著倫敦貝果博物館的紙袋', en: 'Carrying a London Bagel Museum paper bag' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "35mm", "aperture": "f/4.5", "shutter": "1/250s", "iso": "1600"} },
        { file: 'img_7912.jpg', caption: { zh: '傍晚的漢江，陽光在大樓玻璃上反射', en: 'The Han River at dusk, sunlight glinting off tower glass' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/400s", "iso": "200"} },
        { file: 'img_7919.jpg', caption: { zh: '夕陽下的江畔公寓，遠處是南山塔', en: 'Riverside apartments at sunset, Namsan Tower beyond' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "157mm", "aperture": "f/5.6", "shutter": "1/1000s", "iso": "800"} },
        { file: 'img_7923.jpg', caption: { zh: '粉紫色天空下的南山塔與公寓', en: 'Namsan Tower and apartments under a pink-violet sky' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "231mm", "aperture": "f/5.6", "shutter": "1/250s", "iso": "1600"} },
        { file: 'img_7929-2.jpg', caption: { zh: '宮殿正殿的門與台階，匾額寫著「中和殿」', en: 'The palace hall’s doors and steps, the plaque reading “Junghwajeon”' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/4", "shutter": "1/640s", "iso": "100"} },
        { file: 'img_7949.jpg', caption: { zh: '藍天下的松枝與宮殿屋簷', en: 'Pine branches and palace eaves under a blue sky' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/4", "shutter": "1/640s", "iso": "100"} },
        { file: 'img_7982-2.jpg', caption: { zh: '星空圖書館高聳的書牆與玻璃天頂', en: 'The towering bookshelves and glass roof of Starfield Library' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "23mm", "aperture": "f/3.5", "shutter": "1/320s", "iso": "800"} },
        { file: 'img_8017.jpg', caption: { zh: '從高處看漢江上的一座座橋', en: 'Bridge after bridge over the Han River, seen from above' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "117mm", "aperture": "f/5", "shutter": "1/800s", "iso": "1600"} },
        { file: 'img_8024.jpg', caption: { zh: '漢江上的斜張橋與倒影', en: 'A cable-stayed bridge and its reflection on the Han' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "149mm", "aperture": "f/5", "shutter": "1/400s", "iso": "1600"} },
        { file: 'img_8025.jpg', caption: { zh: '俯瞰漢江的長橋，畫面斜斜切過', en: 'A long bridge over the Han cutting diagonally across the frame' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/400s", "iso": "1600"} },
        { file: 'img_8052.jpg', caption: { zh: '藍天下，山頂上的南山塔', en: 'Namsan Tower on the hilltop under a blue sky' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "135mm", "aperture": "f/5", "shutter": "1/1000s", "iso": "100"} },
        { file: 'img_8054.jpg', caption: { zh: '上午的天際線，樂天世界塔立在中間', en: 'The morning skyline with Lotte World Tower in the middle' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "135mm", "aperture": "f/5", "shutter": "1/1000s", "iso": "100"} },
        { file: 'img_8063.jpg', caption: { zh: '從牆洞望出去，遠方的樂天世界塔', en: 'Lotte World Tower in the distance, through a hole in the wall' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "84mm", "aperture": "f/4.5", "shutter": "1/3200s", "iso": "100"} },
        { file: 'img_8071.jpg', caption: { zh: '枯枝上停著一隻鳥，遠處是南山塔', en: 'A bird on a bare branch, Namsan Tower beyond' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "109mm", "aperture": "f/5", "shutter": "1/3200s", "iso": "100"} }
      ] },

    { id: 'chengdu', name: { zh: '成都', en: 'Chengdu' }, year: '2026.01', cover: 'img_8350.jpg',
      intro: { zh: '影像營的七天，從五鳳溪古鎮、西嶺雪山一路拍到熊貓。', en: 'Seven days at the film camp, from Wufengxi Ancient Town and Xiling Snow Mountain to the pandas.' },
      photos: [
        { file: 'img_8204.jpg', caption: { zh: '梅枝上的紅花，背景一片柔焦', en: 'Red blossoms on a plum branch against a soft blur' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/50s", "iso": "200"} },
        { file: 'img_2720.jpg', caption: { zh: '昏暗殿內，掛著油燈的楹聯', en: 'Couplets hung with oil lamps in a dim hall' }, w: 1333, h: 2000, exif: {"camera": "Sony A7 IV", "focal": "150mm", "aperture": "f/2.8", "shutter": "1/500s", "iso": "64"} },
        { file: 'img_2855.jpg', caption: { zh: '粉色梅花環繞的多層古塔', en: 'A multi-tiered pagoda surrounded by pink plum blossoms' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "73mm", "aperture": "f/2.5", "shutter": "1/2500s", "iso": "500"} },
        { file: 'img_8230.jpg', caption: { zh: '武侯祠「業紹高光」匾額下，香客正在上香', en: 'Worshippers offering incense under the “業紹高光” plaque at Wuhou Shrine' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_8234.jpg', caption: { zh: '同一座殿前的香爐與石板地', en: 'The incense burner and flagstones in front of the same hall' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "34mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_8246.jpg', caption: { zh: '暗處一尊龍形雕飾', en: 'A dragon carving in the shadows' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_8259.jpg', caption: { zh: '昏暗殿內的坐像，上方掛著匾額', en: 'A seated statue in a dim hall, a plaque above' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "43mm", "aperture": "f/5", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_8260.jpg', caption: { zh: '枝頭盛開的紅梅', en: 'Red plum blossoms in full bloom' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_8261.jpg', caption: { zh: '灰白天空下，枯枝上停著一隻鳥', en: 'A bird on a bare branch under a pale grey sky' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/1250s", "iso": "800"} },
        { file: 'img_8309.jpg', caption: { zh: '一整面亮著的紙燈籠', en: 'A whole wall of glowing paper lanterns' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/50s", "iso": "100"} },
        { file: 'img_8313.jpg', caption: { zh: '夜裡亮起彩色燈光的雙子塔', en: 'Twin towers lit up in color at night' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "24mm", "aperture": "f/4", "shutter": "1/80s", "iso": "1600"} },
        { file: 'img_8347.jpg', caption: { zh: '竹叢間探出頭的大熊貓', en: 'A giant panda peeking out of the bamboo' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "1600"} },
        { file: 'img_8350.jpg', caption: { zh: '埋頭吃竹子的大熊貓', en: 'A giant panda head-down in its bamboo' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "1600"} },
        { file: 'img_8362.jpg', caption: { zh: '趴在樹枝上的大熊貓', en: 'A giant panda sprawled on a branch' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "1600"} },
        { file: 'img_8383.jpg', caption: { zh: '攤位上一格格排好的串珠與手鍊', en: 'Beads and bracelets sorted into a grid at a stall' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/5", "shutter": "1/500s", "iso": "400"} },
        { file: 'img_8403.jpg', caption: { zh: '蒸籠裡冒著熱氣的小點心', en: 'Little dumplings steaming in a bamboo basket' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/4.5", "shutter": "1/1000s", "iso": "400"} },
        { file: 'img_8430.jpg', caption: { zh: '夜裡亮燈的安順廊橋倒映在江面', en: 'Anshun Bridge lit at night, reflected in the river' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "30mm", "aperture": "f/4", "shutter": "1/60s", "iso": "1600"} },
        { file: 'img_8456.jpg', caption: { zh: '西嶺雪山的纜車車廂', en: 'A cable car at Xiling Snow Mountain' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "33mm", "aperture": "f/4.5", "shutter": "1/60s", "iso": "100"} },
        { file: 'img_8460.jpg', caption: { zh: '結霜的松枝，像撒了一層糖霜', en: 'Frosted pine needles, as if dusted with sugar' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "100"} },
        { file: 'img_8467.jpg', caption: { zh: '霧凇樹幹上的一隻松鼠', en: 'A squirrel on a rime-covered trunk' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "160"} },
        { file: 'img_8504.jpg', caption: { zh: '濃霧裡結霜的杉樹', en: 'Frosted firs in thick fog' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_8532.jpg', caption: { zh: '灰濛天色下的高樓與天橋', en: 'Towers and a footbridge under a hazy sky' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5", "shutter": "1/200s", "iso": "400"} },
        { file: 'img_8546.jpg', caption: { zh: '草地上的大字，幾個小孩在踢球', en: 'Big letters on the lawn, a few kids playing football' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "127mm", "aperture": "f/5", "shutter": "1/400s", "iso": "200"} },
        { file: 'img_8569.jpg', caption: { zh: '掛滿紅燈籠的石階，遊客穿梭其中', en: 'Stone steps hung with red lanterns, visitors weaving through' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/5", "shutter": "1/250s", "iso": "200"} },
        { file: 'img_8575.jpg', caption: { zh: '「今朝有戲」招牌下賣橘子的大爺', en: 'An old man selling oranges under the “今朝有戲” sign' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "84mm", "aperture": "f/5", "shutter": "1/800s", "iso": "200"} },
        { file: 'img_8585.jpg', caption: { zh: '紅葉樹旁的龍吟天城古建築', en: 'Old buildings at Longyin Tiancheng beside a red-leaved tree' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "61mm", "aperture": "f/5", "shutter": "1/250s", "iso": "200"} },
        { file: 'img_8590.jpg', caption: { zh: '穿著衣服的白色小狗，坐在主人腳邊', en: 'A little white dog in clothes, sitting at its owner’s feet' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/5", "shutter": "1/250s", "iso": "200"} },
        { file: 'img_8599.jpg', caption: { zh: '掛著燈籠的紅樹', en: 'A red tree hung with lanterns' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/4.5", "shutter": "1/80s", "iso": "200"} },
        { file: 'img_8600.jpg', caption: { zh: '河邊步道，紅色燈柱一路延伸', en: 'A riverside path with red lamp posts stretching on' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "79mm", "aperture": "f/4.5", "shutter": "1/100s", "iso": "100"} },
        { file: 'img_8604.jpg', caption: { zh: '紅黑相間的層疊屋簷', en: 'Layered red-and-black eaves' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/5", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_8612.jpg', caption: { zh: '石階上探頭的黑白貓', en: 'A black-and-white cat peeking over the stone steps' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "79mm", "aperture": "f/4.5", "shutter": "1/60s", "iso": "6400"} }
      ] },

    { id: 'busan', name: { zh: '釜山', en: 'Busan' }, year: '2025.09', cover: 'img_6838.jpg',
      intro: { zh: '海、燈塔、甘川洞的巷弄，還有一隻剛好對上眼的貓。', en: 'The sea, lighthouses, the alleys of Gamcheon, and a cat that happened to look back.' },
      photos: [
        { file: 'img_6584.jpg', caption: { zh: '海鮮市場兩側的商家，遠處是釜山的高樓', en: 'Shops lining the seafood market, Busan’s towers in the distance' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/7.1", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6585.jpg', caption: { zh: '街邊整排的韓文招牌', en: 'A row of Korean shop signs along the street' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "200mm", "aperture": "f/5.6", "shutter": "1/250s", "iso": "250"} },
        { file: 'img_6589.jpg', caption: { zh: '霧氣籠罩的海岸', en: 'A coastline wrapped in mist' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_6590.jpg', caption: { zh: '薄霧裡若隱若現的海岸線', en: 'The shoreline fading in and out of light haze' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "160mm", "aperture": "f/9", "shutter": "1/640s", "iso": "100"} },
        { file: 'img_6596.jpg', caption: { zh: '沙灘上的小孩', en: 'A child on the beach' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/8", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_6619.jpg', caption: { zh: '海邊的佛塔', en: 'A pagoda by the sea' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "47mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6629.jpg', caption: { zh: '掛滿彩色燈籠的寺院', en: 'A temple hung with colorful lanterns' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/6.3", "shutter": "1/100s", "iso": "100"} },
        { file: 'img_6641.jpg', caption: { zh: '伸向海面的觀景台', en: 'An observation deck reaching out over the sea' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/6.3", "shutter": "1/500s", "iso": "160"} },
        { file: 'img_6649.jpg', caption: { zh: '青沙埔站下延伸的鐵軌', en: 'Tracks stretching on below Cheongsapo Station' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "178mm", "aperture": "f/5.6", "shutter": "1/250s", "iso": "500"} },
        { file: 'img_6659.jpg', caption: { zh: '港口的紅白燈塔', en: 'Red and white lighthouses at the harbor' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_6678.jpg', caption: { zh: '雲層下的天空膠囊列車', en: 'The Sky Capsule under the clouds' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "61mm", "aperture": "f/9", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6683.jpg', caption: { zh: '高架軌道下的黃色海岸列車', en: 'The yellow beach train beneath the elevated track' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "178mm", "aperture": "f/5.6", "shutter": "1/250s", "iso": "250"} },
        { file: 'img_6690.jpg', caption: { zh: '海面上的礁石', en: 'Rocks breaking the surface of the sea' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "43mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6694.jpg', caption: { zh: '木欄杆外的大海', en: 'The open sea beyond a wooden fence' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6697.jpg', caption: { zh: '浪打在岩岸上', en: 'Waves hitting the rocky shore' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/9", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_6705.jpg', caption: { zh: '站在礁石頂的海鷗', en: 'A gull standing on top of a rock' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6712.jpg', caption: { zh: '遠處防波堤上的紅燈塔', en: 'A red lighthouse on a distant breakwater' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6714.jpg', caption: { zh: '消波塊上的紅燈塔與遠方工廠', en: 'A red lighthouse on the tetrapods, factories beyond' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "124mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6721.jpg', caption: { zh: '貼著海面飛過的海鷗', en: 'A gull skimming low over the water' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "222mm", "aperture": "f/8", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_6726.jpg', caption: { zh: '駛過海面的漁船', en: 'A fishing boat crossing the sea' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6828.jpg', caption: { zh: '甘川洞文化村', en: 'Gamcheon Culture Village' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "37mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_6830.jpg', caption: { zh: '山坡上密密麻麻的彩色房子', en: 'Colorful houses packed across the hillside' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6838.jpg', caption: { zh: '坐在巷口的黑白貓', en: 'A black-and-white cat sitting at the mouth of an alley' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/6.3", "shutter": "1/100s", "iso": "100"} }
      ] },

    { id: 'gyeongju', name: { zh: '慶州', en: 'Gyeongju' }, year: '2025.09', cover: 'img_6765.jpg',
      intro: { zh: '新羅古都的一天，從佛國寺的屋簷走到月精橋。', en: 'A day in the old Silla capital, from the eaves of Bulguksa to Woljeonggyo Bridge.' },
      photos: [
        { file: 'img_6742.jpg', caption: { zh: '掛滿祈福牌的寺院門口', en: 'A temple gate hung with prayer tablets' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_6755.jpg', caption: { zh: '松樹下的寺院屋簷', en: 'Temple eaves beneath the pines' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "47mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_6765.jpg', caption: { zh: '門框裡框住的另一座殿', en: 'Another hall framed inside the doorway' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "32mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_6767.jpg', caption: { zh: '石欄杆與彩繪屋簷', en: 'Stone balustrades and painted eaves' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "31mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_6784.jpg', caption: { zh: '遠山下的河與古村', en: 'A river and an old village below distant mountains' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_6796.jpg', caption: { zh: '水邊的韓式樓閣', en: 'A Korean pavilion by the water' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "35mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_6798.jpg', caption: { zh: '橫過溪水的踏石', en: 'Stepping stones crossing the stream' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_6800.jpg', caption: { zh: '河面倒映著月精橋', en: 'Woljeonggyo Bridge reflected in the river' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "29mm", "aperture": "f/10", "shutter": "1/200s", "iso": "100"} }
      ] },

    { id: 'daegu', name: { zh: '大邱', en: 'Daegu' }, year: '2025.09', cover: 'img_6503.jpg',
      intro: { zh: '在大邱街頭走走：教堂、韓屋改建的星巴克，和入夜後的霓虹。', en: 'Walking the streets of Daegu: a cathedral, a hanok Starbucks, and neon after dark.' },
      photos: [
        { file: 'img_6440.jpg', caption: { zh: '電線交錯的街道', en: 'A street crisscrossed with power lines' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "157mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "640"} },
        { file: 'img_6448.jpg', caption: { zh: '城市後方的電視塔', en: 'A TV tower behind the city' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_6503.jpg', caption: { zh: '雙尖塔的紅磚教堂', en: 'A red-brick church with twin spires' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "34mm", "aperture": "f/10", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_6509.jpg', caption: { zh: '韓屋造型的星巴克', en: 'A hanok-style Starbucks' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "39mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "100"} },
        { file: 'img_6526.jpg', caption: { zh: '霓虹招牌亮起的夜街', en: 'A night street lit by neon signs' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "42mm", "aperture": "f/20", "shutter": "1/20s", "iso": "800"} }
      ] },

    { id: 'wudang', name: { zh: '武當山', en: 'Wudang Mountains' }, year: '2025.01', cover: 'img_5479.jpg', coverPos: '62%',
      intro: { zh: '梅竹書院第三屆，搭纜車上武當山，看索道穿過群峰。', en: 'Meizhu Academy, third edition: up Wudang by cable car, the ropeway threading through the peaks.' },
      photos: [
        { file: 'img_5415.jpg', caption: { zh: '山霧中的道觀屋頂', en: 'Taoist temple roofs in the mountain mist' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_5421.jpg', caption: { zh: '鐵鍊上鎖滿的同心鎖', en: 'Chains crowded with love locks' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_5479.jpg', caption: { zh: '越過山谷的纜車', en: 'Cable cars crossing the valley' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "50mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_5549.jpg', caption: { zh: '岩縫間的一張紙鈔', en: 'A banknote caught in a crack in the rock' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/22", "shutter": "1/40s", "iso": "3200"} },
        { file: 'img_5551.jpg', caption: { zh: '夕陽下的飛簷', en: 'Upturned eaves at sunset' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "46mm", "aperture": "f/6.3", "shutter": "1/100s", "iso": "100"} },
        { file: 'img_5553.jpg', caption: { zh: '黃昏時的山稜線', en: 'The ridgeline at dusk' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "31mm", "aperture": "f/6.3", "shutter": "1/100s", "iso": "100"} }
      ] },

    { id: 'xian-2025', name: { zh: '西安・冬', en: 'Xi’an · Winter' }, year: '2025.01', cover: 'img_5738.jpg', coverPos: '50%',
      intro: { zh: '梅竹書院第三屆，從武當山搭夜車抵達，冬天再訪兵馬俑與古城。', en: 'Meizhu Academy, third edition: in by night train from Wudang, the Terracotta Army and the old city in winter.' },
      photos: [
        { file: 'img_5634.jpg', caption: { zh: '枯枝間的圓月', en: 'A full moon between bare branches' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/6.3", "shutter": "1/320s", "iso": "4000"} },
        { file: 'img_5738.jpg', caption: { zh: '坑裡一排排的兵馬俑', en: 'Row upon row of terracotta warriors in the pit' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "227mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "3200"} },
        { file: 'img_5776.jpg', caption: { zh: '人群圍著展櫃裡的兵馬俑', en: 'A crowd around a terracotta warrior in a display case' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "79mm", "aperture": "f/4.5", "shutter": "1/60s", "iso": "6400"} }
      ] },

    { id: 'xiamen-quanzhou', name: { zh: '廈門・泉州', en: 'Xiamen & Quanzhou' }, year: '2025.01', cover: 'img_5365.jpg',
      intro: { zh: '梅竹書院第三屆的起點：經小三通到廈門，在泉州看古寺、石橋與夕陽。', en: 'Where the third Meizhu Academy trip began: across to Xiamen, then old temples, stone bridges and sunsets in Quanzhou.' },
      photos: [
        { file: 'img_5035.jpg', caption: { zh: '落日沉進樓群之間', en: 'The setting sun sinking between buildings' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "152mm", "aperture": "f/5", "shutter": "1/200s", "iso": "800"} },
        { file: 'img_5048.jpg', caption: { zh: '藍天下的塔頂', en: 'A pagoda top under a blue sky' }, w: 2000, h: 1298, exif: {"camera": "Canon EOS 700D", "focal": "40mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_5063.jpg', caption: { zh: '寺院大殿前的人潮', en: 'Crowds in front of the temple’s main hall' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "160"} },
        { file: '2d2902f6-9dfc-4e8e-bb39-7b3b1a0f9ada.jpg', caption: { zh: '夕陽前的古塔剪影', en: 'An old pagoda silhouetted against the sunset' }, w: 901, h: 901, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_5127.jpg', caption: { zh: '夜裡亮燈的塔', en: 'A pagoda lit up at night' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "32mm", "aperture": "f/4", "shutter": "1/25s", "iso": "6400"} },
        { file: 'img_5224.jpg', caption: { zh: '滿樹轉紅的葉子', en: 'A tree full of leaves turned red' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "48mm", "aperture": "f/7.1", "shutter": "1/100s", "iso": "100"} },
        { file: 'img_5236.jpg', caption: { zh: '樹叢裡的紅牆建築', en: 'A red-walled building among the trees' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "46mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_5277.jpg', caption: { zh: '伸向對岸的洛陽橋', en: 'Luoyang Bridge stretching to the far shore' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "32mm", "aperture": "f/9", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_5365.jpg', caption: { zh: '彩繪屋脊上的塔尖', en: 'A pagoda finial above a painted roof ridge' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_5377.jpg', caption: { zh: '石橋盡頭的牌樓與遊客', en: 'An archway at the end of the stone bridge, and visitors' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/320s", "iso": "100"} }
      ] },

    { id: 'hokuriku', name: { zh: '北陸', en: 'Hokuriku' }, year: '2024.08', cover: 'img_0293.jpg',
      intro: { zh: '和家人從富山一路往山裡走，立山黑部、上高地到白川鄉的夏天。', en: 'A family summer from Toyama into the mountains: Tateyama Kurobe, Kamikōchi and Shirakawa-gō.' },
      photos: [
        { file: 'img_9784.jpg', caption: { zh: '沿山邊駛過的橘色小火車', en: 'A little orange train running along the mountainside' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/5", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_9846.jpg', caption: { zh: '月台上停靠的電車', en: 'A train waiting at the platform' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/5", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_9944.jpg', caption: { zh: '山谷裡的湖', en: 'A lake in the valley' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_9991.jpg', caption: { zh: '越過山林的空中纜車', en: 'A ropeway gondola crossing the forest' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "70mm", "aperture": "f/6.3", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_9995.jpg', caption: { zh: '雲下的群山與湖', en: 'Mountains and a lake beneath the clouds' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_0031.jpg', caption: { zh: '黑部平的石碑', en: 'The stone marker at Kurobedaira' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "24mm", "aperture": "f/9", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_0058.jpg', caption: { zh: '山腳下的水壩', en: 'A dam at the foot of the mountain' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_0079.jpg', caption: { zh: '兩側山壁間的溪谷', en: 'A gorge between two mountain walls' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_0223.jpg', caption: { zh: '上高地與河童橋', en: 'Kamikōchi and the Kappa Bridge' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "27mm", "aperture": "f/5.6", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_0225.jpg', caption: { zh: '河灘與遠處的山谷', en: 'A riverbank and the valley beyond' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "24mm", "aperture": "f/5.6", "shutter": "1/640s", "iso": "100"} },
        { file: 'img_0254-2.jpg', caption: { zh: '夜裡亮著的便利商店', en: 'A convenience store glowing at night' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "157mm", "aperture": "f/20", "shutter": "1/25s", "iso": "1600"} },
        { file: 'img_0271.jpg', caption: { zh: '草叢後的合掌屋', en: 'A gasshō-zukuri house behind tall grass' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_0282.jpg', caption: { zh: '稻田邊的茅草屋', en: 'A thatched house beside the rice field' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_0286.jpg', caption: { zh: '山谷裡的合掌村', en: 'The gasshō village in the valley' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_0291.jpg', caption: { zh: '錯落的茅草屋頂', en: 'Thatched roofs at every angle' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/320s", "iso": "200"} },
        { file: 'img_0293.jpg', caption: { zh: '俯瞰白川鄉合掌村', en: 'Looking down on the gasshō village of Shirakawa-gō' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "135mm", "aperture": "f/5", "shutter": "1/200s", "iso": "125"} }
      ] },

    { id: 'xiamen', name: { zh: '廈門', en: 'Xiamen' }, year: '2024.07', cover: 'img_8748.jpg',
      intro: { zh: '梅竹書院第二屆的起點與終點：渡輪、海風，和飛往北京前的機場。', en: 'Where the second Meizhu Academy trip began and ended: ferries, sea breeze, and the airport before Beijing.' },
      photos: [
        { file: 'img_8151.jpg', caption: { zh: '石牆邊的陳嘉庚紀念柱', en: 'The Tan Kah Kee memorial column beside a stone wall' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "38mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_8228.jpg', caption: { zh: '海邊的摩天樓', en: 'Skyscrapers by the sea' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/11", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_8235-2.jpg', caption: { zh: '大橋下駛來的渡輪', en: 'A ferry coming in under the bridge' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "172mm", "aperture": "f/7.1", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_8241-2.jpg', caption: { zh: '渡輪與後面的跨海大橋', en: 'A ferry with the cross-sea bridge behind it' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "172mm", "aperture": "f/8", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_8250.jpg', caption: { zh: '小島上的紅白燈塔', en: 'A red-and-white lighthouse on a small island' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/10", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_8349.jpg', caption: { zh: '從石洞窺探亭子', en: 'Peeking at a pavilion through a hole in the rock' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "37mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_8391.jpg', caption: { zh: '望向遠方的鄭成功像', en: 'The statue of Koxinga gazing into the distance' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_8693.jpg', caption: { zh: '蘭亭集序', en: 'Preface to the Orchid Pavilion Poems' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "43mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "320"} },
        { file: 'img_8736.jpg', caption: { zh: '藍天裡的一架飛機', en: 'A plane in the blue sky' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "186mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_8739.jpg', caption: { zh: '跑道上滑行的客機', en: 'A jet taxiing on the runway' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "178mm", "aperture": "f/6.3", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_8740.jpg', caption: { zh: '停在機場的客機', en: 'A jet parked at the airport' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "200mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "100"} },
        { file: 'img_8746.jpg', caption: { zh: '機翼下忙著的地勤', en: 'Ground crew at work beneath the wing' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "113mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_8748.jpg', caption: { zh: '圓窗外的機尾', en: 'A tail fin outside the round window' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "143mm", "aperture": "f/7.1", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_8751.jpg', caption: { zh: '昏暗機艙裡的一扇窗', en: 'A single window in a dark cabin' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "100"} },
        { file: 'img_8756.jpg', caption: { zh: '從空中看海邊的城市', en: 'A seaside city from the air' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_8759.jpg', caption: { zh: '俯瞰廈門市', en: 'Looking down on Xiamen' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_8761.jpg', caption: { zh: '機翼下的城市', en: 'The city below the wing' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/9", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_8768.jpg', caption: { zh: '雲下層疊的東南丘陵', en: 'Layered southeastern hills beneath the clouds' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "89mm", "aperture": "f/9", "shutter": "1/500s", "iso": "100"} }
      ] },

    { id: 'xian-2024', name: { zh: '西安・夏', en: 'Xi’an · Summer' }, year: '2024.07', cover: 'img_9459.jpg', coverPos: '30%',
      intro: { zh: '梅竹書院第二屆搭高鐵來到西安：西交大、兵馬俑、古城牆和回民街。', en: 'Meizhu Academy, second edition, by high-speed rail to Xi\'an: XJTU, the Terracotta Army, the city wall and the Muslim Quarter.' },
      photos: [
        { file: 'img_9332.jpg', caption: { zh: '攤位上的手繪小畫框', en: 'Small hand-painted frames at a stall' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/10", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_9362.jpg', caption: { zh: '整片坑道的兵馬俑', en: 'A whole pit of terracotta warriors' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/100s", "iso": "800"} },
        { file: 'img_9393.jpg', caption: { zh: '西安交大的校門', en: 'The gate of Xi’an Jiaotong University' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "18mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_9459.jpg', caption: { zh: '陰天裡的大雁塔', en: 'The Giant Wild Goose Pagoda on an overcast day' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/250s", "iso": "100"} },
        { file: 'img_9642.jpg', caption: { zh: '回民街的烤串', en: 'Skewers on the grill at Muslim Quarter' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "34mm", "aperture": "f/5", "shutter": "1/60s", "iso": "100"} },
        { file: 'img_9647.jpg', caption: { zh: '掛滿題字的扇子', en: 'Fans covered in calligraphy' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/80s", "iso": "500"} },
        { file: 'img_9685.jpg', caption: { zh: '大樓之間的古樓', en: 'An old tower between modern buildings' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/7.1", "shutter": "1/400s", "iso": "100"} }
      ] },

    { id: 'beijing', name: { zh: '北京', en: 'Beijing' }, year: '2024.07', cover: 'img_8998.jpg', coverPos: '55%',
      intro: { zh: '梅竹書院第二屆的北京：長城、頤和園，還有夜裡的天安門。', en: 'Meizhu Academy, second edition, in Beijing: the Great Wall, the Summer Palace, and Tiananmen at night.' },
      photos: [
        { file: 'img_8835.jpg', caption: { zh: '霧裡的長城塔樓', en: 'A Great Wall watchtower in the fog' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/8", "shutter": "1/500s", "iso": "100"} },
        { file: 'img_8885.jpg', caption: { zh: '雨霧籠罩的山頭城樓', en: 'A hilltop tower wrapped in rain and mist' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "100mm", "aperture": "f/8", "shutter": "1/400s", "iso": "100"} },
        { file: 'img_8996.jpg', caption: { zh: '沿山脊蜿蜒的長城', en: 'The Great Wall winding along the ridge' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/200s", "iso": "100"} },
        { file: 'img_8998.jpg', caption: { zh: '一路爬上山頂的城牆', en: 'The wall climbing all the way to the summit' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/8", "shutter": "1/160s", "iso": "100"} },
        { file: 'img_9218.jpg', caption: { zh: '天安門與車軌', en: 'Tiananmen and light trails' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "64mm", "aperture": "f/25", "shutter": "8s", "iso": "100"} },
        { file: 'img_9250.jpg', caption: { zh: '頤和園一景', en: 'A view of the Summer Palace' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "44mm", "aperture": "f/13", "shutter": "1/400s", "iso": "100"} }
      ] },

    /* 單張：不屬於任何城市的照片。title（標題）可以不寫，有寫才會顯示。 */
    { id: 'singles', kind: 'singles', name: { zh: '單張', en: 'Singles' }, cover: 'r0006865.jpg',
      intro: { zh: '不屬於任何城市、但想留下的照片。', en: 'Photographs outside the city series.' },
      photos: [
        { file: 'img_5850.jpg', caption: { zh: '捷運車廂裡的吊環', en: 'Hand straps in an MRT car' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/100s", "iso": "400"} },
        { file: 'img_5989.jpg', caption: { zh: '球場上的投打對決', en: 'Pitcher versus batter' }, w: 2000, h: 1123, exif: {"camera": "Canon EOS 700D", "focal": "250mm", "aperture": "f/5.6", "shutter": "1/400s", "iso": "5000"} },
        { file: 'img_8168.jpg', caption: { zh: '客機降落松山機場與後面的圓山大飯店', en: 'A jet landing at Songshan Airport, the Grand Hotel behind it' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "135mm", "aperture": "f/5.6", "shutter": "1/1600s", "iso": "800"} },
        { file: 'img_8756.jpg', caption: { zh: '座無虛席的大巨蛋', en: 'A sold-out Taipei Dome' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "24mm", "aperture": "f/4.5", "shutter": "1/320s", "iso": "800"} },
        { file: 'img_8767.jpg', caption: { zh: '舉起相機的觀眾剪影', en: 'Silhouette of a fan raising a camera' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "89mm", "aperture": "f/4.5", "shutter": "1/200s", "iso": "6400"} },
        { file: 'img_8784.jpg', caption: { zh: 'PSY 開球儀式', en: 'PSY throwing the ceremonial first pitch' }, w: 2000, h: 1123, exif: {"camera": "Canon EOS 700D", "focal": "178mm", "aperture": "f/5.6", "shutter": "1/320s", "iso": "1600"} },
        { file: 'img_8789.jpg', caption: { zh: '看台上揮旗與煙霧', en: 'Flags waving in the stands amid smoke' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/5.6", "shutter": "1/200s", "iso": "1600"} },
        { file: 'img_8951.jpg', caption: { zh: '球場上的 KiiiKiii 與觀眾席的燈海', en: 'KiiiKiii on the field and a sea of lights in the stands' }, w: 2000, h: 1333, exif: {"camera": "Canon EOS 700D", "focal": "55mm", "aperture": "f/7.1", "shutter": "1/125s", "iso": "3200"} },
        { file: 'img_8969.jpg', caption: { zh: '雲層裡的落日', en: 'The sun setting through the clouds' }, w: 1333, h: 2000, exif: {"camera": "Canon EOS 700D", "focal": "127mm", "aperture": "f/7.1", "shutter": "1/4000s", "iso": "100"} },
        { file: 'dsc04533.jpg', caption: { zh: '草叢裡的紅鶴', en: 'A flamingo in the grass' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "267mm", "aperture": "f/6.3", "shutter": "1/1000s", "iso": "500"} },
        { file: 'dsc06346.jpg', caption: { zh: '夜空綻開的煙火', en: 'Fireworks bursting in the night sky' }, w: 2000, h: 1333, exif: {"camera": "Sony A7C II", "focal": "24mm", "aperture": "f/2.8", "shutter": "1/25s", "iso": "400"} },
        { file: 'r0006865.jpg', caption: { zh: '黑白的建築中庭', en: 'A building atrium in black and white' }, w: 1333, h: 2000, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/10", "shutter": "1/125s", "iso": "320"} },
        { file: 'dsc04456.jpg', caption: { zh: '層層掛滿的經幡', en: 'Layers of prayer flags overhead' }, w: 2000, h: 1333, exif: {"camera": "Sony A7 IV", "focal": "70mm", "aperture": "f/4", "shutter": "1/100s", "iso": "1000"} },
        { file: 'r0006421.jpg', caption: { zh: '夜裡的操場跑道，有人正在練跑', en: 'A running track at night, people out training' }, w: 2000, h: 1333, exif: {"camera": "Ricoh GR IIIx", "focal": "40mm", "aperture": "f/2.8", "shutter": "1/13s", "iso": "640"} }
      ] }
  ],

  /* ---------- 經歷（顯示在「關於」頁） ---------- */
  experience: [
    { time: '2024–2026', title: { zh: '梅竹書院', en: 'Meizhu Academy' },
      role: { zh: '隊長（兩屆）', en: 'Team leader (two editions)' },
      desc: { zh: '2024 至 2026 年參與四屆兩岸交流，其中兩屆擔任隊長：協助籌備行程、與對岸主辦單位溝通，並帶隊出發。',
              en: 'Took part in four cross-strait exchange programmes between 2024 and 2026 and led the team twice, helping plan the programme, coordinating with the hosts, and leading the delegation.' } },
    { time: '2026.01', title: { zh: '成都青年城市影像創作交流營', en: 'Chengdu Youth Urban Film Camp' },
      role: { zh: '學員', en: 'Participant' },
      desc: { zh: '七天內在成都完成拍攝與剪輯，以熊貓文化為主題完成一支短片。',
              en: 'Shot and edited a short film in seven days, built around Chengdu\'s panda culture.' } },
    { time: '2024–2026', title: { zh: '活動攝影', en: 'Event Photography' },
      role: { zh: '攝影', en: 'Photographer' },
      desc: { zh: '擔任校內活動與營隊攝影，包括學校「與校長有約」、管科機械聯合迎新宿營、2025 管科營、2026 機械系創科營，以及 2026 管科系小畢典。',
              en: 'Photographed university events and camps, including the university\'s Meet the President session, a joint freshman orientation camp, two high school outreach camps (2025, 2026), and the 2026 department graduation ceremony.' } },
    { time: '2025–2026', title: { zh: '陽明交大管科系學會', en: 'NYCU Management Science Student Association' },
      role: { zh: '活動長', en: 'Activities Officer' },
      desc: { zh: '負責系上活動的前期規劃與籌備，一學年約五場。',
              en: 'Planned and prepared around five department events over the academic year.' } }
  ]
};
