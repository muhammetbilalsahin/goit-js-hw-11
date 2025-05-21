import{i as c,S as f,a as p}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=document.querySelector("#search-form"),u=document.querySelector(".gallery"),d=document.querySelector("#loader");let i;l.addEventListener("submit",async s=>{s.preventDefault();const t=l.searchQuery.value.trim();if(t){u.innerHTML="",h();try{const o=(await g(t)).hits;if(o.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=m(o);u.innerHTML=e,i?i.refresh():i=new f(".gallery a")}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}});function m(s){return s.map(t=>`
    <a href="${t.largeImageURL}" class="photo-card">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>`).join("")}function h(){d.classList.remove("hidden")}function y(){d.classList.add("hidden")}async function g(s){const n=`https://pixabay.com/api/?key=50349576-73448956e16d67ea550d7c551&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,{data:o}=await p.get(n);return o}
//# sourceMappingURL=index.js.map
