(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9501c724"],{"0a14":function(n,e,t){"use strict";t.r(e);var o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=function(n){return-1!==o.indexOf(n)},r=function(n,e,t){var o,r,s,a,c,l,u,p,d=e.$props.value?e.$props.value:"",f=e.$props.initialValue?e.$props.initialValue:"";t.setContent(d||f),e.$listeners.input&&(r=t,a=(o=e).$props.modelEvents?o.$props.modelEvents:null,c=Array.isArray(a)?a.join(" "):a,o.$watch("value",function(n,e){r&&"string"==typeof n&&n!==s&&n!==e&&(r.setContent(n),s=n)}),r.on(c||"change keyup undo redo",function(){s=r.getContent(),o.$emit("input",s)})),l=n,u=e.$listeners,p=t,Object.keys(u).filter(i).forEach(function(n){var e=u[n];"function"==typeof e&&("onInit"===n?e(l,p):p.on(n.substring(2),function(n){return e(n,p)}))})},s=0,a=function(n){var e=(new Date).getTime();return n+"_"+Math.floor(1e9*Math.random())+ ++s+String(e)},c=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},l=t("1f38"),u={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},p=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},d={listeners:[],scriptId:a("tiny-script"),scriptLoaded:!1},f=function(n){return function(){var e,t,o,i=p({},n.$props.init,{readonly:n.$props.disabled,selector:"#"+n.elementId,plugins:(e=n.$props.init&&n.$props.init.plugins,t=n.$props.plugins,c(e).concat(c(t))),toolbar:n.$props.toolbar||n.$props.init&&n.$props.init.toolbar,inline:n.inlineEditor,setup:function(e){(n.editor=e).on("init",function(t){return r(t,n,e)}),n.$props.init&&"function"==typeof n.$props.init.setup&&n.$props.init.setup(e)}});null!==(o=n.element)&&"textarea"===o.tagName.toLowerCase()&&(n.element.style.visibility=""),Object(l.a)().init(i)}},h={props:u,created:function(){this.elementId=this.$props.id||a("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(l.a)())f(this)();else if(this.element){var n=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"stable",t=this.$props.apiKey?this.$props.apiKey:"";o=d,i=n,r="https://cloud.tinymce.com/"+e+"/tinymce.min.js?apiKey="+t,s=f(this),o.scriptLoaded?s():(o.listeners.push(s),i.getElementById(o.scriptId)||(a=o.scriptId,u=r,p=function(){o.listeners.forEach(function(n){return n()}),o.scriptLoaded=!0},(h=(c=i).createElement("script")).type="application/javascript",h.id=a,h.addEventListener("load",p),h.src=u,c.head.appendChild(h)))}var o,i,r,s,a,c,u,p,h},beforeDestroy:function(){null!==Object(l.a)()&&Object(l.a)().remove(this.editor)},render:function(n){return this.inlineEditor?(o=n,i=this.elementId,r=this.$props.tagName,o(r||"div",{attrs:{id:i}})):(e=n,t=this.elementId,e("textarea",{attrs:{id:t},style:{visibility:"hidden"}}));var e,t,o,i,r}},v=(t("d087"),{data:function(){return{content:"hello "}},components:{editor:h}}),y=(t("ca3a"),t("2877")),m=Object(y.a)(v,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("editor",{model:{value:n.content,callback:function(e){n.content=e},expression:"content"}})],1)},[],!1,null,"8e964fea",null);m.options.__file="richtext.vue",e.default=m.exports},"163c":function(n,e,t){},"1f38":function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return o});var o=function(){var e="undefined"!=typeof window?window:n;return e&&e.tinymce?e.tinymce:null}}).call(this,t("c8ba"))},ca3a:function(n,e,t){"use strict";var o=t("163c");t.n(o).a},d087:function(n,e,t){}}]);