'use strict';

{
  const btn = document.querySelector('.btn');
  // const nav_container = document.querySelector('.nav_container');
  const nav_item = document.querySelector('.nav_container');


  btn.addEventListener('click',()=>{
btn.classList.toggle('active');
// nav_container.classList.toggle('active');
nav_item.classList.toggle('active');
  });
}