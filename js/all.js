/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1),function(e,t,n){"use strict";var o=function(o,i){!!t.getComputedStyle||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var s,a,r,l,c,u,d,p=function(e,t,n,o){if("addEventListener"in e)try{e.addEventListener(t,n,o)}catch(i){if("object"!=typeof n||!n.handleEvent)throw i;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},h=function(e,t,n,o){if("removeEventListener"in e)try{e.removeEventListener(t,n,o)}catch(i){if("object"!=typeof n||!n.handleEvent)throw i;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},v=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},f=function(e,t){for(var n in t)e.setAttribute(n,t[n])},m=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},g=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},y=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,o,e[o])},b=function(e,t){return e.className&&new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},w=function(){for(var e=this,t=a.menuItems;-1===e.className.indexOf(t);)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement},E=e.createElement("style"),T=e.documentElement,x=function(t,n){var o;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",enableFocus:!1,enableDropdown:!1,menuItems:"menu-items",subMenu:"sub-menu",openDropdown:"Open sub menu",closeDropdown:"Close sub menu",init:function(){},open:function(){},close:function(){},resizeMobile:function(){},resizeDesktop:function(){}};for(o in n)this.options[o]=n[o];if(m(T,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=v(this.wrapper),a=this.options,s=this.wrapper,this._init(this)};return x.prototype={destroy:function(){if(this._removeStyles(),g(s,"closed"),g(s,"opened"),g(s,a.navClass),g(s,a.navClass+"-"+this.index),g(T,a.navActiveClass),s.removeAttribute("style"),s.removeAttribute("aria-hidden"),h(t,"resize",this,!1),h(t,"focus",this,!1),h(e.body,"touchmove",this,!1),h(r,"touchstart",this,!1),h(r,"touchend",this,!1),h(r,"mouseup",this,!1),h(r,"keyup",this,!1),h(r,"click",this,!1),a.customToggle?r.removeAttribute("aria-hidden"):r.parentNode.removeChild(r),a.enableDropdown){var n=this;y(d,function(e,t){h(t,"touchstart",n,!1),h(t,"touchend",n,!1),h(t,"mouseup",n,!1),h(t,"keyup",n,!1),h(t,"click",n,!1)})}},toggle:function(){!0===l&&(u?this.close():this.open())},open:function(){u||(g(s,"closed"),m(s,"opened"),m(T,a.navActiveClass),m(r,"is-active"),s.style.position=a.openPos,f(s,{"aria-hidden":"false"}),f(s,{"aria-expanded":"true"}),f(r,{"aria-expanded":"true"}),u=!0,a.open())},close:function(){u&&(m(s,"closed"),g(s,"opened"),g(T,a.navActiveClass),g(r,"is-active"),f(s,{"aria-hidden":"true"}),f(s,{"aria-expanded":"false"}),f(r,{"aria-expanded":"false"}),a.animate?(l=!1,setTimeout(function(){s.style.position="absolute",l=!0,a.enableDropdown&&(g(s,"dropdown-active"),y(d,function(e,t){g(t,"toggled"),g(t.nextSibling,"toggled")}))},a.transition+10)):(s.style.position="absolute",a.enableDropdown&&(g(s,"dropdown-active"),y(d,function(e,t){g(t,"toggled"),g(t.nextSibling,"toggled")}))),u=!1,a.close())},resize:function(){"none"!==t.getComputedStyle(r,null).getPropertyValue("display")?(c=!0,f(r,{"aria-hidden":"false"}),f(s,{"aria-expanded":"false"}),f(r,{"aria-expanded":"false"}),s.className.match(/(^|\s)closed(\s|$)/)&&(f(s,{"aria-hidden":"true"}),s.style.position="absolute"),s.className.match(/(^|\s)closed(\s|$)/)||(f(s,{"aria-expanded":"true"}),f(r,{"aria-expanded":"true"})),this._createStyles(),this._calcHeight(),a.resizeMobile()):(c=!1,f(r,{"aria-hidden":"true"}),f(s,{"aria-hidden":"false"}),s.removeAttribute("aria-expanded"),r.removeAttribute("aria-expanded"),s.style.position=a.openPos,this._removeStyles(),a.resizeDesktop())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,m(s,a.navClass),m(s,a.navClass+"-"+this.index),m(s,"closed"),l=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize(),this._createFocus(),this._createDropdown();var o=this;setTimeout(function(){o.resize()},20),p(t,"resize",this,!1),p(t,"focus",this,!1),p(e.body,"touchmove",this,!1),p(r,"touchstart",this,!1),p(r,"touchend",this,!1),p(r,"mouseup",this,!1),p(r,"keyup",this,!1),p(r,"click",this,!1),a.init()},_createStyles:function(){E.parentNode||(E.type="text/css",e.getElementsByTagName("head")[0].appendChild(E))},_removeStyles:function(){E.parentNode&&E.parentNode.removeChild(E)},_createToggle:function(){if(a.customToggle){var t=a.customToggle.replace("#","");if(e.getElementById(t))r=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");r=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=a.label,f(n,{href:"#",class:"nav-toggle"}),"after"===a.insert?s.parentNode.insertBefore(n,s.nextSibling):s.parentNode.insertBefore(n,s),r=n}},_closeOnNavClick:function(){if(a.closeOnNavClick){var e=s.getElementsByTagName("a"),t=this;y(e,function(n,o){p(e[n],"click",function(){c&&t.toggle()},!1)})}},_preventDefault:function(e){if(e.preventDefault)return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1;e.returnValue=!1},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,h(r,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),c){var n=e||t.event,o=n.target||n.srcElement,i=!1;if(b(o,"dropdown-toggle")&&a.enableDropdown&&(i=!0),!this.touchHasMoved){if("touchend"===e.type)return void(i?this._toggleDropdown(o):this.toggle());var s=e||t.event;3!==s.which&&2!==s.button&&(i?this._toggleDropdown(o):this.toggle())}}},_onKeyUp:function(e){var n=e||t.event,o=e.target,i=!1;b(o,"dropdown-toggle")&&a.enableDropdown&&(i=!0),13===n.keyCode&&(i?this._toggleDropdown(o):this.toggle())},_transitions:function(){if(a.animate){var e=s.style,t="max-height "+a.transition+"ms, visibility "+a.transition+"ms linear";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<s.inner.length;t++)e+=s.inner[t].offsetHeight;var n="."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";E.styleSheet?E.styleSheet.cssText=n:E.innerHTML=n,n=""},_createFocus:function(){if(a.enableFocus){var e,t,n=s.getElementsByTagName("ul")[0].getElementsByTagName("a");for(t=0,e=n.length;t<e;t++)n[t].addEventListener("focus",w,!0),n[t].addEventListener("blur",w,!0)}},_createDropdown:function(){if(a.enableDropdown){var e,t,n=this,o=(s.getElementsByTagName("ul")[0],s.getElementsByClassName(a.subMenu));for(m(s,"multiple-level-nav"),e=0,t=o.length;e<t;e++)o[e].insertAdjacentHTML("beforebegin",'<button type="button" class="dropdown-toggle" aria-label="Open/close dropdown" aria-expanded="false">'+a.openDropdown+"</button>");d=s.querySelectorAll(".dropdown-toggle"),y(d,function(e,t){p(t,"touchstart",n,!1),p(t,"touchend",n,!1),p(t,"mouseup",n,!1),p(t,"keyup",n,!1),p(t,"click",n,!1)})}},_toggleDropdown:function(e){m(s,"dropdown-active"),e.innerHTML===a.openDropdown?e.innerHTML=a.closeDropdown:e.innerHTML=a.openDropdown;var t=e.parentNode;b(t.parentNode.parentNode,"dropdown");if(b(e,"toggled")){g(e,"toggled"),e.setAttribute("aria-expanded","false");n=e.nextElementSibling;g(n,"toggled"),g(s,"dropdown-active")}else{m(e,"toggled"),e.setAttribute("aria-expanded","true");var n=e.nextElementSibling;m(n,"toggled"),m(s,"dropdown-active")}}},new x(o,i)};"undefined"!=typeof module&&module.exports?module.exports=o:t.responsiveNav=o}(document,window,0),function(e){"use strict";"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&"object"==typeof module.exports?module.exports=e:jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}(function(e){"use strict";if(!e.fn.hoverIntent){var t,n,o={interval:100,sensitivity:6,timeout:0},i=0,s=function(e){t=e.pageX,n=e.pageY},a=function(e,o,i,r){if(Math.sqrt((i.pX-t)*(i.pX-t)+(i.pY-n)*(i.pY-n))<r.sensitivity)return o.off("mousemove.hoverIntent"+i.namespace,s),delete i.timeoutId,i.isActive=!0,delete i.pX,delete i.pY,r.over.apply(o[0],[e]);i.pX=t,i.pY=n,i.timeoutId=setTimeout(function(){a(e,o,i,r)},r.interval)},r=function(e,t,n,o){return delete t.data("hoverIntent")[n.id],o.apply(t[0],[e])};e.fn.hoverIntent=function(t,n,l){var c=i++,u=e.extend({},o);u=e.isPlainObject(t)?e.extend(u,t):e.isFunction(n)?e.extend(u,{over:t,out:n,selector:l}):e.extend(u,{over:t,out:t,selector:n});var d=function(t){var n=e.extend({},t),o=e(this),i=o.data("hoverIntent");i||o.data("hoverIntent",i={});var l=i[c];l||(i[c]=l={id:c}),l.timeoutId&&(l.timeoutId=clearTimeout(l.timeoutId));var d=l.namespace=".hoverIntent"+c;if("mouseenter"===t.type){if(l.isActive)return;l.pX=n.pageX,l.pY=n.pageY,o.on("mousemove.hoverIntent"+d,s),l.timeoutId=setTimeout(function(){a(n,o,l,u)},u.interval)}else{if(!l.isActive)return;o.off("mousemove.hoverIntent"+d,s),l.timeoutId=setTimeout(function(){r(n,o,l,u.out)},u.timeout)}};return this.on({"mouseenter.hoverIntent":d,"mouseleave.hoverIntent":d},u.selector)}}});var MoveTo=function(){function e(e,t,n,o){return e/=o,e--,-n*(e*e*e*e-1)+t}function t(e){for(var t=0,n=0;e;)t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent;return{top:t,left:n}}function n(e,t){var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),Object.keys(t).forEach(function(e){n[e]=t[e]}),n}function o(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(a,t),this.easeFunctions=n({easeOutQuart:e},o)}function s(e,t){var n={};return Object.keys(t).forEach(function(t){var i=e.getAttribute("data-mt-"+o(t));i&&(n[t]=isNaN(i)?i:parseInt(i,10))}),n}var a={tolerance:0,duration:800,easing:"easeOutQuart",callback:function(){}};return i.prototype.registerTrigger=function(e,t){var o=this;if(e){var i=e.getAttribute("href")||e.getAttribute("data-target"),a=i&&"#"!==i?document.getElementById(i.substring(1)):0,r=n(this.options,s(e,this.options));"function"==typeof t&&(r.callback=t);var l=function(e){e.preventDefault(),o.move(a,r)};return e.addEventListener("click",l,!1),function(){return e.removeEventListener("click",l,!1)}}},i.prototype.move=function(e){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){i=n(this.options,i);var s="number"==typeof e?e:t(e).top,a=window.pageYOffset,r=(s-=i.tolerance)-a,l=null,c=void 0;window.requestAnimationFrame(function t(n){var u=window.pageYOffset;l||(l=n-1);var d=n-l;if(c&&(r>0&&c>u||r<0&&c<u))return i.callback(e);c=u;var p=o.easeFunctions[i.easing](d,a,r,i.duration);window.scroll(0,p),d<i.duration?window.requestAnimationFrame(t):(window.scroll(0,s),i.callback(e))})}},i.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},i}();"undefined"!=typeof module?module.exports=MoveTo:window.MoveTo=MoveTo;var customToggle=document.getElementById("nav-toggle"),customLabel=document.getElementById("nav-toggle-label"),navigation=responsiveNav(".nav-collapse",{animate:!1,customToggle:".nav-toggle",navClass:".nav-collapse",menuItems:"menu-items",subMenu:"sub-menu",enableFocus:!0,enableDropdown:!0,openDropdown:screenReaderTexts.expandSubMenu,closeDropdown:screenReaderTexts.collapseSubMenu,open:function(){customLabel.innerHTML=screenReaderTexts.collapseMenu},close:function(){customLabel.innerHTML=screenReaderTexts.expandMenu},resizeMobile:function(){customToggle.setAttribute("aria-controls","nav")},resizeDesktop:function(){customToggle.removeAttribute("aria-controls")}});!function(e){e(".menu-item-has-children").hoverIntent({over:function(){return e(this).find(">ul").addClass("hoverintent")},out:function(){return e(this).find(">ul").removeClass("hoverintent")},timeout:800}),e(window).scroll(function(){e(this).scrollTop()>300?e(".top").addClass("is-visible"):e(".top").removeClass("is-visible"),e(this).scrollTop()>1200?e(".top").addClass("fade-out"):e(".top").removeClass("fade-out")}),e(function(){var e=new MoveTo,t=document.getElementById("target");e.move(t);var n=document.getElementsByClassName("js-trigger")[0];e.registerTrigger(n)})}(jQuery);