var r,t=function(r,t){return t?"string"==typeof t[0]?r.concat([t]):r.concat(t):r},e=function(n){return function(o){return!!o&&("object"!=typeof o[1]||Array.isArray(o[1])?e(n)([o[0],{},o[1]||""]):((r={})[n[0]]=o[0],r[n[1]]=o[1],r[n[2]]=Array.isArray(o[2])?o[2].reduce(t,[]).map(e(n)):o[2]+"",r))}},n=e(["name","props","children"]),o=e(["nodeName","attributes","children"]);exports.h=n,exports.p=o;
//# sourceMappingURL=index.js.map
