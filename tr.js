/* مسار: النص المتزامن مع الفيديو + ترجمة الكلمة بالضغط عليها */
(function(){
var L=[],cur=-1,box,lst,pop,frame,manual=0,CK="enpath_dict_v1",cache={},local=null;
try{cache=JSON.parse(localStorage.getItem(CK)||"{}")}catch(e){}
function g(i){return document.getElementById(i)}
function x(t){return String(t).replace(/[&<>"']/g,function(c){return "&#"+c.charCodeAt(0)+";"})}
function cmd(f,a){try{frame.contentWindow.postMessage(JSON.stringify({event:"command",func:f,args:a||[]}),"*")}catch(e){}}
function dict(){
 if(local)return local;local={};
 [window.W1,window.W2,window.W3].forEach(function(s){if(!s)return;s.split(";").forEach(function(p){var a=p.split("|");if(a[1])local[a[0].toLowerCase().replace(/[’]/g,"'")]=a[1]})});
 var d=window.DICT||{};for(var k in d)local[k.toLowerCase()]=d[k];return local}
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function find(w){var d=dict(),k=norm(w);if(d[k])return d[k];
 var c=[k.replace(/'s$/,""),k.replace(/s$/,""),k.replace(/es$/,""),k.replace(/ed$/,""),k.replace(/ing$/,"")];
 for(var i=0;i<c.length;i++)if(c[i]!==k&&d[c[i]])return d[c[i]];return null}
function online(q,cb){
 var k=norm(q);if(cache[k])return cb(cache[k]);
 if(!window.fetch)return cb(null);
 fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(q)+"&langpair=en|ar")
 .then(function(r){return r.json()}).then(function(j){
  var t=j&&j.responseData&&j.responseData.translatedText;
  if(t&&!/MYMEMORY|QUERY LENGTH|INVALID/i.test(t)){cache[k]=t;try{localStorage.setItem(CK,JSON.stringify(cache))}catch(e){}cb(t)}else cb(null)})
 .catch(function(){cb(null)})}
function tr(q,cb){var f=find(q);if(f)return cb(f);online(q,cb)}
function say(t){try{var u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function show(word){
 pop.hidden=false;pop.innerHTML='<div class="trpw" dir="ltr">'+x(word)+'</div><div class="trpm" id="trpm">جارٍ الترجمة…</div><div class="trpb"><button class="btn" id="trps" type="button">🔊 نطق</button><button class="btn" id="trpx" type="button">إغلاق</button></div>';
 g("trps").onclick=function(){say(word)};g("trpx").onclick=function(){pop.hidden=true};
 tr(word,function(t){var m=g("trpm");if(m)m.textContent=t||"تعذّرت الترجمة الآن. جرّب مرة ثانية."});
 say(word)}
function words(s){return s.split(/([A-Za-z]+(?:['’][A-Za-z]+)*)/).map(function(p,i){return i%2?'<span class="trw" role="button" tabindex="0">'+x(p)+'</span>':x(p)}).join("")}
function scroll(i){
 if(Date.now()-manual<3500)return;var e=L[i].el;
 lst.scrollTo?lst.scrollTo({top:e.offsetTop-lst.clientHeight/2+e.clientHeight/2,behavior:"smooth"}):lst.scrollTop=e.offsetTop-lst.clientHeight/2}
window.TR={
 init:function(s){
  box=g("tr");frame=g("yt");var d=(window.SUBS||{})[s.y];if(!d||!d.length||!box)return;
  var a=s.st||0,b=s.en||1e9,hasAr=false;
  d=d.filter(function(r){return r[0]>=a-1&&r[0]<=b});if(!d.length)return;
  d.forEach(function(r){if(r[2])hasAr=true});
  box.hidden=false;
  box.innerHTML='<b>النص والترجمة</b><div class="trh">النص بيمشي مع الفيديو. اضغط على أي كلمة تعرف معناها، أو اضغط ▶ جنب أي جملة تسمعها تاني.</div>'+(hasAr?'<div class="row" style="margin-top:8px"><button class="btn" id="trt" type="button">ترجمة الجمل: تشغيل</button></div>':'')+'<div class="trl" id="trl"></div><div class="trpop" id="trpop" hidden></div>';
  lst=g("trl");pop=g("trpop");
  lst.innerHTML=d.map(function(r,i){return '<div class="trln" data-i="'+i+'"><button class="trpt" type="button" aria-label="شغّل من هنا" data-t="'+r[0]+'">▶</button><div><p dir="ltr">'+words(r[1])+'</p>'+(r[2]?'<p class="trar">'+x(r[2])+'</p>':'')+'</div></div>'}).join("");
  L=d.map(function(r,i){return{t:r[0],el:lst.children[i]}});cur=-1;
  lst.addEventListener("click",function(e){
   var w=e.target.closest(".trw"),p=e.target.closest(".trpt");
   if(p){cmd("seekTo",[+p.getAttribute("data-t"),true]);cmd("playVideo");return}
   if(w){cmd("pauseVideo");show(w.textContent)}});
  lst.addEventListener("keydown",function(e){if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("trw")){e.preventDefault();cmd("pauseVideo");show(e.target.textContent)}});
  ["wheel","touchmove"].forEach(function(n){lst.addEventListener(n,function(){manual=Date.now()},{passive:true})});
  lst.addEventListener("mouseup",function(){setTimeout(function(){var q=String(getSelection()).trim();if(q.split(/\s+/).length>=2&&q.length<180&&lst.contains(getSelection().anchorNode)){cmd("pauseVideo");show(q)}},10)});
  var tb=g("trt");if(tb)tb.onclick=function(){var off=lst.classList.toggle("noar");tb.textContent="ترجمة الجمل: "+(off?"إيقاف":"تشغيل")}},
 tick:function(t){
  if(!L.length)return;var i=-1;for(var k=0;k<L.length;k++){if(L[k].t<=t+.15)i=k;else break}
  if(i===cur)return;if(cur>=0)L[cur].el.classList.remove("on");cur=i;if(i>=0){L[i].el.classList.add("on");scroll(i)}}
};
})();
