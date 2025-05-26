import{a as u,S as f,i as a}from"./assets/vendor-DV6r_H9s.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function m(n){const i=`https://pixabay.com/api/?key=50349576-73448956e16d67ea550d7c551&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,{data:o}=await u.get(i);return o}const c=document.querySelector(".gallery");let p=new f(".image-li a",{captionDelay:250,captionsData:"alt"});function y(n){const r=n.map(({largeImageURL:i,webformatURL:o,tags:e,likes:t,views:s,comments:l,downloads:d})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${o}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${s}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${l}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${d}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function h(){c.innerHTML=""}function g(){document.querySelector(".hidden").style.display="flex"}function v(){document.querySelector(".hidden").style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#search-form");n.addEventListener("submit",async r=>{r.preventDefault();const i=n.searchQuery.value.trim();if(i){h(),g();try{const e=(await m(i)).hits;if(e.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e)}catch{a.error({message:"error.",position:"topRight"})}finally{v()}}})});
//# sourceMappingURL=index.js.map
