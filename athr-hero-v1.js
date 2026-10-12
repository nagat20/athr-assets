/* athr hero (video) */
(function(){
  var B='https://cdn.jsdelivr.net/gh/nagat20/athr-assets@main/';
  function home(){var p=location.pathname.replace(/\/+$/,'');return document.body.classList.contains('index')||/\/rasheedoud$/.test(p)||p===''}
  function run(){
    if(!home()||document.getElementById('athr-hero-js'))return;
    var st=document.createElement('style');st.textContent='.s-block--bundle-html-content .athr-hero{display:none}';document.head.appendChild(st);
    var s=document.createElement('section');s.id='athr-hero-js';s.className='athr-hero';s.setAttribute('aria-label','أثر — من صخور حائل');
    s.innerHTML='<video class="athr-hero__v" autoplay muted loop playsinline preload="metadata" poster="'+B+'athr-hero-poster.jpg"><source src="'+B+'athr-hero-desktop.mp4" type="video/mp4"></video>'+
      '<div class="athr-hero__shade"></div><div class="athr-hero__in">'+
      '<img class="athr-hero__logo a1" src="'+B+'athr-logo-cream.png" alt="أثر للعود">'+
      '<h1 class="athr-hero__t"><span class="a2">كما بقيت النقوش،</span><span class="a3 athr-hero__t2">يبقى <b>الأثـــر.</b></span></h1>'+
      '<p class="athr-hero__p a4">عودٌ وأخشابٌ فاخرة، مستوحاة من نقوش حائل<br>رائحةٌ تعبر اللحظة… وتبقى في الذاكرة.</p>'+
      '<p class="athr-hero__sig a5">بك يبدأ <b>الأثـــر</b> … وبك يدوم</p>'+
      '<a class="athr-hero__btn a5" href="#athr-cats">تسوّق الآن</a></div>';
    var m=document.querySelector('main');
    if(m)m.insertBefore(s,m.firstElementChild);else{var h=document.querySelector('header');if(h)h.after(s);}
    var v=s.querySelector('video');if(v){v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){});}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
