webpackJsonp([0],[,,,,,,,,,,,,,,function(t,e,i){var a=i(0)(i(46),i(77),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(47),i(85),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(49),i(86),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(50),i(75),null,null);t.exports=a.exports},function(t,e,i){"use strict";e.a=[{path:"/form/",component:i(71)},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:i(69)}]},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){var a=i(0)(i(45),i(82),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(67),r=i.n(a),o=i(14),s=i.n(o),n=i(16),l=i.n(n),c=i(66),d=i.n(c),u=i(17),p=i.n(u),v=i(15),f=i.n(v),A=i(70),m=i.n(A),g=i(73),_=i.n(g),C=i(68),h=i.n(C),x=i(72),O=i.n(x);e.default={components:{Navigation:r.a,Article:s.a,EditControls:l.a,Description:d.a,Keywords:p.a,Companies:f.a,Editor:m.a,Panel:_.a,Uploader:O.a,Accept:h.a},methods:{submitArticle:function(){this.toggle("isAccepted")},declineArticle:function(){this.toggle("isDenied")},toggle:function(t){if(-1!=t.indexOf(".")){var e=t.split(".");this[e[0]][e[1]]=!this[e[0]][e[1]]}else this[t]=!this[t]},revertEdits:function(){console.log("revert edits")},manualUpload:function(t){this.article=t,this.uploaderOpened=!1}},data:function(){return{isAccepted:!0,isDenied:!1,uploaderOpened:!1,isEdited:!1,isEditorOpened:!1,keywords:["tech","heck","beck"],companies:["Center For American Progress","Clarity PR","Exceptional Wines","Extreme Reach","Ingram Content Group","Time Inc","Turner Family Center"],article:{urlToImage:"https://tctechcrunch2011.files.wordpress.com/2018/01/10502_03_0774.jpg",title:"As David Letterman’s First Netflix Guest, Barack Obama Warns Against the ‘bubble’ of Social media",url:"https://techcrunch.com/2018/01/12/as-david-lettermans-first-netflix-guest-barack-obama-warns-against-the-bubble-of-social-media/",source:"techcrunch",publishedAt:"January 12",recommended:!1,description:"David Letterman seems to be taking the title of his new Netflix show very seriously: On the very first episode of My Next Guest Needs No Introduction With.."}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(16),r=i.n(a);e.default={props:{article:Object,isEdited:Boolean},components:{EditControls:r.a},methods:{launchEditor:function(){this.$emit("launchEditor")},revertEdits:function(){this.$emit("revertEdits")},toggleRecommend:function(){this.$emit("toggleRecommend")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{companies:Array},methods:{convertToId:function(t){return t.toLowerCase().split(" ").join("-")}},data:function(){return{selectedCompanies:[]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{article:Object}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{isEdited:Boolean},methods:{launchEditor:function(){this.$emit("launchEditor")},revertEdits:function(){this.$emit("revertEdits")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{keywords:Array},methods:{convertToId:function(t){return t.toLowerCase().split(" ").join("-")}},data:function(){return{selectedKeywords:[]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{uploaderOpened:Boolean},methods:{toggleUploader:function(){this.$emit("toggleUploader")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{isOpened:Boolean}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{isEditorOpened:Boolean,article:Object},methods:{closeEditor:function(){window.f7.closeModal();var t=this;setTimeout(function(){t.$emit("closeEditor")},300)}},data:function(){return{title:this.article.title,author:this.article.author,source:this.article.source,url:this.article.url,urlToImage:this.article.urlToImage,description:this.article.description,publishedAt:this.article.publishedAt}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),r=(i.n(a),i(4)),o=i.n(r),s=(i(6),i(14)),n=i.n(s),l=i(15),c=i.n(l),d=i(17),u=i.n(d);e.default={components:{Article:n.a,Companies:c.a,Keywords:u.a},props:{isOpened:Boolean},computed:{},methods:{closeUploader:function(){this.$emit("closeUploader")},sendURL:function(){var t=this;this.wasError=!1,this.isLoading=!0;var e={"x-api-key":this.apiKey},i="https://mercury.postlight.com/parser?url="+this.inputUrl;console.log(i),o.a.get(i,{headers:e}).then(function(e){console.log(e.data);var i=e.data,a={title:i.title,author:i.author,source:i.domain,publishedAt:i.date_published,url:i.url,urlToImage:i.lead_image_url,description:i.excerpt};t.isLoading=!1,t.$emit("manualUpload",a),t.inputUrl=""}).catch(function(e){console.log(e),t.wasError=!0,t.isLoading=!1})}},data:function(){return{inputUrl:"",isLoading:!1,wasError:!1,title:"",author:"",source:"",url:"",apiKey:"M4SkqESEjtBa1qnhj6XGhvgAVHgQBgCI94NiCGoV",urlToImage:"",description:"",publishedAt:"",keywords:["tech","heck","beck"],companies:["Center For American Progress","Clarity PR","Exceptional Wines","Extreme Reach","Ingram Content Group","Time Inc","Turner Family Center"],recommended:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(27),r=i(4),o=i.n(r),s=i(6),n=i(25),l=i.n(n),c=i(5),d=(i.n(c),i(7)),u=i.n(d),p=i(24),v=(i.n(p),i(23)),f=i.n(v),A=i(20),m=(i.n(A),i(19)),g=(i.n(m),i(22)),_=(i.n(g),i(21)),C=(i.n(_),i(18)),h=i(26),x=i.n(h);a.a.use(f.a),a.a.use(l.a,o.a),a.a.use(s.a),a.a.use(u.a),window.vue=new a.a({el:"#app",template:"<app/>",framework7:{root:"#app",material:!1,routes:C.a},components:{app:x.a}})},function(t,e){},,,,function(t,e){t.exports="data:image/png;base64,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"},function(t,e,i){t.exports=i.p+"static/img/newscart-icon-stroke-white.24c28a7.png"},function(t,e,i){t.exports=i.p+"static/img/newscart-icon.cada182.png"},function(t,e,i){var a=i(0)(i(48),i(78),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(51),i(81),null,null);t.exports=a.exports},function(t,e,i){i(59);var a=i(0)(i(52),i(83),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(53),i(84),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(54),i(79),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(55),i(80),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(56),i(74),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(57),i(76),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uploader flex",class:{"uploader-opened":t.isOpened}},[i("div",{staticClass:"uploader__input-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"flex"},[i("input",{directives:[{name:"validate",rawName:"v-validate",value:"url",expression:"'url'"},{name:"model",rawName:"v-model",value:t.inputUrl,expression:"inputUrl"}],staticClass:"uploader__input",attrs:{type:"url",name:"url",placeholder:"enter url here"},domProps:{value:t.inputUrl},on:{input:function(e){e.target.composing||(t.inputUrl=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex uploader__input-error-wrapper"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("url"),expression:"errors.has('url')"}],staticClass:"uploader__input-error"},[t._v(t._s(t.errors.first("url")))])]),t._v(" "),i("div",{staticClass:"flex"},[i("f7-button",{staticClass:"uploader__submit-button flex",class:{"uploader__submit-button__closed":0===t.inputUrl.length,"uploader__submit-button__disabled":t.errors.has("url")||0===t.inputUrl.length},attrs:{fill:""},on:{click:t.sendURL}},[t.isLoading?i("f7-preloader",{attrs:{color:"white"}}):i("span",[t._v("send")])],1)],1),t._v(" "),i("div",{staticClass:"uploader__error-wrapper"},[t.wasError?i("span",{staticClass:"uploader__text"},[i("i",{staticClass:"f7-icons uploader__error",staticStyle:{"font-size":"18px"}},[t._v("close")]),t._v(" "),t._m(2),t._v(" There was an error grabbing your article. "),i("br"),t._v(" Please check the link and try again.")]):t._e()])]),t._v(" "),i("v-touch",{staticClass:"uploader__swipe-close",on:{swipeup:t.closeUploader}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("i",{staticClass:"f7-icons uploader__cloud"},[t._v("cloud_upload")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("h2",{staticClass:"uploader__title"},[t._v("Where can we find your article?")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"uploader__error"},[t._v("Bummer!"),i("br")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"keywords"},[i("p",{staticClass:"keywords__title"},[t._v("keywords")]),t._v(" "),i("div",{staticClass:"keywords__overflow"},t._l(t.keywords,function(e){return i("form",{staticClass:"keywords__wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedKeywords,expression:"selectedKeywords"}],staticClass:"keywords__checkbox",attrs:{id:t.convertToId(e),type:"checkbox",name:e},domProps:{value:e,checked:Array.isArray(t.selectedKeywords)?t._i(t.selectedKeywords,e)>-1:t.selectedKeywords},on:{change:function(i){var a=t.selectedKeywords,r=i.target,o=!!r.checked;if(Array.isArray(a)){var s=e,n=t._i(a,s);r.checked?n<0&&(t.selectedKeywords=a.concat([s])):n>-1&&(t.selectedKeywords=a.slice(0,n).concat(a.slice(n+1)))}else t.selectedKeywords=o}}}),t._v(" "),i("label",{staticClass:"keywords__chip flex",attrs:{for:t.convertToId(e)}},[t._v(t._s(e))])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("f7-panel",{attrs:{left:"",reveal:"",layout:"dark"}},[i("f7-view",{attrs:{id:"left-panel-view","navbar-through":"","dynamic-navbar":!0}},[t.$theme.ios?i("f7-navbar",{attrs:{title:"Left Panel",sliding:""}}):t._e(),t._v(" "),i("f7-pages",[i("f7-page",[t.$theme.material?i("f7-navbar",{attrs:{title:"Left Panel",sliding:""}}):t._e(),t._v(" "),i("f7-block",{attrs:{inner:""}},[i("p",[t._v("Left panel content goes here")])]),t._v(" "),i("f7-block-title",[t._v("Load page in panel")]),t._v(" "),i("f7-list",[i("f7-list-item",{attrs:{link:"/about/",title:"About"}}),t._v(" "),i("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),t._v(" "),i("f7-block-title",[t._v("Load page in main view")]),t._v(" "),i("f7-list",[i("f7-list-item",{attrs:{link:"/about/",title:"About","link-view":"#main-view","link-close-panel":""}}),t._v(" "),i("f7-list-item",{attrs:{link:"/form/",title:"Form","link-view":"#main-view","link-close-panel":""}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nc-article-card",style:{"background-image":"url("+t.article.urlToImage+")"}},[a("div",{on:{click:t.toggleRecommend}},[t.article.recommended?a("img",{staticClass:"nc-recommended-flag",attrs:{src:i(65),alt:"recommended"}}):a("img",{staticClass:"nc-recommended-flag__stroke",attrs:{src:i(64),alt:"not recommend"}})]),t._v(" "),a("div",{staticClass:"nc-article-card__contents"},[a("h3",[a("a",{staticClass:"external",attrs:{href:t.article.url,target:"_blank"}},[t._v(t._s(t.article.title))])]),t._v(" "),a("section",{staticClass:"nc-article-card__details flex"},[a("p",[t._v(t._s(t.article.source))]),a("p",[t._v(t._s(t.article.publishedAt))])])]),t._v(" "),a("EditControls",{attrs:{isEdited:t.isEdited},on:{revertEdits:t.revertEdits,launchEditor:t.launchEditor}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"description__container"},[i("p",{staticClass:"description__text"},[t._v(t._s(t.article.description))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("f7-actions",{attrs:{id:"editor",opened:t.isEditorOpened}},[i("f7-actions-group",{staticClass:"editor__wrapper"},[i("f7-actions-label",{staticClass:"editor__header"},[t._v("Article Editor")]),t._v(" "),i("div",{staticClass:"editor__close__wrapper",on:{click:t.closeEditor}},[i("span",{staticClass:"editor__close"},[t._v("+")])]),t._v(" "),i("div",{staticClass:"flex"},[i("form",{staticClass:"editor__form"},[i("div",{staticClass:"editor__article-card",style:{"background-image":"url("+t.urlToImage+")"}},[i("div",{staticClass:"nc-article-card__contents"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"editor__title",attrs:{id:"editor-title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("section",{staticClass:"editor__article-card__details flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.source,expression:"source"}],staticClass:"editor__source",attrs:{type:"text",name:""},domProps:{value:t.source},on:{input:function(e){e.target.composing||(t.source=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.publishedAt,expression:"publishedAt"}],staticClass:"editor__publishedAt",attrs:{type:"text",name:""},domProps:{value:t.publishedAt},on:{input:function(e){e.target.composing||(t.publishedAt=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"editor__input-wrapper"},[i("div",{staticClass:"flex"},[i("i",{staticClass:"fa fa-desktop editor__icon",attrs:{"aria-hidden":"true"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"editor__input",attrs:{type:"text",name:""},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("i",{staticClass:"fa fa-picture-o editor__icon",attrs:{"aria-hidden":"true"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.urlToImage,expression:"urlToImage"}],staticClass:"editor__input",attrs:{type:"text",name:""},domProps:{value:t.urlToImage},on:{input:function(e){e.target.composing||(t.urlToImage=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"editor__input__description",domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])])])]),t._v(" "),i("f7-button",{staticClass:"editor__button",on:{click:t.closeEditor}},[t._v("done")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",[i("f7-navbar",{attrs:{title:"Form","back-link":"Back",sliding:""}}),t._v(" "),i("f7-block-title",[t._v("Form")]),t._v(" "),i("f7-list",{attrs:{form:""}},[i("f7-list-item",[i("f7-label",[t._v("Name")]),t._v(" "),i("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Password")]),t._v(" "),i("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("E-mail")]),t._v(" "),i("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("URL")]),t._v(" "),i("f7-input",{attrs:{type:"url",placeholder:"URL"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Phone")]),t._v(" "),i("f7-input",{attrs:{type:"tel",placeholder:"Phone"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Birth date")]),t._v(" "),i("f7-input",{attrs:{type:"date",placeholder:"Birth date",value:"2014-04-30"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Date time")]),t._v(" "),i("f7-input",{attrs:{type:"datetime-local"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Gender")]),t._v(" "),i("f7-input",{attrs:{type:"select"}},[i("option",{attrs:{value:"1"}},[t._v("Male")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("Female")])])],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Switch")]),t._v(" "),i("f7-input",{attrs:{type:"switch"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Range")]),t._v(" "),i("f7-input",{attrs:{type:"range",min:"0",max:"100",step:"1",value:"90"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",[t._v("Textarea")]),t._v(" "),i("f7-input",{attrs:{type:"textarea",placeholder:"Textarea"}})],1)],1),t._v(" "),i("f7-block-title",[t._v("Form With Floating Labels")]),t._v(" "),i("f7-list",{attrs:{form:""}},[i("f7-list-item",[i("f7-label",{attrs:{floating:""}},[t._v("Name")]),t._v(" "),i("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",{attrs:{floating:""}},[t._v("Password")]),t._v(" "),i("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),i("f7-list-item",[i("f7-label",{attrs:{floating:""}},[t._v("E-mail")]),t._v(" "),i("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1)],1),t._v(" "),i("f7-block-title",[t._v("Form Without Labels")]),t._v(" "),i("f7-list",{attrs:{form:""}},[i("f7-list-item",[i("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),i("f7-list-item",[i("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),i("f7-list-item",[i("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1)],1),t._v(" "),i("f7-block-title",[t._v("Checkboxes")]),t._v(" "),i("f7-list",{attrs:{form:""}},t._l(3,function(t){return i("f7-list-item",{key:t,attrs:{checkbox:"",name:"my-checkbox",value:t,title:"Checkbox "+t}})})),t._v(" "),i("f7-block-title",[t._v("Radios")]),t._v(" "),i("f7-list",{attrs:{form:""}},t._l(3,function(t){return i("f7-list-item",{key:t,attrs:{radio:"",name:"my-radio",checked:1===t,value:t,title:"Radio "+t}})})),t._v(" "),i("f7-block-title",[t._v("Buttons")]),t._v(" "),i("f7-block",{attrs:{inner:""}},[i("p",[i("f7-button",[t._v("Button")])],1),t._v(" "),i("p",[i("f7-button",{attrs:{round:""}},[t._v("Button Round")])],1),t._v(" "),i("p",[i("f7-button",{attrs:{fill:""}},[t._v("Button Fill")])],1),t._v(" "),i("p",[i("f7-buttons",[i("f7-button",{attrs:{round:"",active:""}},[t._v("Button 1")]),t._v(" "),i("f7-button",{attrs:{round:""}},[t._v("Button 2")]),t._v(" "),i("f7-button",{attrs:{round:""}},[t._v("Button 3")])],1)],1),t._v(" "),i("p",[i("f7-buttons",{attrs:{color:"orange"}},[i("f7-button",{attrs:{round:"",big:""}},[t._v("Button 1")]),t._v(" "),i("f7-button",{attrs:{round:"",big:"",active:""}},[t._v("Button 2")]),t._v(" "),i("f7-button",{attrs:{round:"",big:""}},[t._v("Button 3")])],1)],1),t._v(" "),i("p",[i("f7-grid",[i("f7-col",[i("f7-button",{attrs:{big:"",fill:"",color:"green"}},[t._v("Send")])],1),t._v(" "),i("f7-col",[i("f7-button",{attrs:{big:"",fill:"",color:"red"}},[t._v("Delete")])],1)],1)],1),t._v(" "),i("p",[i("f7-grid",[i("f7-col",[i("f7-button",{attrs:{fill:"",raised:"",color:"green"}},[t._v("Raised")])],1),t._v(" "),i("f7-col",[i("f7-button",{attrs:{raised:"",color:"red"}},[t._v("Raised")])],1),t._v(" "),i("f7-col",[i("f7-button",{attrs:{fill:"",raised:"",color:"pink"}},[t._v("Raised")])],1)],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("f7-navbar",[i("f7-nav-left",[i("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),t._v(" "),i("f7-nav-center",{staticClass:"nav__title"},[t._v("PROMETHEUS")]),t._v(" "),i("f7-nav-right",[t.uploaderOpened?i("f7-link",{attrs:{closeModal:"",back:""},on:{click:t.toggleUploader}},[i("span",{staticClass:"editor__close",staticStyle:{transform:"rotate(45deg)","font-weight":"300","font-size":"2.5em",padding:"5px"}},[t._v("+")])]):i("f7-link",{on:{click:t.toggleUploader}},[i("i",{staticClass:"fa fa-cloud-upload nav__uploader",attrs:{"aria-hidden":"true"}})])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("f7-statusbar"),t._v(" "),i("Panel"),t._v(" "),i("f7-views",[i("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[i("Navigation",{attrs:{uploaderOpened:t.uploaderOpened},on:{toggleUploader:function(e){t.toggle("uploaderOpened")}}}),t._v(" "),i("f7-pages",[i("f7-page",[i("v-touch",{on:{swipeleft:t.submitArticle,swiperight:t.declineArticle}},[i("Article",{staticStyle:{position:"relative"},attrs:{article:t.article,isEdited:t.isEdited},on:{revertEdits:t.revertEdits,launchEditor:function(e){t.toggle("isEditorOpened")},toggleRecommend:function(e){t.toggle("article.recommended")}}}),t._v(" "),i("Description",{attrs:{article:t.article}})],1),t._v(" "),i("div",{staticClass:"select-wrapper"},[i("Companies",{attrs:{companies:t.companies}})],1),t._v(" "),i("Editor",{attrs:{isEditorOpened:t.isEditorOpened,article:t.article},on:{closeEditor:function(e){t.toggle("isEditorOpened")}}})],1)],1),t._v(" "),i("Uploader",{attrs:{isOpened:t.uploaderOpened},on:{manualUpload:t.manualUpload,closeUploader:function(e){t.toggle("uploaderOpened")}}})],1)],1),t._v(" "),i("Accept",{attrs:{isOpened:t.isAccepted}})],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"confirm-accept__page":!0,"confirm-accept__page-opened":t.isOpened}},[t._m(0),t._v(" "),i("div",{staticClass:"confirm-accept__buttons"},[i("f7-button",{staticClass:"confirm-accept__button",attrs:{fill:""}},[t._v("Send it!")]),t._v(" "),i("f7-button",{staticClass:"confirm-accept__button",attrs:{fill:""}},[t._v("Cancel")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex confirm-accept__check-wrapper"},[a("img",{staticClass:"confirm-accept__check",attrs:{src:i(63),alt:""}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",[i("f7-navbar",{attrs:{title:"Dynamic Route","back-link":"Back",sliding:""}}),t._v(" "),i("f7-block",{attrs:{inner:""}},[i("ul",[i("li",[i("b",[t._v("Url:")]),t._v(" "+t._s(t.$route.url))]),t._v(" "),i("li",[i("b",[t._v("Path:")]),t._v(" "+t._s(t.$route.path))]),t._v(" "),i("li",[i("b",[t._v("Hash:")]),t._v(" "+t._s(t.$route.hash))]),t._v(" "),i("li",[i("b",[t._v("Params:")]),t._v(" "),i("ul",t._l(t.$route.params,function(e,a){return i("li",[i("b",[t._v(t._s(a)+":")]),t._v(" "+t._s(e))])}))]),t._v(" "),i("li",[i("b",[t._v("Query:")]),t._v(" "),i("ul",t._l(t.$route.query,function(e,a){return i("li",[i("b",[t._v(t._s(a)+":")]),t._v(" "+t._s(e))])}))]),t._v(" "),i("li",[i("b",[t._v("Route:")]),t._v(" "+t._s(t.$route.route.path))])])]),t._v(" "),i("f7-block",{attrs:{inner:""}},[i("f7-link",{on:{click:function(e){t.$route.view.router.back()}}},[t._v("Go back via Router API")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"companies"},[i("p",{staticClass:"companies__title"},[t._v("company")]),t._v(" "),i("div",{staticClass:"companies__overflow"},t._l(t.companies,function(e){return i("form",{staticClass:"companies__wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCompanies,expression:"selectedCompanies"}],staticClass:"companies__checkbox",attrs:{id:t.convertToId(e),type:"checkbox",name:e},domProps:{value:e,checked:Array.isArray(t.selectedCompanies)?t._i(t.selectedCompanies,e)>-1:t.selectedCompanies},on:{change:function(i){var a=t.selectedCompanies,r=i.target,o=!!r.checked;if(Array.isArray(a)){var s=e,n=t._i(a,s);r.checked?n<0&&(t.selectedCompanies=a.concat([s])):n>-1&&(t.selectedCompanies=a.slice(0,n).concat(a.slice(n+1)))}else t.selectedCompanies=o}}}),t._v(" "),i("label",{staticClass:"companies__chip flex",attrs:{for:t.convertToId(e)}},[t._v(t._s(e))])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit__container"},[i("div",{staticClass:"edit-button__wrapper"},[t.isEdited?i("f7-fab",{staticClass:"edit-button",attrs:{color:"white"},on:{click:t.revertEdits}},[i("i",{staticClass:"fa fa-repeat edit__revert-button__icon",attrs:{"aria-hidden":"true"}})]):t._e()],1),t._v(" "),i("div",{staticClass:"edit-button__wrapper"},[i("f7-fab",{staticClass:"edit-button",attrs:{color:"white"},on:{click:t.launchEditor}},[i("i",{staticClass:"fa fa-pencil edit-button__icon",attrs:{"aria-hidden":"true"}})])],1)])},staticRenderFns:[]}}],[58]);
//# sourceMappingURL=app.6441c1f48837605f5190.js.map