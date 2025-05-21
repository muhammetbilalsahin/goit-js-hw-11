import{a as u,i as c,S as f}from"./assets/vendor-DvP4Yn-N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function p(o){const n=`https://pixabay.com/api/?key=50349576-73448956e16d67ea550d7c551&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,{data:s}=await u.get(n);return s}function m(o){return o.map(r=>`
      <a href="${r.largeImageURL}" class="photo-card">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </a>`).join("")}function y(){document.querySelector("#loader").classList.remove("hidden")}function h(){document.querySelector("#loader").classList.add("hidden")}const l=document.querySelector("#search-form"),d=document.querySelector(".gallery");let i;l.addEventListener("submit",async o=>{o.preventDefault();const r=l.searchQuery.value.trim();if(r){d.innerHTML="",y();try{const s=(await p(r)).hits;if(s.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=m(s);d.innerHTML=e,i?i.refresh():i=new f(".gallery a")}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}}});
//# sourceMappingURL=index.js.map
