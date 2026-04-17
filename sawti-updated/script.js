/* ═══════════════════════════════════════════════
   SAWTI — script.js  |  CSP-safe, no inline onclick
   ═══════════════════════════════════════════════ */

var IMG = {
  hero:'hero_final.jpg', img1:'img%201.png', img3:'img3.jpg',
  img4:'img4.png', img5:'img5.jpg', img6:'img6.jpg',
};

var SM = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var LG = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* Category keys — language-independent */
var CAT_KEYS = ['all','news-programs','pictures','authors','legal-advice','media'];
var _activeCatKey = 'all';

/* ════════════════════════════════════
   CONTENT
   ════════════════════════════════════ */
var CONTENT = {
en:{
  dir:'ltr', navHome:'Home', navAbout:'About Sawti', navContact:'Contact', liveLabel:'Live',
  headlines:[
    {text:"Al-Sharq Channel makes surprise move to Riyadh — 500 employees affected",href:'#'},
    {text:"New Arab media platform launching in UAE under Abbas Nasser",href:'#'},
    {text:"Radio Damas relaunches with modernised format targeting Arab diaspora",href:'#'},
    {text:"Mazaj Radio 98.7 FM begins trial broadcast in Lebanon",href:'#'},
    {text:"Arab Idol returns with refreshed format and new judges panel",href:'#'},
    {text:"Radio Monte Carlo International faces audience decline amid digital shift",href:'#'},
  ],
  heroBadge:'Breaking News',
  heroTitle:"After Al-Arabiya, Al-Hadath & MBC — Al-Sharq Channel's Surprise Relocation to Riyadh",
  heroTitleCls:'en',
  heroDek:"An administrative decision to move Al-Sharq's headquarters to Riyadh between March 1 and May 1 disrupts nearly 500 Dubai-based employees.",
  heroDekCls:'', heroDate:'February 24, 2026', heroCta:'Read Full Article',
  heroActionsAr:false, heroImg:'', scrollLabel:'Scroll',
  taglineStrip:"An independent journalism platform that tells people's stories and amplifies the voice of truth across borders",
  cats:['All','News Programs','Pictures','Authors','Legal advice','Media'],
  sections:[
    {
      name:'English News', nameCls:'', sub:'Latest Coverage', subCls:'', viewAll:'View all',
      featured:{tag:"Editor's Pick",tagCls:'',h:"Al-Sharq Channel: 500 Employees Face Riyadh Relocation Deadline",hCls:'en',p:"An administrative order to move Al-Sharq headquarters to Riyadh by May 1 has thrown nearly 500 Dubai-based staff into uncertainty.",pCls:'',date:'Posted on: February 24, 2026',dateCls:'',cta:'Read Full Article',img:'img3',href:'#',catKey:'media'},
      cards:[
        {img:'img4',tag:'Media',tagCls:'',h:'The Digital Shift Reshaping Arab Broadcasting',hCls:'en',p:'How streaming platforms and social media are forcing Arab broadcasters to rethink their entire model.',pCls:'',date:'Feb 24, 2026',href:'#',catKey:'media'},
        {img:'img5',tag:'Authors',tagCls:'',h:'Sara Dandrawy on 25 Questions and Candid Journalism',hCls:'en',p:"Sara Dandrawy reflects on her career hosting Al-Arabiya's beloved interview segment.",pCls:'',date:'Feb 24, 2026',href:'#',catKey:'authors'},
        {img:'img6',tag:'News Programs',tagCls:'',h:'Arab Idol Returns: What the New Season Means for Pan-Arab TV',hCls:'en',p:'The revival signals renewed confidence in live broadcast formats across the region.',pCls:'',date:'Feb 24, 2026',href:'#',catKey:'news-programs'},
      ],
    },
    {
      name:'Arabic News', nameCls:'', sub:'أخبار عربية', subCls:'ar', viewAll:'View all',
      featured:{tag:"Editor's Pick",tagCls:'',h:'Preparations to Launch a New Media Platform in the UAE',hCls:'en',p:"Abbas Nasser is leading preparations to launch a new youth-focused news platform in the UAE.",pCls:'',date:'Posted on: February 24, 2026',dateCls:'',cta:'Read Full Article',img:'img3',href:'#',catKey:'media'},
      cards:[
        {img:'img3',tag:'Media',tagCls:'',h:'New Media Platform Launching in the UAE',hCls:'en',p:"Abbas Nasser leads preparations for a fresh youth-focused outlet amid mystery over its branding.",pCls:'',date:'Feb 24, 2026',href:'#',catKey:'media'},
        {img:'img4',tag:'News Programs',tagCls:'',h:'Arab Idol: The Comeback Everyone Is Watching',hCls:'en',p:'The beloved pan-Arab competition returns with a refreshed format and new judges.',pCls:'',date:'Feb 24, 2026',href:'#',catKey:'news-programs'},
        {img:'img5',tag:'Authors',tagCls:'',h:"What Happened to Al-Arabiya's 25 Questions?",hCls:'en',p:'Sara Dandrawy hosted this beloved segment conducting candid interviews with guests from all fields.',pCls:'',date:'Feb 24, 2026',href:'#',catKey:'authors'},
      ],
    },
    {
      name:'French News', nameCls:'', sub:'Actualités en français', subCls:'', viewAll:'Voir tout',
      featured:null,
      cards:[
        {img:'img6',tag:'Media',tagCls:'',h:"Nouveau pari sur l'audio : lancement de la radio « Mazaj »",hCls:'fr',p:"« Mazaj » (98,7 FM) a démarré une diffusion d'essai au Liban.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'media'},
        {img:'img1',tag:'Media',tagCls:'',h:'La scène médiatique syrienne se prépare à la relance de Radio Damas',hCls:'fr',p:"Radio Damas revient le 4 février dans une nouvelle formule modernisée.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'media'},
        {img:'img4',tag:'Authors',tagCls:'',h:"Vacances — ou plus ? La vérité sur l'absence de Maha Abdullah",hCls:'fr',p:"L'absence récente de Maha Abdullah à l'antenne de Sky News Arabia a alimenté les rumeurs.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'authors'},
      ],
    },
  ],
  ftTagline:"An independent journalism platform that tells people's stories and amplifies the voice of truth across borders.",
  ftTaglineCls:'', ftNavTitle:'Navigate',
  ftNavLinks:[['Home','index.html'],['About Sawti','about.html'],['Contact us','contact.html']],
  ftCatTitle:'Categories',
  ftCatLinks:[['News Programs','#'],['Pictures','#'],['Authors','#'],['Legal advice','#'],['Media','#']],
  ftAddrTitle:'Address', ftAddress:'83 Avenue Émile Zola<br>75015 Paris, France',
  ftEmail:'info@sawti.eu', ftCopy:'© 2026 Sawti. All rights reserved.',
  ftMotto:'Because silence is not an option.',
},
ar:{
  dir:'rtl', navHome:'الرئيسية', navAbout:'عن صوتي', navContact:'اتصل بنا', liveLabel:'عاجل',
  headlines:[
    {text:'بعد "العربية" و"الحدث" و"إم بي سي" قرار مفاجئ بانتقال فوري لـ"الشرق" إلى الرياض',href:'#'},
    {text:'تحضيرات لإطلاق منصة إعلامية جديدة في الإمارات بقيادة عباس ناصر',href:'#'},
    {text:'إذاعة دمشق تستعد للعودة بحلة جديدة مطلع فبراير',href:'#'},
    {text:'انطلاق البث التجريبي لراديو "مزاج" 98.7 FM في لبنان',href:'#'},
    {text:'عرب آيدول يعود بموسم جديد وتشكيلة لجنة تحكيم متجددة',href:'#'},
    {text:'راديو مونتي كارلو الدولي يواجه تراجع نسب الاستماع في ظل التحول الرقمي',href:'#'},
  ],
  heroBadge:'عاجل',
  heroTitle:'بعد "العربية" و"الحدث" و"إم بي سي" قرار مفاجئ بانتقال فوري لـ"الشرق" إلى الرياض',
  heroTitleCls:'ar',
  heroDek:'قرار إداري بنقل مقر قناة "الشرق" إلى الرياض بين 1 مارس و1 مايو يربك نحو 500 موظف في دبي.',
  heroDekCls:'ar', heroDate:'٢٤ فبراير ٢٠٢٦', heroCta:'اقرأ المقال كاملاً',
  heroActionsAr:true, heroImg:'', scrollLabel:'مرر',
  taglineStrip:'منصة صحافة مستقلة تروي قصص الناس وتُضخّم صوت الحقيقة عبر الحدود',
  cats:['الكل','البرامج الإخبارية','الصور','الكتّاب','الاستشارات القانونية','الإعلام'],
  sections:[
    {
      name:'أخبار إنجليزية', nameCls:'ar', sub:'English News', subCls:'', viewAll:'عرض الكل',
      featured:{tag:'اختيار المحرر',tagCls:'ar',h:'قناة الشرق: 500 موظف يواجهون مهلة الانتقال إلى الرياض',hCls:'ar',p:'قرار إداري بنقل مقر قناة الشرق إلى الرياض يربك مئات الموظفين.',pCls:'ar',date:'نُشر في: ٢٤ فبراير ٢٠٢٦',dateCls:'ar',cta:'اقرأ المقال كاملاً',img:'img3',href:'#',catKey:'media'},
      cards:[
        {img:'img4',tag:'الإعلام',tagCls:'rtl',h:'التحول الرقمي يعيد تشكيل البث العربي',hCls:'ar',p:'كيف تُجبر المنصات الرقمية وسائل الإعلام العربية على إعادة التفكير في نموذجها.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'media'},
        {img:'img5',tag:'الكتّاب',tagCls:'rtl',h:'سارة دندراوي تتحدث عن فقرة الـ25 سؤالاً',hCls:'ar',p:'سارة دندراوي تستعيد مسيرتها في تقديم هذه الفقرة المحبوبة.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'authors'},
        {img:'img6',tag:'البرامج',tagCls:'rtl',h:'عرب آيدول يعود: ماذا يعني للتلفزيون العربي؟',hCls:'ar',p:'عودة المسابقة الغنائية الشهيرة تبعث الثقة في قطاع البث المباشر.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'news-programs'},
      ],
    },
    {
      name:'أخبار عربية', nameCls:'ar', sub:'Arabic News', subCls:'', viewAll:'عرض الكل',
      featured:{tag:'اختيار المحرر',tagCls:'ar',h:'تحضيرات لإطلاق منصة إعلامية جديدة في الإمارات',hCls:'ar',p:'تحضيرات في الإمارات لإطلاق منصة إخبارية شبابية جديدة بقيادة عباس ناصر.',pCls:'ar',date:'نُشر في: ٢٤ فبراير ٢٠٢٦',dateCls:'ar',cta:'اقرأ المقال كاملاً',img:'img3',href:'#',catKey:'media'},
      cards:[
        {img:'img3',tag:'الإعلام',tagCls:'rtl',h:'تحضيرات لإطلاق منصة إعلامية جديدة في الإمارات',hCls:'ar',p:'منصة إخبارية شبابية جديدة بقيادة عباس ناصر.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'media'},
        {img:'img4',tag:'البرامج',tagCls:'rtl',h:'إجازة أم أكثر؟ حقيقة غياب مها عبد الله',hCls:'ar',p:'غياب مفاجئ أثار تساؤلات واسعة.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'news-programs'},
        {img:'img5',tag:'الكتّاب',tagCls:'rtl',h:'ما مصير الـ 25 سؤال على "العربية"؟',hCls:'ar',p:'سارة دندراوي إعلامية سعودية معروفة قدّمت هذه الفقرة.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'authors'},
      ],
    },
    {
      name:'أخبار فرنسية', nameCls:'ar', sub:'Actualités françaises', subCls:'', viewAll:'عرض الكل',
      featured:null,
      cards:[
        {img:'img6',tag:'الإعلام',tagCls:'rtl',h:'إطلاق راديو مزاج 98.7 FM في لبنان',hCls:'ar',p:'انطلق البث التجريبي لراديو مزاج في لبنان.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'media'},
        {img:'img1',tag:'الإعلام',tagCls:'rtl',h:'إذاعة دمشق تعود بحلة جديدة',hCls:'ar',p:'إذاعة دمشق تستعد للعودة بصيغة محدثة.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'media'},
        {img:'img4',tag:'البرامج',tagCls:'rtl',h:'عرب آيدول يعود بموسم جديد',hCls:'ar',p:'المسابقة الغنائية الشهيرة تعود بصيغة جديدة.',pCls:'ar',date:'٢٤ فبراير ٢٠٢٦',href:'#',catKey:'news-programs'},
      ],
    },
  ],
  ftTagline:'منصة صحافة مستقلة تروي قصص الناس وتُضخّم صوت الحقيقة عبر الحدود.',
  ftTaglineCls:'ar', ftNavTitle:'التنقل',
  ftNavLinks:[['الرئيسية','index.html'],['عن صوتي','about.html'],['اتصل بنا','contact.html']],
  ftCatTitle:'الأقسام',
  ftCatLinks:[['البرامج الإخبارية','#'],['الصور','#'],['الكتّاب','#'],['الاستشارات القانونية','#'],['الإعلام','#']],
  ftAddrTitle:'العنوان', ftAddress:'83 Avenue Émile Zola<br>75015 باريس، فرنسا',
  ftEmail:'info@sawti.eu', ftCopy:'© ٢٠٢٦ صوتي. جميع الحقوق محفوظة.',
  ftMotto:'لأن الصمت ليس خياراً.',
},
fr:{
  dir:'ltr', navHome:'Accueil', navAbout:'À propos', navContact:'Contact', liveLabel:'Flash',
  headlines:[
    {text:"Al-Sharq déménage à Riyad : 500 employés concernés à Dubaï",href:'#'},
    {text:"Nouvelle plateforme médiatique aux Émirats sous Abbas Nasser",href:'#'},
    {text:"Radio Damas se prépare à sa relance avec une formule modernisée",href:'#'},
    {text:"Mazaj Radio 98,7 FM lance sa diffusion test au Liban",href:'#'},
    {text:"Arab Idol de retour avec un nouveau format et un jury renouvelé",href:'#'},
    {text:"Radio Monte Carlo International face à la baisse d'audience numérique",href:'#'},
  ],
  heroBadge:'À la une',
  heroTitle:"Après Al-Arabiya, Al-Hadath et MBC — Al-Sharq ordonne un transfert surprise vers Riyad",
  heroTitleCls:'fr',
  heroDek:"Une décision administrative impose le déménagement du siège d'Al-Sharq à Riyad entre le 1er mars et le 1er mai.",
  heroDekCls:'', heroDate:'24 février 2026', heroCta:"Lire l'article complet",
  heroActionsAr:false, heroImg:'', scrollLabel:'Défiler',
  taglineStrip:"Une plateforme de journalisme indépendant qui raconte les histoires des gens et amplifie la voix de la vérité",
  cats:['Tout','Programmes','Photos','Auteurs','Conseils juridiques','Médias'],
  sections:[
    {
      name:'Actualités anglaises', nameCls:'', sub:'English News', subCls:'', viewAll:'Voir tout',
      featured:{tag:'Sélection',tagCls:'',h:"Al-Sharq : 500 employés face à la relocalisation à Riyad",hCls:'fr',p:"Un ordre administratif contraint Al-Sharq à déménager à Riyad avant le 1er mai, plongeant 500 employés dans l'incertitude.",pCls:'',date:'Publié le : 24 février 2026',dateCls:'',cta:"Lire l'article complet",img:'img3',href:'#',catKey:'media'},
      cards:[
        {img:'img4',tag:'Médias',tagCls:'',h:'La révolution numérique remodèle la diffusion arabe',hCls:'fr',p:'Comment les plateformes de streaming forcent les médias arabes à repenser leur modèle.',pCls:'',date:'24 fév. 2026',href:'#',catKey:'media'},
        {img:'img5',tag:'Auteurs',tagCls:'',h:'Sara Dandrawy : 25 questions et le journalisme sincère',hCls:'fr',p:"Sara Dandrawy revient sur sa carrière d'animatrice du segment culte d'Al-Arabiya.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'authors'},
        {img:'img6',tag:'Programmes',tagCls:'',h:"Arab Idol : le grand retour et ce qu'il signifie pour la TV arabe",hCls:'fr',p:'Le retour de la compétition pan-arabe signale une confiance renouvelée dans les émissions en direct.',pCls:'',date:'24 fév. 2026',href:'#',catKey:'news-programs'},
      ],
    },
    {
      name:'Actualités françaises', nameCls:'', sub:'Actualités en français', subCls:'', viewAll:'Voir tout',
      featured:{tag:'Sélection de la rédaction',tagCls:'',h:'La scène médiatique syrienne se prépare à la relance de Radio Damas',hCls:'fr',p:"Radio Damas revient le 4 février dans une nouvelle formule modernisée.",pCls:'',date:'Publié le : 24 février 2026',dateCls:'',cta:"Lire l'article complet",img:'img1',href:'#',catKey:'media'},
      cards:[
        {img:'img1',tag:'Médias',tagCls:'',h:'Radio Damas se prépare à sa relance',hCls:'fr',p:"Radio Damas revient dans une nouvelle formule modernisée.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'media'},
        {img:'img6',tag:'Médias',tagCls:'',h:"Nouveau pari sur l'audio : lancement de « Mazaj »",hCls:'fr',p:"« Mazaj » (98,7 FM) démarre une diffusion d'essai au Liban.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'media'},
        {img:'img4',tag:'Auteurs',tagCls:'',h:"Vacances — ou plus ? L'absence de Maha Abdullah",hCls:'fr',p:"L'absence de Maha Abdullah de Sky News Arabia a alimenté les rumeurs.",pCls:'',date:'24 fév. 2026',href:'#',catKey:'authors'},
      ],
    },
  ],
  ftTagline:"Une plateforme de journalisme indépendant qui raconte les histoires des gens.",
  ftTaglineCls:'', ftNavTitle:'Navigation',
  ftNavLinks:[['Accueil','index.html'],['À propos','about.html'],['Contact','contact.html']],
  ftCatTitle:'Rubriques',
  ftCatLinks:[['Programmes','#'],['Photos','#'],['Auteurs','#'],['Conseils juridiques','#'],['Médias','#']],
  ftAddrTitle:'Adresse', ftAddress:'83 Avenue Émile Zola<br>75015 Paris, France',
  ftEmail:'info@sawti.eu', ftCopy:'© 2026 Sawti. Tous droits réservés.',
  ftMotto:"Le silence n'est pas une option.",
},
};

/* ════════════════════════════════════
   CMS OVERRIDE — full per-language support
   ════════════════════════════════════ */
function applyCmsOverrides(code, d) {
  try {
    var live = (typeof window.__cmsLive === 'object' && window.__cmsLive) ? window.__cmsLive : {};
    var cms  = JSON.parse(localStorage.getItem('sawti_cms') || '{}');
    var m    = Object.assign({}, cms, live);
    if (!Object.keys(m).length) return d;
    var ld = m[code] || {};
    if (ld.hero) {
      if (ld.hero.img)   d.heroImg   = ld.hero.img;
      if (ld.hero.badge) d.heroBadge = ld.hero.badge;
      if (ld.hero.title) d.heroTitle = ld.hero.title;
      if (ld.hero.dek)   d.heroDek   = ld.hero.dek;
      if (ld.hero.date)  d.heroDate  = ld.hero.date;
      if (ld.hero.cta)   d.heroCta   = ld.hero.cta;
    }
    if (ld.headlines && ld.headlines.length) d.headlines = ld.headlines;
    if (ld.sections  && ld.sections.length)  d.sections  = ld.sections;
    if (ld.cats      && ld.cats.length)       d.cats      = ld.cats;
    if (ld.footer) {
      if (ld.footer.tagline) d.ftTagline = ld.footer.tagline;
      if (ld.footer.address) d.ftAddress = ld.footer.address;
      if (ld.footer.email)   d.ftEmail   = ld.footer.email;
      if (ld.footer.copy)    d.ftCopy    = ld.footer.copy;
      if (ld.footer.motto)   d.ftMotto   = ld.footer.motto;
    }
    /* Legacy top-level */
    if (m.heroImg)   d.heroImg   = m.heroImg;
    if (m.heroTitle) d.heroTitle = m.heroTitle;
    if (m.heroDek)   d.heroDek   = m.heroDek;
    if (m.heroBadge) d.heroBadge = m.heroBadge;
    if (m.heroDate)  d.heroDate  = m.heroDate;
    if (m.heroCta)   d.heroCta   = m.heroCta;
    if (m.ftTagline) d.ftTagline = m.ftTagline;
    if (m.ftAddress) d.ftAddress = m.ftAddress;
    if (m.ftEmail)   d.ftEmail   = m.ftEmail;
    if (m.ftCopy)    d.ftCopy    = m.ftCopy;
    if (m.headlines && m.headlines.length) d.headlines = m.headlines;
    if (m.colors) Object.keys(m.colors).forEach(function(k){ document.documentElement.style.setProperty('--'+k, m.colors[k]); });
    if (m.heroHeight)   document.querySelectorAll('.hero').forEach(function(el){ el.style.height = m.heroHeight+'vh'; });
    if (m.heroFontSize) document.querySelectorAll('.hero-title.en').forEach(function(el){ el.style.fontSize = m.heroFontSize+'rem'; });
    if (m.cardFontSize) document.querySelectorAll('.card-h.en').forEach(function(el){ el.style.fontSize = m.cardFontSize+'px'; });
  } catch(e) {}
  return d;
}

/* ════════════════════════════════════
   CATEGORY FILTER
   ════════════════════════════════════ */
function filterSections(sections, catKey) {
  if (!catKey || catKey === 'all') return sections;
  var out = [];
  sections.forEach(function(sec) {
    var filteredCards = sec.cards.filter(function(c){ return (c.catKey||'media') === catKey; });
    var filteredFeat  = (sec.featured && (sec.featured.catKey||'media') === catKey) ? sec.featured : null;
    if (filteredCards.length || filteredFeat) {
      var clone = Object.assign({}, sec, { cards: filteredCards, featured: filteredFeat });
      out.push(clone);
    }
  });
  return out;
}

/* ════════════════════════════════════
   HEADLINES
   ════════════════════════════════════ */
var _hlIdx = 0, _hlLen = 0, _hlTimer = null;

function buildHeadlines(d) {
  clearTimeout(_hlTimer); _hlTimer = null;
  var stage = document.getElementById('hl-stage');
  var dots  = document.getElementById('hl-dots');
  var lbl   = document.getElementById('hl-live-label');
  if (!stage || !dots || !lbl) return;
  lbl.textContent = d.liveLabel;
  stage.innerHTML = ''; dots.innerHTML = '';
  _hlLen = d.headlines.length; _hlIdx = 0;
  var isAr = d.dir === 'rtl';
  d.headlines.forEach(function(h, i) {
    var txt  = typeof h === 'object' ? h.text : h;
    var item = document.createElement('div');
    item.className = 'hl-item' + (i === 0 ? ' active' : '');
    item.innerHTML = '<span class="hl-num">0'+(i+1)+'</span><span class="hl-diamond"></span><span class="hl-text'+(isAr?' ar':'')+'">' + txt + '</span>';
    stage.appendChild(item);
    var dot = document.createElement('div');
    dot.className = 'hl-dot' + (i === 0 ? ' on' : '');
    (function(idx) {
      dot.addEventListener('click', function(e) { e.stopPropagation(); clearTimeout(_hlTimer); _hlIdx = idx; showHL(stage, dots); });
    })(i);
    dots.appendChild(dot);
  });
  showHL(stage, dots);
}

function showHL(stage, dots) {
  var items = stage.querySelectorAll('.hl-item');
  var pips  = dots.querySelectorAll('.hl-dot');
  items.forEach(function(el, i) { el.classList.toggle('active', i === _hlIdx); });
  pips.forEach(function(el, i)  { el.classList.toggle('on', i === _hlIdx); });
  var active = items[_hlIdx];
  if (!active) return;
  var isRTL    = document.documentElement.dir === 'rtl';
  var stageW   = stage.offsetWidth;
  var textEl   = active.querySelector('.hl-text');
  var overflow = textEl ? Math.max(0, active.scrollWidth - stageW + 16) : 0;
  var entryX   = isRTL ? -stageW : stageW;
  active.style.transition = 'none';
  active.style.transform  = 'translateX(' + entryX + 'px)';
  active.style.opacity    = '1';
  active.offsetHeight;
  var enterDur = Math.max(500, Math.round(stageW * 2.5));
  active.style.transition = 'transform ' + enterDur + 'ms cubic-bezier(0.25,0.46,0.45,0.94)';
  active.style.transform  = 'translateX(0)';
  _hlTimer = setTimeout(function() {
    if (overflow > 0) {
      var scrollX = isRTL ? overflow : -overflow;
      var scrollDur = Math.round(overflow * 18);
      active.style.transition = 'transform ' + scrollDur + 'ms linear';
      active.style.transform  = 'translateX(' + scrollX + 'px)';
      _hlTimer = setTimeout(function() {
        active.style.transition = 'none'; active.style.transform = 'translateX(0)';
        active.offsetHeight;
        _hlTimer = setTimeout(function() { exitHL(active, stage, dots); }, 600);
      }, scrollDur + 1400);
    } else {
      _hlTimer = setTimeout(function() { exitHL(active, stage, dots); }, 2800);
    }
  }, enterDur + 400);
}

function exitHL(active, stage, dots) {
  active.style.transition = 'transform 420ms cubic-bezier(0.55,0,1,0.45), opacity 320ms ease-in';
  active.style.transform  = 'translateY(52px)';
  active.style.opacity    = '0';
  _hlTimer = setTimeout(function() {
    active.style.transition = ''; active.style.transform = ''; active.style.opacity = '';
    _hlIdx = (_hlIdx + 1) % _hlLen;
    showHL(stage, dots);
  }, 440);
}

/* ════════════════════════════════════
   CARD / SECTION BUILDERS
   ════════════════════════════════════ */
function buildCard(c) {
  var src = IMG[c.img] || IMG.img3, href = c.href || '#';
  return '<article class="card reveal" data-href="'+href+'">'
    +'<div class="card-thumb"><img src="'+src+'" alt="" loading="lazy"><div class="card-sheen"></div><span class="card-tag '+(c.tagCls||'')+'">'+c.tag+'</span></div>'
    +'<div class="card-body"><h3 class="card-h '+(c.hCls||'')+'">'+c.h+'</h3><p class="'+(c.pCls||'')+'">'+c.p+'</p>'
    +'<div class="card-foot"><time class="card-date">'+c.date+'</time><div class="card-arrow">'+SM+'</div></div></div></article>';
}

function buildFeatured(f) {
  if (!f) return '';
  var src = IMG[f.img] || IMG.img3, href = f.href || '#';
  return '<div class="featured reveal" data-href="'+href+'">'
    +'<div class="feat-body"><div class="feat-tag '+(f.tagCls||'')+'">'+f.tag+'</div>'
    +'<h2 class="feat-h '+(f.hCls||'')+'">'+f.h+'</h2><p class="feat-p '+(f.pCls||'')+'">'+f.p+'</p>'
    +'<div class="feat-date '+(f.dateCls||'')+'">'+f.date+'</div>'
    +'<a href="'+href+'" class="feat-cta">'+f.cta+' '+LG+'</a></div>'
    +'<div class="feat-img"><img src="'+src+'" alt="" loading="lazy"></div></div>';
}

function buildSection(sec, isFirst) {
  var divider = isFirst ? '' : '<div class="divider"><div class="div-line"></div><span class="div-label">'+sec.name+'</span><div class="div-line"></div></div>';
  return divider
    +'<div class="sec-head reveal"><div class="sec-head-left"><h2 class="sec-name '+(sec.nameCls||'')+'">'+sec.name+'</h2><p class="sec-sub '+(sec.subCls||'')+'">'+sec.sub+'</p></div>'
    +'<a href="#" class="sec-all">'+sec.viewAll+' '+SM+'</a></div>'
    +'<div class="grid3">'+sec.cards.map(buildCard).join('')+'</div>'
    +buildFeatured(sec.featured);
}

function wireClicks(root) {
  (root || document).querySelectorAll('[data-href]').forEach(function(el) {
    if (el._hrefWired) return; el._hrefWired = true; el.style.cursor = 'pointer';
    el.addEventListener('click', function() { var h = el.getAttribute('data-href'); if (h && h !== '#') window.location.href = h; });
  });
}

/* ════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════ */
var _obs = null;
function observeReveal() {
  if (_obs) _obs.disconnect();
  _obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var delay = parseInt(e.target.dataset.revealDelay || '0', 10);
        setTimeout(function() { e.target.classList.add('visible'); }, delay);
        _obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el, i) {
    el.dataset.revealDelay = String((i % 3) * 90); _obs.observe(el);
  });
}

/* ════════════════════════════════════
   RENDER CONTENT (category-aware)
   ════════════════════════════════════ */
var _currentD = null;
function renderContent(d) {
  _currentD = d;
  var sections = filterSections(d.sections, _activeCatKey);
  var main = document.getElementById('main-content');
  if (!main) return;
  if (!sections.length) {
    main.innerHTML = '<div style="padding:4rem 0;text-align:center;color:var(--muted);font-size:15px;">No articles in this category yet.</div>';
    return;
  }
  main.innerHTML = sections.map(function(s, i) { return buildSection(s, i === 0); }).join('');
  wireClicks(main);
  observeReveal();
}

/* ════════════════════════════════════
   MAIN RENDER
   ════════════════════════════════════ */
function renderLang(code) {
  var d = JSON.parse(JSON.stringify(CONTENT[code] || CONTENT.en));
  d = applyCmsOverrides(code, d);
  document.documentElement.lang = code;
  document.documentElement.dir  = d.dir;
  document.body.className = 'lang-' + code;
  document.querySelectorAll('.lang-sw button').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === code);
  });
  var navMap = {'nav-home':d.navHome,'nav-about':d.navAbout,'nav-contact':d.navContact,'drawer-home':d.navHome,'drawer-about':d.navAbout,'drawer-contact':d.navContact};
  Object.keys(navMap).forEach(function(id) { var el = document.getElementById(id); if (el) el.textContent = navMap[id]; });
  var pill = document.getElementById('hero-pill'); if (pill) pill.dir = d.dir;
  buildHeadlines(d);
  /* Hero */
  var bg = document.getElementById('hero-bg');
  if (bg) {
    var imgSrc = d.heroImg || IMG.hero;
    bg.classList.remove('loaded'); bg.style.backgroundImage = "url('"+imgSrc+"')";
    var _p = new Image(); _p.onload = function(){ bg.classList.add('loaded'); }; _p.src = imgSrc;
  }
  var te = document.getElementById('hero-title');
  if (te) { te.textContent = d.heroTitle; te.className = 'hero-title ' + d.heroTitleCls; }
  var de = document.getElementById('hero-dek');
  if (de) { de.textContent = d.heroDek; de.className = 'hero-dek'+(d.heroDekCls?' '+d.heroDekCls:''); }
  var fv = function(id,v){ var e=document.getElementById(id); if(e) e.textContent=v; };
  fv('hero-badge',d.heroBadge); fv('hero-date',d.heroDate); fv('hero-scroll-lbl',d.scrollLabel);
  var cta = document.getElementById('hero-cta'); if (cta) cta.innerHTML = d.heroCta+' '+LG;
  var act = document.getElementById('hero-actions'); if (act) act.className = 'hero-actions'+(d.heroActionsAr?' ar':'');
  /* Category bar */
  var bar = document.getElementById('cat-bar');
  if (bar) {
    var isAr = code === 'ar';
    bar.innerHTML = d.cats.map(function(cat, i) {
      var key = CAT_KEYS[i] || 'all';
      var active = (i === 0 && _activeCatKey === 'all') || key === _activeCatKey;
      return '<button class="cat-btn'+(active?' active':'')+(isAr?' ar-cat':'')+'" data-catkey="'+key+'">'+cat+'</button>';
    }).join('');
    bar.querySelectorAll('.cat-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        _activeCatKey = btn.getAttribute('data-catkey') || 'all';
        bar.querySelectorAll('.cat-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        renderContent(d);
      });
    });
  }
  renderContent(d);
  /* Tagline */
  var tsEl = document.querySelector('.tagline-strip .ts-ar');
  if (tsEl && d.taglineStrip) tsEl.textContent = d.taglineStrip;
  /* Footer */
  var ftTag = document.getElementById('ft-tagline');
  if (ftTag) { ftTag.textContent = d.ftTagline; ftTag.className = 'ft-tagline'+(d.ftTaglineCls?' '+d.ftTaglineCls:''); }
  var fh = function(id,v){ var e=document.getElementById(id); if(e) e.innerHTML=v; };
  fv('ft-nav-title',d.ftNavTitle); fv('ft-cat-title',d.ftCatTitle); fv('ft-addr-title',d.ftAddrTitle);
  fh('ft-nav-links', d.ftNavLinks.map(function(p){ return '<li><a href="'+p[1]+'">'+p[0]+'</a></li>'; }).join(''));
  fh('ft-cat-links', d.ftCatLinks.map(function(p){ return '<li><a href="'+p[1]+'">'+p[0]+'</a></li>'; }).join(''));
  fh('ft-address', d.ftAddress);
  var em = document.getElementById('ft-email');
  if (em) { em.textContent = d.ftEmail; em.href = 'mailto:'+d.ftEmail; }
  fv('ft-copy',d.ftCopy); fv('ft-motto',d.ftMotto);
  observeReveal();
  try { localStorage.setItem('sawti-lang', code); } catch(e) {}
  try { if (window.parent && window.parent !== window) window.parent.postMessage({a:'pageReady'},'*'); } catch(e) {}
}

/* ════════════════════════════════════
   HAMBURGER & HEADER HEIGHT
   ════════════════════════════════════ */
function toggleDrawer() {
  var d = document.getElementById('nav-drawer'), b = document.getElementById('nav-hamburger');
  if (!d) return; var o = d.classList.toggle('open');
  if (b) b.setAttribute('aria-expanded', o ? 'true' : 'false');
}
function setHeaderH() {
  var h = document.getElementById('site-header');
  if (h) document.documentElement.style.setProperty('--header-h', h.offsetHeight+'px');
}

document.addEventListener('DOMContentLoaded', function() {
  setHeaderH();
  window.addEventListener('resize', setHeaderH, {passive:true});
  var header = document.getElementById('site-header'), btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    if (header) header.classList.toggle('elevated', scrollY > 10);
    if (btt)    btt.classList.toggle('visible',    scrollY > 400);
  }, {passive:true});
  if (btt) btt.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  var burger = document.getElementById('nav-hamburger');
  if (burger) burger.addEventListener('click', function(){ toggleDrawer(); });
  document.addEventListener('click', function(e) {
    var d = document.getElementById('nav-drawer'), b = document.getElementById('nav-hamburger');
    if (d && d.classList.contains('open') && b && !d.contains(e.target) && e.target !== b && !b.contains(e.target))
      d.classList.remove('open');
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) { var d = document.getElementById('nav-drawer'); if(d) d.classList.remove('open'); }
  });
  document.querySelectorAll('.lang-sw button').forEach(function(btn) {
    btn.addEventListener('click', function(){ _activeCatKey='all'; renderLang(btn.getAttribute('data-lang')); });
  });
  document.querySelectorAll('.ft-col-h').forEach(function(h) {
    h.addEventListener('click', function() {
      var col = h.closest('.ft-grid > div');
      if (col) { col.classList.toggle('ft-col-open'); h.classList.toggle('open'); }
    });
  });
  var lang = 'en';
  try { lang = localStorage.getItem('sawti-lang') || 'en'; } catch(e) {}
  if (!CONTENT[lang]) lang = 'en';
  renderLang(lang);
});
