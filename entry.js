import {scrollIt} from './public/scripts/modules/ScrollIt.js';

document.addEventListener('DOMContentLoaded', (event) => {

  // animated section scrolling on click
  const navs = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.js-section');
  const done = () => { null };
  for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', () => {
      scrollIt(sections[i], 300, 'easeInQuad', done);
    })
  }
  const nav = document.querySelector('.nav')
  const navHeight = nav.offsetHeight
  const siteBody = document.querySelector('.site-content');

  siteBody.setAttribute('style', 'padding-top:' + navHeight + 'px')
});

// sticky nav
// outside of window.onload
// const nav = document.querySelector('.nav')
// const navHeight = nav.offsetHeight
// const navStick = document.querySelector('.nav-stick');

// window.addEventListener('scroll', () => {
//   if(window.scrollY > 0) {
//     navStick.classList.add('js_is-sticky')
//   }
//   else {
//     navStick.classList.remove('js_is-sticky')
//   }
// })
