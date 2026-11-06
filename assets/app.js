
const T=(o)=>o==null?'':(typeof o==='string'?o:(o[L]||o.zh||''));
let L='zh';
try{L=localStorage.getItem('lang')||'zh'}catch(e){}



const UI={
  films:{zh:'影像作品',en:'Films'},photo:{zh:'攝影',en:'Photography'},exp:{zh:'經歷',en:'Experience'},contact:{zh:'聯絡',en:'Contact'},
  seriesH:{zh:'系列',en:'Series'},singles:{zh:'單張精選',en:'Selected singles'},
  cities:{zh:'城市系列',en:'City series'},citiesLink:{zh:'城市系列 →',en:'City series →'},seriesNav:{zh:'系列',en:'Series'},looseSub:{zh:'不屬於任何城市的單張作品',en:'Photographs outside the city series'},
  from:{zh:'出自',en:'From'},seriesSuffix:{zh:'系列',en:' series'},works:{zh:'影像作品',en:'Works'},about:{zh:'關於',en:'About'},watchYt:{zh:'在 YouTube 觀看 ↗',en:'Watch on YouTube ↗'},inSeries:{zh:'收錄於',en:'Part of'},film:{zh:'影片',en:'Film'},
  scroll:{zh:'往下看作品',en:'Scroll for work'},hint:{zh:'點右側下一張・按住暫停',en:'Tap right for next · hold to pause'},
  back:{zh:'← 回首頁',en:'← Home'},backAll:{zh:'← 城市系列',en:'← City series'},next:{zh:'下一個系列',en:'Next series'},
  allTitle:{zh:'城市系列',en:'City series'},allSub:{zh:'按旅程整理的攝影系列，一趟一組。',en:'Photo series, one per trip.'},
  photos:{zh:'張',en:'photos'},add:{zh:'＋ 新增城市',en:'+ Add a city'},addSub:{zh:'多開一個資料夾就會出現',en:'Add a folder and it appears'},
  sintro:{zh:'〔這個系列的介紹：什麼時候去、拍了什麼、想留下什麼。〕',en:'[Series introduction: when, what, why.]'},
  year:{zh:'年份',en:'Year'},runtime:{zh:'片長',en:'Runtime'},role:{zh:'擔任',en:'Role'},awards:{zh:'得獎',en:'Awards'},
  statement:{zh:'創作理念',en:'Statement'},watch:{zh:'YouTube／Vimeo 影片位置',en:'YouTube / Vimeo video'},stills:{zh:'劇照',en:'Stills'},
  email:{zh:'Email',en:'Email'},ig:{zh:'Instagram',en:'Instagram'},copy:{zh:'複製',en:'Copy'},copied:{zh:'已複製',en:'Copied'},
  legend:{zh:'這是框架預覽。<b>〔金色括號〕</b>是要填的文字，灰色方塊是照片位置，左下角標著檔案要放哪。',en:'Framework preview. <b>[Gold brackets]</b> are text to fill; grey boxes are photo slots labelled with their file path.'}
};
const tones=['#232326','#29292c','#1f1f21','#2d2c2a','#262628','#222224'];
const ph=(shape,path,tone,alt)=>`<div class="ph ${shape}" data-path="${path}" style="--tone:${tone||tones[(path.length*7)%tones.length]}"><img src="${path}" alt="${(alt||'').replace(/"/g,'&quot;')}" loading="lazy" decoding="async" onerror="this.remove()"></div>`;
const thumb=p=>/^photos\/(series|works|films)\//.test(p)?p.replace(/^photos\//,'photos/thumbs/'):p;
const altOf=m=>m?T(m.caption||m.title||m.place||''):'';
const shapeOf=x=>x&&x.w&&x.h?(x.h>x.w?'p':'l'):((x&&x.s)||'l');
const ratioOf=x=>x&&x.w&&x.h?x.h/x.w:(shapeOf(x)==='p'?4/3:3/4);
const yt=id=>`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const coverOf=s=>`photos/series/${s.id}/${s.cover||(s.photos[0]&&s.photos[0].file)||'cover.jpg'}`;
const isLoose=s=>!!s&&s.kind==='singles';
const cities=()=>C.series.filter(s=>!isLoose(s));
const sname=s=>isLoose(s)?T(s.name):T(s.name)+T(UI.seriesSuffix);
const f=(s)=>s.replace(/(〔[^〕]*〕|\[[^\]]*\])/g,'<span class="fill">$1</span>');

let lbList=[],lbIdx=0;
function nav(solid){
  return `<header class="nav ${solid?'solid':''}"><div class="wrap">
    <a class="brand" href="#home">${C.name.en}</a>
    <div class="links">
      <button class="sec" data-go="works">${T(UI.works)}</button>
      <button class="sec" data-go="photo">${T(UI.photo)}</button>
      <a class="sec" href="#series">${T(UI.seriesNav)}</a>
      <a class="sec" href="#about">${T(UI.about)}</a>
      <button class="sec" data-go="contact">${T(UI.contact)}</button>
      <button class="lang" id="lang">${L==='zh'?'EN':'中'}</button>
    </div></div></header>`;
}
function seriesCard(s){
  return `<a class="scard" href="#s-${s.id}">${ph('',thumb(coverOf(s)),null,T(s.name))}
    <div class="meta"><span><span class="nm">${s.name.zh}</span></span><span class="en">${s.name.en}</span></div>
    <div class="mono">${s.year?f(s.year)+' · ':''}${s.photos.length} ${T(UI.photos)}</div></a>`;
}
let verIdx=0;
function workBlock(w){
  const v=w.versions[verIdx]||w.versions[0];
  return `<div class="work">
    <button class="workimg" data-lb="work" data-i="0"><img src="${w.img}" alt="${T(w.versions[0].title)}"></button>
    <div class="worktext">
      <div class="tabs" role="tablist">${w.versions.map((x,i)=>`<button role="tab" aria-selected="${i===verIdx}" class="tab ${i===verIdx?'on':''}" data-ver="${i}">${x.title.zh}</button>`).join('')}</div>
      <p class="mono" style="margin:0 0 6px">${w.versions.length} ${L==='zh'?'個版本・同一張照片':'entries · one photograph'}</p>
      <h4 class="wtitle">${v.title.zh}${L==='en'?`<em>${f(v.title.en)}</em>`:''}</h4>
      <div class="facts">
        <div><span class="label">${L==='zh'?'比賽':'Competition'}</span>${f(T(v.contest))}${v.category?`<span style="display:block;font-size:12px;color:var(--mute);margin-top:2px">${T(v.category)}</span>`:''}</div>
        <div><span class="label">${T(UI.awards)}</span><span class="award" style="margin:0">${f(T(v.award))}</span></div>
        <div><span class="label">${T(UI.year)}</span>${f(v.year)}</div>
      </div>
      ${v.link?`<p style="margin:-8px 0 26px"><a class="seclink" href="${v.link}" target="_blank" rel="noopener">${L==='zh'?'查看得獎頁面 ↗':'View on the awards site ↗'}</a></p>`:''}
      ${w.intro?`<div class="wsec"><span class="label">${L==='zh'?'作品簡介':'About the work'}</span><p class="wlead">${f(T(w.intro))}</p></div>`:''}
      ${w.composition?`<div class="wsec"><span class="label">${L==='zh'?'構圖理念':'Composition'}</span><p class="wbody">${f(T(w.composition))}</p></div>`:''}
      <p class="place" style="margin:4px 0 14px">${f(T(w.place))}${w.from&&C.series.find(x=>x.id===w.from)?` · <a class="seclink" href="#s-${w.from}">${sname(C.series.find(x=>x.id===w.from))} →</a>`:''}</p>${exifRow(w.exif)}
    </div></div>`;
}
function home(){
  return `<div class="hero" id="hero">
      <div class="bars">${C.hero.map((_,i)=>`<div class="bar"><i id="b${i}"></i></div>`).join('')}</div>
      ${C.hero.map((h,i)=>`<div class="slide" id="sl${i}">${ph('',`photos/${h.file}`)}</div>`).join('')}
      <div class="shade"></div>
      ${nav(false)}
      <div class="hint mono">${T(UI.hint)}</div>
      <div class="cap"><div class="wrap"><h2 id="capT"></h2><p id="capS"></p></div></div>
      <div class="cue mono">${T(UI.scroll)} ↓</div>
      <a class="herolink" href="#series"><span class="label">${cities().length} ${L==='zh'?'個系列':'series'}</span><span>${T(UI.citiesLink)}</span></a>
    </div>
    <div class="wrap">
      <p class="intro">${f(T(C.intro))}</p>
      <section class="blk" id="works">
        <div class="sechead"><h3>${L==='zh'?'Works<small>影像作品</small>':'Works'}</h3></div>
        ${C.works.map(workBlock).join('')}
        ${C.films.map(fm=>{const se=C.series.find(x=>x.id===fm.series);return `<div class="film2">
          <a class="thumb" href="https://youtu.be/${fm.yt}" target="_blank" rel="noopener" style="display:block">${ph('w',fm.thumb||yt(fm.yt),'#1c1d1f')}<span class="play">▶</span></a>
          <div class="row2"><div><span class="label">${T(UI.film)}</span><h4>${f(T(fm.title))}</h4></div><div class="mono">${f(fm.year)} · ${f(fm.runtime)}${se?` · <a class="seclink" href="#s-${se.id}">${T(UI.inSeries)}：${sname(se)} →</a>`:''}</div></div>
          <div class="filmtext"><p class="wbody" style="margin:14px 0 18px">${f(T(fm.note))}</p>
          <dl class="credits">${(fm.credits||[]).map(c=>`<div><dt>${T(c.k)}</dt><dd>${T(c.v)}</dd></div>`).join('')}</dl>
          <p style="margin:18px 0 0"><a class="seclink" href="https://youtu.be/${fm.yt}" target="_blank" rel="noopener">${T(UI.watchYt)}</a></p></div></div>`}).join('')}
      </section>
      <section class="blk" id="photo">
        <div class="sechead"><h3>${L==='zh'?'Selected<small>精選</small>':'Selected'}</h3><a class="seclink" href="#series">${T(UI.citiesLink)}</a></div>
        <div class="masonry" data-mason="picks"></div>
      </section>
      <section class="blk" id="contact">
        <div class="sechead"><h3>${L==='zh'?'Contact<small>聯絡</small>':'Contact'}</h3></div>
        ${contactBlock()}
      </section>
      <footer class="mono">© 2026 ${T(C.name)}</footer>
    </div>`;
}
function seriesPage(id){
  const i=C.series.findIndex(s=>s.id===id); if(i<0) return home();
  const s=C.series[i], nx=C.series[(i+1)%C.series.length];
  return `${nav(true)}<div class="split">
    <aside class="sp-cover">
      <img src="${coverOf(s)}" alt="${s.name.zh}" style="object-position:${s.coverPos||'50%'} 50%">
      <div class="sp-cap">
        <div class="mono">${s.year?f(s.year)+' · ':''}${s.photos.length} ${T(UI.photos)}</div>
        <h1>${s.name.zh}<em>${s.name.en}</em></h1>
        <p>${f(T(s.intro||UI.sintro))}</p>
      </div>
    </aside>
    <div class="sp-body">
      <a class="back" href="#series">${T(UI.backAll)}</a>
      ${C.films.filter(x=>x.series===s.id).map(fm=>`<a class="filmstrip" href="https://youtu.be/${fm.yt}" target="_blank" rel="noopener">
        <div class="thumb" style="position:relative">${ph('w',fm.thumb||yt(fm.yt),'#1c1d1f')}<span class="play" style="position:absolute;inset:0;margin:auto;width:56px;height:56px;border:1px solid rgba(236,235,231,.75);border-radius:50%;display:grid;place-items:center">▶</span></div>
        <div><span class="label">${T(UI.film)}</span><h4 style="font-family:var(--f-zh-title);font-size:22px;letter-spacing:.08em;margin:6px 0">${f(T(fm.title))}</h4><div class="mono">${f(fm.year)} · ${f(fm.runtime)}</div><p style="color:var(--gold);margin:12px 0 0;font-size:13px">${T(UI.watchYt)}</p></div></a>`).join('')}
      <div class="masonry" data-mason="${s.id}"></div>
      <a class="nextlink" href="#s-${nx.id}"><span><span class="label">${T(UI.next)}</span><br><span class="nm">${nx.name.zh}</span> <span class="mono">${nx.name.en}</span></span><span style="font-size:28px">→</span></a>
      <footer class="mono">© 2026 ${T(C.name)}</footer>
    </div></div>`;
}
function contactBlock(){
  return `<div class="contact">
          <div class="item"><div class="label">${T(UI.email)}</div><div class="val">${f(C.contact.email)}</div><button class="mono" data-copy="${C.contact.email}" style="margin-top:10px">${T(UI.copy)}</button></div>
          ${C.contact.ig?`<div class="item"><div class="label">${T(UI.ig)}</div><div class="val">${f(C.contact.ig)}</div></div>`:''}
        </div>`;
}
function aboutPage(){
  return `${nav(true)}<div class="wrap">
    <a class="back" href="#home">${T(UI.back)}</a>
    <div class="about">
      ${ph('p','photos/about/portrait.jpg','#202022')}
      <div><h1 style="margin:0 0 24px;font-family:var(--f-zh-title);font-weight:600;font-size:clamp(40px,6vw,72px);letter-spacing:.1em;line-height:1">${C.name.zh}<em style="display:block;font-family:var(--f-display);font-weight:400;font-size:.45em;color:var(--mute);letter-spacing:.02em;margin-top:10px">${C.name.en}</em></h1>
        <p class="bio">${f(T(C.about))}</p>
        <div class="sechead" style="margin:56px 0 0"><h3 style="font-size:30px">${L==='zh'?'Awards<small>獲獎</small>':'Awards'}</h3></div>
        <div class="exp">${C.works.flatMap(w=>w.versions).slice().sort((a,b)=>{const r=x=>['Gold','Silver','Bronze'].findIndex(k=>(x.award.en||'').includes(k));return (b.year>a.year)-(b.year<a.year)||r(a)-r(b)}).map(v=>`<div class="row"><span class="mono">${f(v.year)}</span><div><div class="t">${T(v.contest)}</div><div class="r">${v.category?T(v.category):''}</div></div><div><span class="award" style="margin:0">${f(T(v.award))}</span><div class="r" style="margin-top:4px">${L==='zh'?'《'+v.title.zh+'》':'<i>'+v.title.en+'</i>'}</div></div></div>`).join('')}</div>
        <div class="sechead" style="margin:56px 0 0"><h3 style="font-size:30px">${L==='zh'?'Experience<small>經歷</small>':'Experience'}</h3></div>
        <div class="exp">${C.experience.map(e=>`<div class="row"><span class="mono">${f(e.time)}</span><div><div class="t">${T(e.title)}</div><div class="r">${f(T(e.role))}</div></div><div>${f(T(e.desc))}</div></div>`).join('')}</div>
        <div class="sechead" style="margin:56px 0 0" id="about-contact"><h3 style="font-size:30px">${L==='zh'?'Contact<small>聯絡</small>':'Contact'}</h3></div>
        ${contactBlock()}
      </div></div>
    <footer class="mono">© 2026 ${T(C.name)}</footer></div>`;
}
function allPage(){
  return `${nav(true)}<div class="wrap">
    <a class="back" href="#home">${T(UI.back)}</a>
    <div class="ptitle"><h1>${T(UI.allTitle)}<em>${L==='zh'?'City series':''}</em></h1><p>${T(UI.allSub)}</p></div>
    <div class="series">${cities().map(seriesCard).join('')}</div>
    ${C.series.filter(isLoose).map(s=>`<div class="sechead" style="margin-top:72px"><h3 style="font-size:30px">${L==='zh'?'Singles<small>單張</small>':'Singles'}</h3><span class="mono">${T(UI.looseSub)}</span></div><div class="series">${seriesCard(s)}</div>`).join('')}
    <footer class="mono">© 2026 ${T(C.name)}</footer></div>`;
}
/* Pinterest 排法：放進最短的欄，再微裁每欄最後一張讓底部切齊（最多裁 15%） */
function layoutMasonry(){
  document.querySelectorAll('[data-mason]').forEach(el=>{
    const key=el.dataset.mason,items=itemsFor(key),W=el.clientWidth;if(!W)return;
    const n=W<720?2:3,g=12,w=(W-g*(n-1))/n;
    const cols=Array.from({length:n},()=>({h:-g,items:[]}));
    items.forEach((x,i)=>{const h=w*ratioOf(x);const c=cols.reduce((a,b)=>b.h<a.h?b:a);c.items.push({i,h});c.h+=g+h});
    const used=cols.filter(c=>c.items.length),T0=Math.min(...used.map(c=>c.h));
    if(used.every(c=>c.h-T0<=0.15*c.items[c.items.length-1].h))used.forEach(c=>{c.items[c.items.length-1].h-=c.h-T0});
    el.innerHTML=cols.map(c=>`<div class="mcol">${c.items.map(it=>`<button data-lb="${key}" data-i="${it.i}" style="height:${it.h.toFixed(1)}px">${ph('',thumb(pathFor(key,it.i)),null,altOf(itemsFor(key)[it.i]))}</button>`).join('')}</div>`).join('');
  });
}
let rz;window.addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(layoutMasonry,120)});
/* hero slideshow */
let cur=0,t=0,paused=false,last=0,raf=0;const D=5000;
function showSlide(i){
  const n=C.hero.length;cur=(i+n)%n;t=0;
  for(let j=0;j<n;j++){const s=document.getElementById('sl'+j),b=document.getElementById('b'+j);if(!s)return;s.classList.toggle('on',j===cur);b.style.width=j<cur?'100%':'0'}
  document.getElementById('capT').innerHTML=f(T(C.hero[cur].title));
  document.getElementById('capS').innerHTML=f(T(C.hero[cur].sub));
}
function tick(now){
  const b=document.getElementById('b'+cur);if(!b){raf=0;return}
  const dt=now-(last||now);last=now;if(!paused){t+=dt;if(t>=D)showSlide(cur+1)}
  const bb=document.getElementById('b'+cur);if(bb)bb.style.width=Math.min(100,t/D*100)+'%';
  raf=requestAnimationFrame(tick);
}
function bindHero(){
  const h=document.getElementById('hero');if(!h)return;
  showSlide(0);last=0;if(!raf)raf=requestAnimationFrame(tick);
  let down=0;
  h.addEventListener('pointerdown',e=>{if(e.target.closest('.nav,.herolink'))return;paused=true;down=performance.now()});
  h.addEventListener('pointerup',e=>{if(e.target.closest('.nav,.herolink'))return;paused=false;if(performance.now()-down<250){const r=h.getBoundingClientRect();showSlide(e.clientX-r.left>r.width/2?cur+1:cur-1)}});
  h.addEventListener('pointerleave',()=>{paused=false});
}

/* lightbox */
function shapesFor(key){
  if(key==='picks')return C.singles.map(shapeOf);
  if(key==='work')return ['img'];
  const s=C.series.find(x=>x.id===key);return s?s.photos.map(shapeOf):[];
}
function itemsFor(key){
  if(key==='picks')return C.singles;
  const s=C.series.find(x=>x.id===key);return s?s.photos:[];
}
function pathFor(key,i){
  if(key==='picks')return `photos/${C.singles[i].file}`;
  const se=C.series.find(x=>x.id===key);return se?`photos/series/${key}/${se.photos[i].file}`:'';
}
function openLb(key,i){lbList=shapesFor(key);lbIdx=i;lbKey=key;drawLb()}
let lbKey='';
function exifRow(e){
  if(!e||!Object.keys(e).length)return '';const A='–';
  const it=[[L==='zh'?'相機':'Camera',e.camera],[L==='zh'?'焦距':'Focal',e.focal],[L==='zh'?'光圈':'Aperture',e.aperture],[L==='zh'?'快門':'Shutter',e.shutter],['ISO',e.iso]];
  return `<div class="exif">${it.map(([k,v])=>`<div><span>${k}</span>${f(v||A)}</div>`).join('')}</div>`;
}
function metaFor(key,i){
  if(key==='picks')return C.singles[i];
  if(key==='work')return {place:C.works[0].place,exif:C.works[0].exif};
  const se=C.series.find(x=>x.id===key);const m=(se&&se.photos[i])||{};
  return m;
}
function drawLb(){
  closeLb();const d=document.createElement('div');d.id='lb';
  const sh=lbList[lbIdx],m=metaFor(lbKey,lbIdx),panel=lbKey==='picks';
  d.className='lb'+(panel?' panel':'');
  const body=`<img src="${sh==='img'?C.works[0].img:pathFor(lbKey,lbIdx)}" alt="">`;
  let src='';
  if(panel){const se=m.from&&C.series.find(x=>x.id===m.from);if(se)src=`<p style="margin:20px 0 0"><a class="lbsrc" href="#s-${se.id}">${T(UI.from)}：${sname(se)} →</a></p>`}
  const info=panel
    ?`<div class="info"><span class="label">${L==='zh'?'精選':'Selected'} ${String(lbIdx+1).padStart(2,'0')}</span><h4>${f(T(m.title))}</h4><p class="desc">${f(T(m.text))}</p><p class="place" style="margin:0 0 16px">${f(T(m.place))}</p>${exifRow(m.exif)}${src}</div>`
    :`<div class="cap2">${m.title?`<span class="place" style="font-weight:600">${f(T(m.title))}</span>`:''}${m.caption?`<span class="place" style="color:var(--paper)">${f(T(m.caption))}</span>`:''}${m.place?`<span class="place">${f(T(m.place))}</span>`:''}${exifRow(m.exif)}</div>`;
  const multi=lbList.length>1;
  d.innerHTML=`<div class="stage">${body}</div>${info}<button class="x" aria-label="Close">×</button>${multi?'<button class="pv" aria-label="Previous">‹</button><button class="nx" aria-label="Next">›</button>':''}${multi?`<div class="cnt mono">${lbIdx+1} / ${lbList.length}</div>`:''}`;
  if(!panel){const im=d.querySelector('.stage img'),cp=d.querySelector('.cap2');
    const place=()=>{if(!cp)return;cp.style.left=cp.style.top='';const md=getComputedStyle(cp).getPropertyValue('--m').trim();if(!md){cp.classList.add('on');return}const r=im.getBoundingClientRect();if(!r.width)return;if(md==='below'){cp.style.top=(r.bottom+18)+'px'}else{cp.style.left=(r.right+28)+'px';cp.style.top=(r.bottom-cp.offsetHeight)+'px'}cp.classList.add('on')};
    im.addEventListener('load',place);requestAnimationFrame(place);window.addEventListener('resize',place);d._place=place}
  const a=d.querySelector('.lbsrc');if(a)a.onclick=closeLb;
  d.querySelector('.x').onclick=closeLb;
  if(multi){
    d.querySelector('.pv').onclick=()=>{lbIdx=(lbIdx-1+lbList.length)%lbList.length;drawLb()};
    d.querySelector('.nx').onclick=()=>{lbIdx=(lbIdx+1)%lbList.length;drawLb()};
  }
  d.addEventListener('click',e=>{if(e.target===d||e.target.classList.contains('stage'))closeLb()});
  if(multi){
    let sx=null,sy=0;
    d.addEventListener('touchstart',e=>{const t=e.touches[0];sx=t.clientX;sy=t.clientY},{passive:true});
    d.addEventListener('touchend',e=>{if(sx===null)return;const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;sx=null;
      if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3){lbIdx=(lbIdx+(dx<0?1:-1)+lbList.length)%lbList.length;drawLb()}});
    [1,-1].forEach(k=>{const j=(lbIdx+k+lbList.length)%lbList.length;if(lbList[j]!=='img'){const im=new Image();im.src=pathFor(lbKey,j)}});
  }
  const im0=d.querySelector('.stage img');if(im0)im0.alt=altOf(metaFor(lbKey,lbIdx));
  document.body.appendChild(d);
}
function closeLb(){const o=document.getElementById('lb');if(o){if(o._place)window.removeEventListener('resize',o._place);o.remove()}}
document.addEventListener('keydown',e=>{if(!document.getElementById('lb'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowRight'){lbIdx=(lbIdx+1)%lbList.length;drawLb()}if(e.key==='ArrowLeft'){lbIdx=(lbIdx-1+lbList.length)%lbList.length;drawLb()}});

/* router */
let pendingScroll=null;
function render(){
  const h=(location.hash||'#home').slice(1);
  let html;
  if(h.startsWith('s-'))html=seriesPage(h.slice(2));
  else if(h==='series')html=allPage();
  else if(h==='about')html=aboutPage();
  else html=home();
  closeLb();
  if(raf){cancelAnimationFrame(raf);raf=0}
  document.getElementById('app').innerHTML=html;
  document.documentElement.lang=L==='zh'?'zh-Hant':'en';
  const base=C.name.en+(L==='zh'?'｜攝影作品集':' · Photography');
  const se=h.startsWith('s-')&&C.series.find(x=>x.id===h.slice(2));
  document.title=se?`${T(se.name)} · ${base}`:h==='series'?`${T(UI.allTitle)} · ${base}`:h==='about'?`${T(UI.about)} · ${base}`:base;
  if(C.analytics&&window.goatcounter&&window.goatcounter.count)window.goatcounter.count({path:'/'+(h==='home'?'':h),title:document.title});
  bindHero();
  layoutMasonry();
  if(pendingScroll){const el=document.getElementById(pendingScroll);pendingScroll=null;if(el)el.scrollIntoView()}else window.scrollTo(0,0);
}
document.addEventListener('click',e=>{
  const go=e.target.closest('[data-go]');
  if(go){const id=go.dataset.go;const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});else{pendingScroll=id;location.hash='home'}return}
  if(e.target.closest('#lang')){L=L==='zh'?'en':'zh';try{localStorage.setItem('lang',L)}catch(_){}const y=window.scrollY;render();window.scrollTo(0,y);return}
  const vb=e.target.closest('[data-ver]');if(vb){verIdx=+vb.dataset.ver;const el=document.querySelector('.work');if(el)el.outerHTML=workBlock(C.works[0]);return}
  const lb=e.target.closest('[data-lb]');if(lb){openLb(lb.dataset.lb,+lb.dataset.i);return}
  const cp=e.target.closest('[data-copy]');
  if(cp){const v=cp.dataset.copy;const done=()=>{cp.textContent=T(UI.copied)};if(navigator.clipboard)navigator.clipboard.writeText(v).then(done,done);else done()}
});
window.addEventListener('hashchange',render);
render();

if(C.analytics){const g=document.createElement('script');g.async=true;g.src='https://gc.zgo.at/count.js';g.dataset.goatcounter=`https://${C.analytics}.goatcounter.com/count`;g.dataset.goatcounterSettings='{"no_onload":true}';g.onload=()=>{const h=(location.hash||'#home').slice(1);window.goatcounter.count({path:'/'+(h==='home'?'':h),title:document.title})};document.head.appendChild(g)}
