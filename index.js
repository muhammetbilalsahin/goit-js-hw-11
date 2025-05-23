import{a as l,S as d,i as c}from"./assets/vendor-DV6r_H9s.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function u(t){const s=`https://pixabay.com/api/?key=50349576-73448956e16d67ea550d7c551&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`,{data:r}=await l.get(s);return r}let i;function f(t){const n=document.querySelector(".gallery"),s=t.map(r=>`
        <li class="photo-card">
          <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r.likes}</p>
            <p><b>Views:</b> ${r.views}</p>
            <p><b>Comments:</b> ${r.comments}</p>
            <p><b>Downloads:</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");n.innerHTML=s,i?i.refresh():i=new d(".gallery a")}function p(){const t=document.querySelector(".gallery");t.innerHTML=""}function m(){document.querySelector("#loader").classList.remove("hidden")}function y(){document.querySelector("#loader").classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#search-form");t.addEventListener("submit",async n=>{n.preventDefault();const s=t.searchQuery.value.trim();if(s){p(),m();try{const e=(await u(s)).hits;if(e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(e)}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}})});
//# sourceMappingURL=index.js.map
