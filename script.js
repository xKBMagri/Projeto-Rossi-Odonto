// Mobile nav (simple toggle placeholder — expand as needed)
  document.getElementById('burger').addEventListener('click', function(){
    document.querySelector('.nav-links').style.cssText = 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:rgba(20,18,15,0.98);padding:24px 28px;gap:20px;border-bottom:1px solid var(--marble-line);';
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Header shrink on scroll
  var header = document.querySelector('header');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 40){ header.style.padding = '0'; }
  });
