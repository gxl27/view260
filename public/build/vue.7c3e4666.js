/*! For license information please see vue.7c3e4666.js.LICENSE.txt */
"use strict";(self.webpackChunkview360=self.webpackChunkview360||[]).push([[485],{574:(t,r,n)=>{n(1539),n(8674),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(2443),n(3680),n(3706),n(2703),n(9070),n(8011),n(489),n(9554),n(4747),n(8309),n(8304),n(5069),n(7042);var e=n(538),o=n(9669),i=n.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",i=e.asyncIterator||"@@asyncIterator",u=e.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new P(e||[]);return i._invoke=function(t,r,n){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===e)throw e="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e="executing";var u=d(t,r,n);if("normal"===u.type){if(e=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function d(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function v(){}function p(){}var y={};s(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&n.call(m,o)&&(y=m);var w=p.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function e(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==a(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var e=d(n,t.iterator,r.arg);if("throw"===e.type)return r.method="throw",r.arg=e.arg,r.delegate=null,f;var o=e.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=p,s(w,"constructor",p),s(p,"constructor",v),v.displayName=s(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new x(l(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(n,e){return a.type="throw",a.arg=t,r.next=n,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function u(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}function s(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var i=t.apply(r,n);function a(t){u(i,e,o,a,c,"next",t)}function c(t){u(i,e,o,a,c,"throw",t)}a(void 0)}))}}e.ZP.component("product",{data:function(){return{image:"/uploads/photos",categories:{},variant:"",product:"",products:{},cartDisplay:0,cartCounter:0}},props:["propsVal"],methods:{closeWindow:function(t){this.cartDisplay=0},addToCart:function(){this.cartDisplay=0,this.cartCounter+=1},fetchCategories:function(){var t=this;return s(c().mark((function r(){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i().get("/api/category").then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 2:t.categories=r.sent;case 3:case"end":return r.stop()}}),r)})))()},getVariant:function(t){var r=this;return s(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/api/variant/"+t,n.next=3,i().get(e).then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 3:r.variant=n.sent,r.products=r.variant.products,r.product=r.getProduct(r.products[0].id),r.cartDisplay=1;case 7:case"end":return n.stop()}}),n)})))()},getProduct:function(t){var r=this;return s(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/api/product/"+t,n.next=3,i().get(e).then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 3:r.product=n.sent,console.log(r.product);case 5:case"end":return n.stop()}}),n)})))()}},computed:{title:function(){return this.product+this.image}},template:'\n        <div>\n            <div v-for="category in categories"\n                    :id="category.name"\n                    :class="\'category-list\'">\n                <div \n                    :key=\'category.id\'\n                    :class="\'category-item\'">\n                    <div>\n                        <img :src="\'/uploads/photos/\'+ category.img">\n                    </div>\n                    <div :class="\'category-content\'">\n                        <h2>{{ category.name }} - {{ category.variantsCount }} brands</h2>\n                        <div  :class="\'variant-list\'">\n                            <div v-for="categoryVariant in category.variants"\n                                :key=\'categoryVariant.id\'\n                                @click="getVariant(categoryVariant.id)"\n                                :class="\'variant-item\'"\n                                :title="\'Details: \' + category.name + \' - \' + categoryVariant.name">\n                                    <img :src="\'/uploads/photos/\'+ categoryVariant.img">\n                                    <div>{{ categoryVariant.name }}</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div v-show="this.cartDisplay"\n                        :class="\'cart\'">\n                    <div>\n                    <div @click="closeWindow"\n                            :class="\'btn-close-round\'">\n                        x\n                    </div>\n\n                    <div :class="\'cart-image\'">\n                        <div>\n                            <img v-if="product" :src="\'/uploads/photos/\'+ product.img"\n                                :class="\'variant-active-img\'">\n                        </div>\n                        <div class="\'text-title\'">\n                            <b>{{ product.name }} ( {{ product.stock }} remaining )</b>\n                        </div>   \n                        <div>\n                            Price{{ product.price }} $\n                        </div>      \n                       \n                        <button @click="addToCart"\n                                :class="\'btn-primary\'">\n                                <p v-if="product.stock > 0" >\n                                    Add to cart\n                                </p>\n                                <p v-else \n                                    :class="\'out-of-stock\'">\n                                    Out of stock\n                                </p>\n                        </button>\n                    </div>\n                    <div :class="\'cart-content\'">\n                        <div :class="\'cart-list\'">\n                            <div v-for="variantProduct in products"\n                                    :key="variantProduct.id"\n                                    @click="getProduct(variantProduct.id)"\n                                    :class="\'cart-item\'">\n                                <div :class="\'cart-item-image\'">\n                                    <img :src="\'/uploads/photos/\'+ variantProduct.img"\n                                            :class="\'variant-img\'">\n                                </div>\n                                <div :class="\'cart-item-content\'">\n                                    <b>{{ variantProduct.name }}</b>\n                                    <div>\n                                        Price: {{ variantProduct.price }} $\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    ',components:{},created:function(){this.fetchCategories()}});new e.ZP({el:"#app"})}},t=>{t.O(0,[327,930],(()=>{return r=574,t(t.s=r);var r}));t.O()}]);