const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));let n=null;
//# sourceMappingURL=01-color-switcher.c949fa13.js.map