/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 3.7.0(cb30c9802f0cf72eb34d6ba7d40fc2f2143464c8)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/typescript/lib/typescriptServicesMetadata",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.typescriptVersion="3.8.3"})),define("vs/language/typescript/monaco.contribution",["require","exports","./lib/typescriptServicesMetadata"],(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o,r,s,a,c=monaco.Emitter,u=function(){function t(t,e){this._onDidChange=new c,this._onDidExtraLibsChange=new c,this._extraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(t),this.setDiagnosticsOptions(e),this._onDidExtraLibsChangeTimeout=-1}return Object.defineProperty(t.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onDidExtraLibsChange",{get:function(){return this._onDidExtraLibsChange.event},enumerable:!0,configurable:!0}),t.prototype.getExtraLibs=function(){return this._extraLibs},t.prototype.addExtraLib=function(t,e){var n,i=this;if(n=void 0===e?"ts:extralib-"+Math.random().toString(36).substring(2,15):e,this._extraLibs[n]&&this._extraLibs[n].content===t)return{dispose:function(){}};var o=1;return this._extraLibs[n]&&(o=this._extraLibs[n].version+1),this._extraLibs[n]={content:t,version:o},this._fireOnDidExtraLibsChangeSoon(),{dispose:function(){var t=i._extraLibs[n];t&&t.version===o&&(delete i._extraLibs[n],i._fireOnDidExtraLibsChangeSoon())}}},t.prototype.setExtraLibs=function(t){if(this._extraLibs=Object.create(null),t&&t.length>0)for(var e=0,n=t;e<n.length;e++){var i=n[e],o=i.filePath||"ts:extralib-"+Math.random().toString(36).substring(2,15),r=i.content;this._extraLibs[o]={content:r,version:1}}this._fireOnDidExtraLibsChangeSoon()},t.prototype._fireOnDidExtraLibsChangeSoon=function(){var t=this;-1===this._onDidExtraLibsChangeTimeout&&(this._onDidExtraLibsChangeTimeout=setTimeout((function(){t._onDidExtraLibsChangeTimeout=-1,t._onDidExtraLibsChange.fire(void 0)}),0))},t.prototype.getCompilerOptions=function(){return this._compilerOptions},t.prototype.setCompilerOptions=function(t){this._compilerOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.getDiagnosticsOptions=function(){return this._diagnosticsOptions},t.prototype.setDiagnosticsOptions=function(t){this._diagnosticsOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.setMaximumWorkerIdleTime=function(t){},t.prototype.setEagerModelSync=function(t){this._eagerModelSync=t},t.prototype.getEagerModelSync=function(){return this._eagerModelSync},t}();e.LanguageServiceDefaultsImpl=u,function(t){t[t.None=0]="None",t[t.CommonJS=1]="CommonJS",t[t.AMD=2]="AMD",t[t.UMD=3]="UMD",t[t.System=4]="System",t[t.ES2015=5]="ES2015",t[t.ESNext=99]="ESNext"}(i||(i={})),function(t){t[t.None=0]="None",t[t.Preserve=1]="Preserve",t[t.React=2]="React",t[t.ReactNative=3]="ReactNative"}(o||(o={})),function(t){t[t.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",t[t.LineFeed=1]="LineFeed"}(r||(r={})),function(t){t[t.ES3=0]="ES3",t[t.ES5=1]="ES5",t[t.ES2015=2]="ES2015",t[t.ES2016=3]="ES2016",t[t.ES2017=4]="ES2017",t[t.ES2018=5]="ES2018",t[t.ES2019=6]="ES2019",t[t.ES2020=7]="ES2020",t[t.ESNext=99]="ESNext",t[t.JSON=100]="JSON",t[t.Latest=99]="Latest"}(s||(s={})),function(t){t[t.Classic=1]="Classic",t[t.NodeJs=2]="NodeJs"}(a||(a={}));var p=new u({allowNonTsExtensions:!0,target:s.Latest},{noSemanticValidation:!1,noSyntaxValidation:!1}),g=new u({allowNonTsExtensions:!0,allowJs:!0,target:s.Latest},{noSemanticValidation:!0,noSyntaxValidation:!1});function d(){return f().then((function(t){return t.getTypeScriptWorker()}))}function l(){return f().then((function(t){return t.getJavaScriptWorker()}))}function f(){return new Promise((function(e,n){t(["./tsMode"],e,n)}))}monaco.languages.typescript={ModuleKind:i,JsxEmit:o,NewLineKind:r,ScriptTarget:s,ModuleResolutionKind:a,typescriptVersion:n.typescriptVersion,typescriptDefaults:p,javascriptDefaults:g,getTypeScriptWorker:d,getJavaScriptWorker:l},monaco.languages.onLanguage("typescript",(function(){return f().then((function(t){return t.setupTypeScript(p)}))})),monaco.languages.onLanguage("javascript",(function(){return f().then((function(t){return t.setupJavaScript(g)}))}))}));