/* athr hero v2 — البخور + العلبة تتفتح (intro مرة واحدة ثم loop) */
(function(){
var B='https://cdn.jsdelivr.net/gh/nagat20/athr-assets@621b31b/';
function home(){var p=location.pathname.replace(/\/+$/,'');return document.body.classList.contains('index')||/\/rasheedoud$/.test(p)||p===''}
function run(){
if(!home()||document.getElementById('athr-hero-js'))return;
var mob=window.matchMedia('(max-width:767px)').matches,k=mob?'mobile':'desktop';
var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
var st=document.createElement('style');st.textContent='.s-block--bundle-html-content .athr-hero{display:none}#athr-hero-js .athr-hero__v{object-position:'+(mob?'50% 50%':'30% 50%')+'}#athr-hero-js .athr-hero__v--loop{opacity:0}#athr-hero-js.is-loop .athr-hero__v--loop{opacity:1}#athr-hero-js.is-loop .athr-hero__v--intro{opacity:0}';document.head.appendChild(st);
var s=document.createElement('section');s.id='athr-hero-js';s.className='athr-hero';s.setAttribute('aria-label','أثر — من صخور حائل');
s.innerHTML=
'<video class="athr-hero__v athr-hero__v--loop" muted loop playsinline preload="auto" poster="'+B+'athr-hero2-poster-'+k+'.jpg"><source src="'+B+'athr-hero2-loop-'+k+'.mp4" type="video/mp4"></video>'+
'<video class="athr-hero__v athr-hero__v--intro" muted playsinline preload="auto" poster="'+B+'athr-hero2-first-'+k+'.jpg"><source src="'+B+'athr-hero2-intro-'+k+'.mp4" type="video/mp4"></video>'+
'<div class="athr-hero__shade"></div><div class="athr-hero__in">'+
'<img class="athr-hero__logo a1" src="'+B+'athr-logo-cream.png" alt="أثر للعود">'+
'<h1 class="athr-hero__t"><span class="a2">كما بقيت النقوش،</span><span class="a3 athr-hero__t2">يبقى <b>الأثـــر.</b></span></h1>'+
'<p class="athr-hero__p a4">كما للنقوش الثمودية أثر،<br>فإنّ للعود والبخور أثر.</p>'+
'<p class="athr-hero__p athr-hero__p2 a4">عودٌ وأخشابٌ فاخرة، استلهمنا قصتها من النقوش الثمودية على جبال حائل، وكيف بقي أثرها طوال السنين؛ فرائحة العود يبقى أثرها عالقًا بالذاكرة والمكان.</p>'+
'<a class="athr-hero__btn a5" href="#athr-cats">تسوّق الآن</a></div>';
var m=document.querySelector('main');
if(m)m.insertBefore(s,m.firstElementChild);else{var h=document.querySelector('header');if(h)h.after(s);}
var intro=s.querySelector('.athr-hero__v--intro'),loop=s.querySelector('.athr-hero__v--loop');
intro.muted=loop.muted=true;
function go(){if(s.classList.contains('is-loop'))return;s.classList.add('is-loop');var p=loop.play();if(p&&p.catch)p.catch(function(){});}
if(reduce){go();loop.pause();return;}
intro.addEventListener('ended',go);intro.addEventListener('error',go,true);
var p=intro.play();if(p&&p.catch)p.catch(function(){go();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
