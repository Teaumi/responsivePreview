!function t(e,r,n){function o(s,i){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!i&&c)return c(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return o(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){"use strict";t("./toggleStates")},{"./toggleStates":2}],2:[function(t,e,r){"use strict";!function(){function t(){n.addClass("device"),r.removeClass().addClass($(this).data("class")),"alpha"===$(this).data("class")&&(r.removeClass(),n.removeClass("device"))}var e=$('[data-js="switch"]'),r=$('[data-js="contentMold"]'),n=$("body");e.on("click",t)}()},{}]},{},[1]);