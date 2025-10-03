import{a as d,S as f,i as a}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",m="52544403-d4b110e344dc82246161e65d0";function h(n){return d.get(p,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Sorry, there are no images matching your search query. Please try again!",r),[]))}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionsDelay:250});function g(n){const r=n.map(t=>`
    <li class="gallery-item">
  <a href="${t.largeImageURL}" target="_blank">
     <img
       src="${t.webformatURL}"
      alt="${t.tags}" loading="lazy"
    />
  </a>
  <div class="info">
  <p><b>Likes:</b> ${t.likes}</p>
  <p><b>Views:</b> ${t.views}</p>
  <p><b>Comments:</b> ${t.comments}</p>
  <p><b>Downloads:</b> ${t.downloads}</p>   
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector(".form"),S=document.querySelector(".form input");w.addEventListener("submit",n=>{n.preventDefault();const r=S.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(),L(),h(r).then(t=>{if(c(),t.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"my-toast"});return}g(t)}).catch(t=>{c(),console.error(t),a.error({title:"Error",message:"Something went wrong while fetching images!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
