import {scrollIt} from './public/scripts/modules/ScrollIt.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const submit = document.querySelector('.submit');
  const form = document.querySelector('#contact-form');
  submit.addEventListener('click', (evt) => {
    emailjs.sendForm('default_service','contact_form','contact-form')
    evt.preventDefault()
    form.reset()
    console.log(form)
    // return false
  })
  // submit.addEventListener('submit', () => {
  //   form.reset();
  // })
  let elems = {
    body:  document.querySelector('.site-body'),
    bodyWidth:  document.body.clientWidth,
    nav:   document.querySelector('.nav'),
    navList:   document.querySelector('.nav ul'),
    navToggle:   document.querySelector('.nav-toggle'),
    navLinks:   document.querySelectorAll('.nav-link'),
    navHeight:  document.querySelector('.nav').offsetHeight + 'px',
    siteBody:   document.querySelector('.site-content'),
    sections:   document.querySelectorAll('.js-section')
  }

  // animated section scrolling on click
  const done = () => { null };
  for (let i = 0; i < elems.navLinks.length; i++) {
    elems.navLinks[i].addEventListener('click', () => {
      scrollIt(elems.sections[i], 300, 'easeInQuad', done);
    })
  }

  // nav events
  if(elems.bodyWidth >= 768) {
    elems.siteBody.style.paddingTop = elems.navHeight
  }
  if(elems.bodyWidth <= 768) {
    if(elems.nav) {
      elems.navToggle.addEventListener('click', () => {
        elems.body.classList.toggle('freeze')
        elems.navToggle.classList.toggle('is-shown')
        elems.nav.classList.toggle('is-shown')
      })
      elems.navList.addEventListener('click', () => {
        elems.nav.classList.remove('is-shown')
        elems.navToggle.classList.remove('is-shown')
        elems.body.classList.remove('freeze')
      })
    }
  }


  windowResize(elems.navHeight, elems.siteBody)

});

let windowResize = (height, elem) => {
  window.addEventListener('resize', () => {
    let width = document.body.clientWidth
    if(width < 768) {
      elem.style.paddingTop = 0
    }
    else {
      elem.style.paddingTop = height
    }
  })
}
