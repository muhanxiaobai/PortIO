import{p as R,r as f,i as b,q as C,o as h,c as v,a as s,t as E,f as L,u as _}from"./app-67d01e14.js";import{i as y}from"./http-77971bb6.js";function g(){return g=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},g.apply(this,arguments)}var B=function(){var e=!1,t=[],r=function(){if(!e){e=!0;for(var n=0,l=t.length;n<l;n++)t[n]()}},c=function(n){if(!e){t.push(n);return}n()},d={resolved:function(){return e},resolve:r,promise:{then:c}};return d},S=Object.prototype.hasOwnProperty;function A(){var i=B();return{notify:function(){i.resolve()},wait:function(){return i.promise},render:function(t,r,c){this.wait().then(function(){c(window.grecaptcha.render(t,r))})},reset:function(t){typeof t>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){typeof t>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){S.call(window,"grecaptcha")&&S.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!i.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var u=A();typeof window<"u"&&(window.vueRecaptchaApiLoaded=u.notify);var O=R({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(e,t){var r=t.slots,c=t.emit,d=f(null),a=f(null),n=function(p){c("verify",p)},l=function(){c("expired")},x=function(){c("error")};return b(function(){if(u.checkRecaptchaLoad(),e.loadRecaptchaScript&&!document.getElementById(e.recaptchaScriptId)){var o=document.createElement("script");o.id=e.recaptchaScriptId,o.src="https://"+e.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+e.language,o.async=!0,o.defer=!0,document.head.appendChild(o)}var p=g({},e,{callback:n,"expired-callback":l,"error-callback":x}),m=d.value,k=r.default?m.children[0]:m;u.render(k,p,function(w){a.value=w,c("render",w)})}),{root:d,widgetId:a,reset:function(){u.reset(a.value)},execute:function(){u.execute(a.value)}}},render:function(){var e=this.$slots.default,t;return typeof e=="function"?t=e():t=e,C("div",{ref:"root"},t)}});const P=s("h3",null,"流量补给",-1),V={key:0},j={key:1},H=s("p",null,"完成验证码以签到",-1),$={name:"Sign",setup(i){const e=window.Base.ReCaptcha,t=f({last_sign_at:null,traffic:0}),r=f("");window.matchMedia("(prefers-color-scheme: dark)").matches?r.value="dark":r.value="light",y.get("user").then(d=>{t.value.traffic=d.data.traffic});function c(d){y.post("traffic",{recaptcha:d}).then(a=>{t.value=a.data;let n=`获得了 ${a.data.traffic} GB 流量！`;a.data.traffic===0&&(n="没有获得流量～"),alert(n)}).finally(()=>{y.get("user").then(a=>{t.value.traffic=a.data.traffic}).finally(()=>{})})}return(d,a)=>(h(),v("div",null,[P,s("div",null,[s("p",null,"当前流量: "+E(t.value.traffic)+"GB",1),t.value.is_signed?(h(),v("div",V,"今日已签到")):(h(),v("div",j,[H,L(_(O),{sitekey:_(e),theme:r.value,loadRecaptchaScript:"",recaptchaHost:"www.recaptcha.net",onVerify:c},null,8,["sitekey","theme"])]))])]))}};export{$ as default};
