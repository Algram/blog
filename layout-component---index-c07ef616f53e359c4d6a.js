webpackJsonp([0xef47e37750d80000],{"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(n[s]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},"./node_modules/normalize.css/normalize.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}",""])},"./src/fonts/iconfont.woff?lt16rv":function(e,t,o){e.exports=o.p+"static/iconfont.af63da4a.woff"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/raphaelg/Documents/development/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/raphaelg/Documents/development/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/raphaelg/Documents/development/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/raphaelg/Documents/development/blog/node_modules/babel-preset-env/lib/index.js","/home/raphaelg/Documents/development/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/raphaelg/Documents/development/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/preact-compat/dist/preact-compat.js"),c=n(l);o("./node_modules/normalize.css/normalize.css"),o("./src/scss/material.scss"),o("./src/scss/iconfont/iconfont.css"),o("./src/scss/global.scss");var u=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"render",value:function(){var e=this.props.children;return c.default.createElement("div",{className:"container"},e())}}]),t}(c.default.Component);t.default=u,e.exports=t.default},"./src/scss/global.scss":function(e,t){},"./src/scss/iconfont/iconfont.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"@font-face{font-family:iconfont;src:url("+o("./src/fonts/iconfont.woff?lt16rv")+') format("woff");font-weight:400;font-style:normal}[class*=" icon-"],[class^=icon-]{font-family:iconfont!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-heart:before{content:"\\F004"}.icon-star:before{content:"\\F005"}.icon-tag:before{content:"\\F02B"}.icon-bookmark:before{content:"\\F02E"}.icon-thumb-tack:before{content:"\\F08D"}.icon-github:before{content:"\\F09B"}.icon-feed:before,.icon-rss:before{content:"\\F09E"}.icon-comments-o:before{content:"\\F0E6"}.icon-coffee:before{content:"\\F0F4"}',""])},"./src/scss/material.scss":function(e,t){}});
//# sourceMappingURL=layout-component---index-c07ef616f53e359c4d6a.js.map