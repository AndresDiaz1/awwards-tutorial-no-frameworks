/*! For license information please see main.a50d2b1390b5d539e7fa.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateawwards_tutorial_no_frameworks("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,n,t)=>{var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function a(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function l(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var o=function(e,n){var t;return e=r(e,{stripWWW:!1}),n.some((function(r){e.indexOf(n)>-1&&(t=r)})),t}(n.href,e);u(o)&&!0!==n.visited&&o&&(a(n,o),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&a(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),s;var t,c,a,u=function(e){var n=o[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(n=i.src)}o[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return r(n.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=u(n.filename),t=l(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,a=0,function(){var e=this,n=arguments,r=function(){return t.apply(e,n)};clearTimeout(a),a=setTimeout(r,c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),r=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+r+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},"./styles/index.scss":(e,n,t)=>{t.r(n);var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){e.h=()=>"6f7433fe8a7792ecebae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNTBkMmIxMzkwYjVkNTM5ZTdmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NkpBU0EsSUFBSUEsRUFBZUMsRUFBUSxvRUFFdkJDLEVBQWdCQyxPQUFPQyxPQUFPLE1BQzlCQyxFQUFpQyxvQkFBYkMsU0FDcEJDLEVBQVVDLE1BQU1DLFVBQVVGLFFBa0I5QixTQUFTRyxLQTJDVCxTQUFTQyxFQUFVQyxFQUFJQyxHQUNyQixJQUFLQSxFQUFLLENBQ1IsSUFBS0QsRUFBR0UsS0FDTixPQUlGRCxFQUFNRCxFQUFHRSxLQUFLQyxNQUFNLEtBQUssR0FHM0IsR0FBS0MsRUFBYUgsS0FJRSxJQUFoQkQsRUFBR0ssVUFNRkosR0FBU0EsRUFBSUssUUFBUSxTQUFXLEVBQXJDLENBS0FOLEVBQUdPLFNBQVUsRUFDYixJQUFJQyxFQUFRUixFQUFHUyxZQUNmRCxFQUFNSCxVQUFXLEVBQ2pCRyxFQUFNRSxpQkFBaUIsUUFBUSxXQUN6QkYsRUFBTUgsV0FJVkcsRUFBTUgsVUFBVyxFQUNqQkwsRUFBR1csV0FBV0MsWUFBWVosT0FFNUJRLEVBQU1FLGlCQUFpQixTQUFTLFdBQzFCRixFQUFNSCxXQUlWRyxFQUFNSCxVQUFXLEVBQ2pCTCxFQUFHVyxXQUFXQyxZQUFZWixPQUU1QlEsRUFBTU4sS0FBTyxHQUFHVyxPQUFPWixFQUFLLEtBQUtZLE9BQU9DLEtBQUtDLE9BRXpDZixFQUFHZ0IsWUFDTGhCLEVBQUdXLFdBQVdNLGFBQWFULEVBQU9SLEVBQUdnQixhQUVyQ2hCLEVBQUdXLFdBQVdPLFlBQVlWLElBbUI5QixTQUFTVyxFQUFZQyxHQUNuQixJQUFLQSxFQUNILE9BQU8sRUFHVCxJQUFJQyxFQUFXM0IsU0FBUzRCLGlCQUFpQixRQUNyQ0MsR0FBUyxFQXFCYixPQXBCQTVCLEVBQVE2QixLQUFLSCxHQUFVLFNBQVVyQixHQUMvQixHQUFLQSxFQUFHRSxLQUFSLENBSUEsSUFBSUQsRUEzQlIsU0FBc0JDLEVBQU1rQixHQUMxQixJQUFJSyxFQVdKLE9BVEF2QixFQUFPZCxFQUFhYyxFQUFNLENBQ3hCd0IsVUFBVSxJQUdaTixFQUFJTyxNQUFLLFNBQVUxQixHQUNiQyxFQUFLSSxRQUFRYyxJQUFRLElBQ3ZCSyxFQUFNeEIsTUFHSHdCLEVBZUtHLENBQWE1QixFQUFHRSxLQUFNa0IsR0FFM0JoQixFQUFhSCxLQUlDLElBQWZELEVBQUdPLFNBSUhOLElBQ0ZGLEVBQVVDLEVBQUlDLEdBQ2RzQixHQUFTLE9BR05BLEVBR1QsU0FBU00sSUFDUCxJQUFJUixFQUFXM0IsU0FBUzRCLGlCQUFpQixRQUN6QzNCLEVBQVE2QixLQUFLSCxHQUFVLFNBQVVyQixJQUNaLElBQWZBLEVBQUdPLFNBSVBSLEVBQVVDLE1BSWQsU0FBU0ksRUFBYUgsR0FHcEIsUUFBSyw0QkFBNEI2QixLQUFLN0IsR0FPeEM4QixFQUFPQyxRQUFVLFNBQVVDLEVBQVVDLEdBQ25DLEdBQUl6QyxFQUVGLE9BREEwQyxRQUFRQyxJQUFJLDhDQUNMdEMsRUFHVCxJQXhMZ0J1QyxFQUFJQyxFQUNoQkMsRUF1TEFDLEVBdEtOLFNBQTZCUCxHQUMzQixJQUFJYixFQUFNOUIsRUFBYzJDLEdBRXhCLElBQUtiLEVBQUssQ0FDUixHQUFJMUIsU0FBUytDLGNBQ1hyQixFQUFNMUIsU0FBUytDLGNBQWNyQixRQUN4QixDQUNMLElBQUlzQixFQUFVaEQsU0FBU2lELHFCQUFxQixVQUN4Q0MsRUFBZ0JGLEVBQVFBLEVBQVFHLE9BQVMsR0FFekNELElBQ0Z4QixFQUFNd0IsRUFBY3hCLEtBSXhCOUIsRUFBYzJDLEdBQVliLEVBRzVCLE9BQU8sU0FBVTBCLEdBQ2YsSUFBSzFCLEVBQ0gsT0FBTyxLQUdULElBQUkyQixFQUFjM0IsRUFBSWpCLE1BQU0sa0JBQ3hCNkMsRUFBV0QsR0FBZUEsRUFBWSxHQUUxQyxPQUFLQyxHQUlBRixFQUlFQSxFQUFRM0MsTUFBTSxLQUFLOEMsS0FBSSxTQUFVQyxHQUN0QyxJQUFJQyxFQUFNLElBQUlDLE9BQU8sR0FBR3ZDLE9BQU9tQyxFQUFVLFVBQVcsS0FDcEQsT0FBTzVELEVBQWFnQyxFQUFJaUMsUUFBUUYsRUFBSyxHQUFHdEMsT0FBT3FDLEVBQVFHLFFBQVEsY0FBZUwsR0FBVyxhQVRsRixDQUFDNUIsRUFBSWlDLFFBQVEsTUFBTyxVQTJJWkMsQ0FBb0JyQixHQW9CdkMsT0E1TWdCSSxFQTBMaEIsV0FDRSxJQUFJakIsRUFBTW9CLEVBQWFOLEVBQVFjLFVBQzNCTyxFQUFXcEMsRUFBWUMsR0FFM0IsR0FBSWMsRUFBUXNCLE9BR1YsT0FGQXJCLFFBQVFDLElBQUkseURBQ1pQLElBSUUwQixFQUNGcEIsUUFBUUMsSUFBSSxzQkFBdUJoQixFQUFJcUMsS0FBSyxPQUU1Q3RCLFFBQVFDLElBQUksd0JBQ1pQLE1BeE1nQlMsRUE0TUksR0EzTXBCQyxFQUFVLEVBQ1AsV0FDTCxJQUFJbUIsRUFBT0MsS0FFUEMsRUFBT0MsVUFFUEMsRUFBZSxXQUNqQixPQUFPekIsRUFBRzBCLE1BQU1MLEVBQU1FLElBR3hCSSxhQUFhekIsR0FDYkEsRUFBVTBCLFdBQVdILEVBQWN4Qiw2RUNOdkNQLEVBQU9DLFFBQVUsU0FBVWtDLEdBR3pCLEdBRkFBLEVBQVlBLEVBQVVDLE9BRWxCLFVBQVVyQyxLQUFLb0MsR0FDakIsT0FBT0EsRUFHVCxJQUFJRSxHQUF3QyxJQUE3QkYsRUFBVTVELFFBQVEsTUFBZTRELEVBQVUvRCxNQUFNLE1BQU0sR0FBSyxLQUFPLEdBQzlFa0UsRUFBYUgsRUFBVWIsUUFBUSxJQUFJRCxPQUFPZ0IsRUFBVSxLQUFNLElBQUlqRSxNQUFNLEtBQ3BFbUUsRUFBT0QsRUFBVyxHQUFHRSxjQUFjbEIsUUFBUSxNQUFPLElBR3RELE9BRkFnQixFQUFXLEdBQUssR0FFVEQsRUFBV0UsRUFETUQsRUE1QkZHLFFBQU8sU0FBVUMsRUFBYUMsR0FDbEQsT0FBUUEsR0FDTixJQUFLLEtBQ0hELEVBQVlFLE1BQ1osTUFFRixJQUFLLElBQ0gsTUFFRixRQUNFRixFQUFZRyxLQUFLRixHQUdyQixPQUFPRCxJQUNOLElBQUloQixLQUFLLDhDQ2RSLElBQUlvQixFQUFZLEVBQVEsMEVBQVIsQ0FBb0o5QyxFQUFPK0MsR0FBSSxDQUFDLFdBQWEsR0FBRyxRQUFTLElBQ3pNL0MsRUFBT2dELElBQUlDLFFBQVFILEdBQ25COUMsRUFBT2dELElBQUlFLFlBQU9DLEVBQVdMLGtCQ05uQ00sRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3d2FyZHMtdHV0b3JpYWwtbm8tZnJhbWV3b3Jrcy8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9hd3dhcmRzLXR1dG9yaWFsLW5vLWZyYW1ld29ya3MvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9hd3dhcmRzLXR1dG9yaWFsLW5vLWZyYW1ld29ya3MvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9hd3dhcmRzLXR1dG9yaWFsLW5vLWZyYW1ld29ya3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKSB7XG4gIHZhciBzcmMgPSBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXTtcblxuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG5cbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYsIHtcbiAgICBzdHJpcFdXVzogZmFsc2VcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cblxuICBzcmMuc29tZShmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcblxuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cblxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuICAvLyBJdCBpcyBub3QgaHR0cCBvciBodHRwc1xuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgW10pLmpvaW4oXCIvXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQxMjU0NzA3NDE3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9hbmRyZXMuZGlhei52YXJnYXMvRG9jdW1lbnRzL2F3d2FyZHMtdHV0b3JpYWwtbm8tZnJhbWV3b3Jrcy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZmNzQzM2ZlOGE3NzkyZWNlYmFlXCIpIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVVybCIsInJlcXVpcmUiLCJzcmNCeU1vZHVsZUlkIiwiT2JqZWN0IiwiY3JlYXRlIiwibm9Eb2N1bWVudCIsImRvY3VtZW50IiwiZm9yRWFjaCIsIkFycmF5IiwicHJvdG90eXBlIiwibm9vcCIsInVwZGF0ZUNzcyIsImVsIiwidXJsIiwiaHJlZiIsInNwbGl0IiwiaXNVcmxSZXF1ZXN0IiwiaXNMb2FkZWQiLCJpbmRleE9mIiwidmlzaXRlZCIsIm5ld0VsIiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbmNhdCIsIkRhdGUiLCJub3ciLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVsb2FkU3R5bGUiLCJzcmMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2FkZWQiLCJjYWxsIiwicmV0Iiwic3RyaXBXV1ciLCJzb21lIiwiZ2V0UmVsb2FkVXJsIiwicmVsb2FkQWxsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVJZCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZm4iLCJ0aW1lIiwidGltZW91dCIsImdldFNjcmlwdFNyYyIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYXN0U2NyaXB0VGFnIiwibGVuZ3RoIiwiZmlsZU1hcCIsInNwbGl0UmVzdWx0IiwiZmlsZW5hbWUiLCJtYXAiLCJtYXBSdWxlIiwicmVnIiwiUmVnRXhwIiwicmVwbGFjZSIsImdldEN1cnJlbnRTY3JpcHRVcmwiLCJyZWxvYWRlZCIsImxvY2FscyIsImpvaW4iLCJzZWxmIiwidGhpcyIsImFyZ3MiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkNhbGwiLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cmxTdHJpbmciLCJ0cmltIiwicHJvdG9jb2wiLCJjb21wb25lbnRzIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwicG9wIiwicHVzaCIsImNzc1JlbG9hZCIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==