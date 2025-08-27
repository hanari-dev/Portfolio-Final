// About Section - made simple learning timeline using arrays/objects, loops, functions, and conditionals
(function(){
  const ul = document.getElementById('timeline');
  if (!ul) return;

  const milestones = [
    {title:'HTML Basics',      desc:'Semantic tags, structure, links, accessibility, and images.', order:1},
    {title:'CSS Foundations',  desc:'Text styles, box model, spacing, and flex/grid.',   order:2},
    {title:'JavaScript Intro', desc:'Variables, arrays, objects, and DOM basics.',   order:3},
    {title:'Final Project Portfolio · Latest', desc:'Built this simple responsive page.', order:4}
  ];

  milestones.sort((a,b)=>a.order-b.order);

  function li(m, latest){
    return `<li><h3>${m.title}</h3><p>${m.desc}</p></li>`;
  }

  let html = '';
  for (let i=0;i<milestones.length;i++){
    html += li(milestones[i], i===milestones.length-1);
  }
  ul.innerHTML = html;
})();

// Contact Section 
(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const setErr = (el,msg)=>{ el.closest('.field').querySelector('.error').textContent = msg||''; };

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const { name, email, message } = form;
    let ok = true;

    if (!name.value.trim()){ setErr(name, 'Please enter your name.'); ok=false; } else setErr(name,'');
    if (!emailRx.test(email.value)){ setErr(email, 'Enter a valid email.'); ok=false; } else setErr(email,'');
    if (!message.value.trim()){ setErr(message, 'Please write a message.'); ok=false; } else setErr(message,'');

    if (ok){ alert('Thanks! (Demo only)'); form.reset(); }
  });
})();
