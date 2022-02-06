/* A simple, somewhat ugly way to unblock Quora.com,
so you can browse questions without logging in*/ 

const blurAndScroll = () => { //unblurs and enables scrolling
  const topContainer = document.querySelector('#root');
  const mid = topContainer.querySelector(':last-child');
  const penult = mid.querySelector(':first-child');
  const ult = penult.querySelector(':first-child');
  ult.style.filter = "";
  ult.style.overflow = "auto";
}

const divDealer = () => { //finds and removes blocking overlay
  const obnoxiousDiv = document.getElementsByClassName('qu-zIndex--blocking_wall')[0];
  obnoxiousDiv.remove();

  setTimeout(blurAndScroll, 100);
}

if (document.readyState === 'loading') { //prevents missing event fire
  document.addEventListener('DOMContentLoaded', divDealer);
} else {
  divDealer();
}
