const toggle=document.querySelector('.menubutton');const nav=document.querySelector('#mainnav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('nav details[open]').forEach(d=>d.open=false);nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
document.addEventListener('click',e=>{document.querySelectorAll('nav details[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});});
const here=location.pathname.replace(/\/$/,'')||'/';document.querySelectorAll('nav a').forEach(a=>{if((new URL(a.href).pathname.replace(/\/$/,'')||'/')===here)a.setAttribute('aria-current','page');});
