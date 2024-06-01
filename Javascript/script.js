// typing script js
var typed = new Typed(".typing",{
   strings: ["Web designer","web developer","Coder","Foodie"],
   typeSpeed: 120,
   backspeed: 80,
   loop: true
});
var typed2 = new Typed(".typing-2",{
   strings: ["Web designer","web developer","Coder","Foodie"],
   typeSpeed: 120,
   backspeed: 80,
   loop: true
});

// show for hide faq ans
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
   faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      // change icon
      const icon = faq.querySelector('.faq-icon i');
      if(icon.className === 'fa-solid fa-plus'){
         icon.className = 'fa-solid fa-minus'
      }
      else{
         icon.className = 'fa-solid fa-plus'
      }
   });
});


// show or hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');

const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
   menu.style.display='flex';
   closeBtn.style.display = 'inline-block';
   menuBtn.style.display = 'none';
})
// close nav menu
const closeNav = () => {
   menu.style.display = 'none';
   closeBtn.style.display = 'none';
   menuBtn.style.display = 'inline-block'
}
closeBtn.addEventListener('click',closeNav);

// nav color change 
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
})