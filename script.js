(function(){
  var toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
  if(toggle&&nav){
    var close=function(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');};
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
      toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    nav.addEventListener('click',function(e){if(e.target.closest('a'))close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
  // legal TOC: collapsed by default on small screens
  var toc=document.querySelector('.legal-toc details');
  if(toc&&window.matchMedia('(max-width:820px)').matches){toc.removeAttribute('open');}
})();
