//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
var qrcode=function(){var r=function(r,t){var e=r,n=i[t],o=null,u=0,a=null,f=[],c={},g=function(r,t){o=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(u=4*e+17),h(0,0),h(u-7,0),h(0,u-7),s(),l(),m(r,t),e>=7&&d(r),null==a&&(a=b(e,n,f)),L(a,t)},h=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||u<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||u<=t+n||(o[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},l=function(){for(var r=8;r<u-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<u-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},s=function(){for(var r=v.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var i=r[t],u=r[n];if(null==o[i][u])for(var a=-2;a<=2;a+=1)for(var f=-2;f<=2;f+=1)o[i+a][u+f]=-2==a||2==a||-2==f||2==f||0==a&&0==f}},d=function(r){for(var t=v.getBCHTypeNumber(e),n=0;n<18;n+=1){var i=!r&&1==(t>>n&1);o[Math.floor(n/3)][n%3+u-8-3]=i}for(n=0;n<18;n+=1){i=!r&&1==(t>>n&1);o[n%3+u-8-3][Math.floor(n/3)]=i}},m=function(r,t){for(var e=n<<3|t,i=v.getBCHTypeInfo(e),a=0;a<15;a+=1){var f=!r&&1==(i>>a&1);a<6?o[a][8]=f:a<8?o[a+1][8]=f:o[u-15+a][8]=f}for(a=0;a<15;a+=1){f=!r&&1==(i>>a&1);a<8?o[8][u-a-1]=f:a<9?o[8][15-a-1+1]=f:o[8][15-a-1]=f}o[u-8][8]=!r},L=function(r,t){for(var e=-1,n=u-1,i=7,a=0,f=v.getMaskFunction(t),c=u-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var h=!1;a<r.length&&(h=1==(r[a]>>>i&1));f(n,c-g)&&(h=!h),o[n][c-g]=h,-1==(i-=1)&&(a+=1,i=7)}if((n+=e)<0||u<=n){n-=e,e=-e;break}}},b=function(r,t,e){for(var n=p.getRSBlocks(r,t),o=y(),i=0;i<e.length;i+=1){var u=e[i];o.put(u.getMode(),4),o.put(u.getLength(),v.getLengthInBits(u.getMode(),r)),u.write(o)}var a=0;for(i=0;i<n.length;i+=1)a+=n[i].dataCount;if(o.getLengthInBits()>8*a)throw"code length overflow. ("+o.getLengthInBits()+">"+8*a+")";for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a||(o.put(236,8),o.getLengthInBits()>=8*a));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,i=new Array(t.length),u=new Array(t.length),a=0;a<t.length;a+=1){var f=t[a].dataCount,c=t[a].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[a]=new Array(f);for(var g=0;g<i[a].length;g+=1)i[a][g]=255&r.getBuffer()[g+e];e+=f;var h=v.getErrorCorrectPolynomial(c),l=w(i[a],h.getLength()-1).mod(h);for(u[a]=new Array(h.getLength()-1),g=0;g<u[a].length;g+=1){var s=g+l.getLength()-u[a].length;u[a][g]=s>=0?l.getAt(s):0}}var d=0;for(g=0;g<t.length;g+=1)d+=t[g].totalCount;var p=new Array(d),y=0;for(g=0;g<n;g+=1)for(a=0;a<t.length;a+=1)g<i[a].length&&(p[y]=i[a][g],y+=1);for(g=0;g<o;g+=1)for(a=0;a<t.length;a+=1)g<u[a].length&&(p[y]=u[a][g],y+=1);return p}(o,n)};return c.addData=function(r,t){var e=null;switch(t=t||"Byte"){case"Numeric":e=B(r);break;case"Alphanumeric":e=C(r);break;case"Byte":e=A(r);break;case"Kanji":e=k(r);break;default:throw"mode:"+t}f.push(e),a=null},c.isDark=function(r,t){if(r<0||u<=r||t<0||u<=t)throw r+","+t;return o[r][t]},c.getModuleCount=function(){return u},c.make=function(){if(e<1){for(var r=1;r<40;r++){for(var t=p.getRSBlocks(r,n),o=y(),i=0;i<f.length;i++){var u=f[i];o.put(u.getMode(),4),o.put(u.getLength(),v.getLengthInBits(u.getMode(),r)),u.write(o)}var a=0;for(i=0;i<t.length;i++)a+=t[i].dataCount;if(o.getLengthInBits()<=8*a)break}e=r}g(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){g(!0,e);var n=v.getLostPoint(c);(0==e||r>n)&&(r=n,t=e)}return t}())},c.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<c.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<c.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=c.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},c.createSvgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e,n,o,i,u=c.getModuleCount()*r+2*t,a="";for(i="l"+r+",0 0,"+r+" -"+r+",0 0,-"+r+"z ",a+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',a+=' width="'+u+'px"',a+=' height="'+u+'px"',a+=' viewBox="0 0 '+u+" "+u+'" ',a+=' preserveAspectRatio="xMinYMin meet">',a+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',a+='<path d="',n=0;n<c.getModuleCount();n+=1)for(o=n*r+t,e=0;e<c.getModuleCount();e+=1)c.isDark(n,e)&&(a+="M"+(e*r+t)+","+o+i);return a+='" stroke="transparent" fill="black"/>',a+="</svg>"},c.createImgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e=c.getModuleCount()*r+2*t,n=t,o=e-t;return M(e,e,function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var i=Math.floor((t-n)/r),u=Math.floor((e-n)/r);return c.isDark(u,i)?0:1}return 1})},c};r.stringToBytes=(r.stringToBytesFuncs={default:function(r){for(var t=[],e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t}}).default,r.createStringToBytes=function(r,t){var e=function(){for(var e=L(r),n=function(){var r=e.read();if(-1==r)throw"eof";return r},o=0,i={};;){var u=e.read();if(-1==u)break;var a=n(),f=n()<<8|n();i[String.fromCharCode(u<<8|a)]=f,o+=1}if(o!=t)throw o+" != "+t;return i}(),n="?".charCodeAt(0);return function(r){for(var t=[],o=0;o<r.length;o+=1){var i=r.charCodeAt(o);if(i<128)t.push(i);else{var u=e[r.charAt(o)];"number"==typeof u?(255&u)==u?t.push(u):(t.push(u>>>8),t.push(255&u)):t.push(n)}}return t}};var t=1,e=2,n=4,o=8,i={L:1,M:0,Q:3,H:2},u=0,a=1,f=2,c=3,g=4,h=5,l=6,s=7,v=function(){var r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i={},v=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t};return i.getBCHTypeInfo=function(r){for(var t=r<<10;v(t)-v(1335)>=0;)t^=1335<<v(t)-v(1335);return 21522^(r<<10|t)},i.getBCHTypeNumber=function(r){for(var t=r<<12;v(t)-v(7973)>=0;)t^=7973<<v(t)-v(7973);return r<<12|t},i.getPatternPosition=function(t){return r[t-1]},i.getMaskFunction=function(r){switch(r){case u:return function(r,t){return(r+t)%2==0};case a:return function(r,t){return r%2==0};case f:return function(r,t){return t%3==0};case c:return function(r,t){return(r+t)%3==0};case g:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case h:return function(r,t){return r*t%2+r*t%3==0};case l:return function(r,t){return(r*t%2+r*t%3)%2==0};case s:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw"bad maskPattern:"+r}},i.getErrorCorrectPolynomial=function(r){for(var t=w([1],0),e=0;e<r;e+=1)t=t.multiply(w([1,d.gexp(e)],0));return t},i.getLengthInBits=function(r,i){if(1<=i&&i<10)switch(r){case t:return 10;case e:return 9;case n:case o:return 8;default:throw"mode:"+r}else if(i<27)switch(r){case t:return 12;case e:return 11;case n:return 16;case o:return 10;default:throw"mode:"+r}else{if(!(i<41))throw"type:"+i;switch(r){case t:return 14;case e:return 13;case n:return 16;case o:return 12;default:throw"mode:"+r}}},i.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var i=0,u=r.isDark(n,o),a=-1;a<=1;a+=1)if(!(n+a<0||t<=n+a))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==a&&0==f||u==r.isDark(n+a,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(g+=1);return e+=10*(Math.abs(100*g/t/t-50)/5)},i}(),d=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;var n={};return n.glog=function(r){if(r<1)throw"glog("+r+")";return t[r]},n.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]},n}();function w(r,t){if(void 0===r.length)throw r.length+"/"+t;var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={};return n.getAt=function(r){return e[r]},n.getLength=function(){return e.length},n.multiply=function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=d.gexp(d.glog(n.getAt(e))+d.glog(r.getAt(o)));return w(t,0)},n.mod=function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=d.glog(n.getAt(0))-d.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=d.gexp(d.glog(r.getAt(o))+t);return w(e,0).mod(r)},n}var p=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={};return e.getRSBlocks=function(e,n){var o=function(t,e){switch(e){case i.L:return r[4*(t-1)+0];case i.M:return r[4*(t-1)+1];case i.Q:return r[4*(t-1)+2];case i.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var u=o.length/3,a=[],f=0;f<u;f+=1)for(var c=o[3*f+0],g=o[3*f+1],h=o[3*f+2],l=0;l<c;l+=1)a.push(t(g,h));return a},e}(),y=function(){var r=[],t=0,e={};return e.getBuffer=function(){return r},e.getAt=function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},e.put=function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},e.getLengthInBits=function(){return t},e.putBit=function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1},e},B=function(r){var e=t,n=r,o={};o.getMode=function(){return e},o.getLength=function(r){return n.length},o.write=function(r){for(var t=n,e=0;e+2<t.length;)r.put(i(t.substring(e,e+3)),10),e+=3;e<t.length&&(t.length-e==1?r.put(i(t.substring(e,e+1)),4):t.length-e==2&&r.put(i(t.substring(e,e+2)),7))};var i=function(r){for(var t=0,e=0;e<r.length;e+=1)t=10*t+u(r.charAt(e));return t},u=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+r};return o},C=function(r){var t=e,n=r,o={};o.getMode=function(){return t},o.getLength=function(r){return n.length},o.write=function(r){for(var t=n,e=0;e+1<t.length;)r.put(45*i(t.charAt(e))+i(t.charAt(e+1)),11),e+=2;e<t.length&&r.put(i(t.charAt(e)),6)};var i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);if("A"<=r&&r<="Z")return r.charCodeAt(0)-"A".charCodeAt(0)+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return o},A=function(t){var e=n,o=r.stringToBytes(t),i={};return i.getMode=function(){return e},i.getLength=function(r){return o.length},i.write=function(r){for(var t=0;t<o.length;t+=1)r.put(o[t],8)},i},k=function(t){var e=o,n=r.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(r,t){var e=n("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported."}();var i=n(t),u={};return u.getMode=function(){return e},u.getLength=function(r){return~~(i.length/2)},u.write=function(r){for(var t=i,e=0;e+1<t.length;){var n=(255&t[e])<<8|255&t[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),r.put(n,13),e+=2}if(e<t.length)throw"illegal char at "+(e+1)},u},m=function(){var r=[],t={};return t.writeByte=function(t){r.push(255&t)},t.writeShort=function(r){t.writeByte(r),t.writeByte(r>>>8)},t.writeBytes=function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},t.writeString=function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},t.toByteArray=function(){return r},t.toString=function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"},t},L=function(r){var t=r,e=0,n=0,o=0,i={};i.read=function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|u(r.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i};var u=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw"c:"+r};return i},M=function(r,t,e,n){for(var o=function(r,t){var e=r,n=t,o=new Array(r*t),i={};i.setPixel=function(r,t,n){o[t*e+r]=n},i.write=function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=u(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")};var u=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,i=a(),u=0;u<t;u+=1)i.add(String.fromCharCode(u));i.add(String.fromCharCode(t)),i.add(String.fromCharCode(e));var f=m(),c=function(r){var t=r,e=0,n=0,o={};return o.write=function(r,o){if(r>>>o!=0)throw"length over";for(;e+o>=8;)t.writeByte(255&(r<<e|n)),o-=8-e,r>>>=8-e,n=0,e=0;n|=r<<e,e+=o},o.flush=function(){e>0&&t.writeByte(n)},o}(f);c.write(t,n);var g=0,h=String.fromCharCode(o[g]);for(g+=1;g<o.length;){var l=String.fromCharCode(o[g]);g+=1,i.contains(h+l)?h+=l:(c.write(i.indexOf(h),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(h+l)),h=l)}return c.write(i.indexOf(h),n),c.write(e,n),c.flush(),f.toByteArray()},a=function(){var r={},t=0,e={};return e.add=function(n){if(e.contains(n))throw"dup key:"+n;r[n]=t,t+=1},e.size=function(){return t},e.indexOf=function(t){return r[t]},e.contains=function(t){return void 0!==r[t]},e};return i}(r,t),i=0;i<t;i+=1)for(var u=0;u<r;u+=1)o.setPixel(u,i,e(u,i));var a=m();o.write(a);for(var f=function(){var r=0,t=0,e=0,n="",o={},i=function(r){n+=String.fromCharCode(u(63&r))},u=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw"n:"+r};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)i(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(i(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,u=0;u<o;u+=1)n+="="},o.toString=function(){return n},o}(),c=a.toByteArray(),g=0;g<c.length;g+=1)f.writeByte(c[g]);f.flush();var h="";return h+="<img",h+=' src="',h+="data:image/gif;base64,",h+=f,h+='"',h+=' width="',h+=r,h+='"',h+=' height="',h+=t,h+='"',n&&(h+=' alt="',h+=n,h+='"'),h+="/>"};return r}();qrcode.stringToBytesFuncs["UTF-8"]=function(r){return function(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}(r)},function(r){"function"==typeof define&&define.amd?define([],r):"object"==typeof exports&&(module.exports=r())}(function(){return qrcode});