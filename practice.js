/* مسار — تدريب ومراجعة: صوت الكلمات، تمارين متنوعة، مراجعة متباعدة، ونطق.
   لا يحتاج أي مكتبة. يعتمد على S و LV و xv و save من app.js (تُستدعى وقت الحاجة فقط). */
(function(){
var IX={eg:0,sa:1,fu:2,ma:3};
var P={
title:["تدريب ومراجعة","تدريب ومراجعة","تدريب ومراجعة","تدريب ومراجعة"],
card:["مراجعة اليوم","مراجعة اليوم","مراجعة اليوم","مراجعة اليوم"],
due:["{0} للمراجعة دلوقتي","{0} للمراجعة الحين","{0} جاهزة للمراجعة","{0} باش تراجعها دابا"],
none_c:["تدريب حر على اللي اتعلّمته","تدريب حر على اللي تعلّمته","تدريب حر على ما تعلّمته","تدريب حر على لي تعلمتي"],
note:["المراجعة بترجّعلك الكلمة قبل ما تنساها، من غير ضغط ولا درجة.","المراجعة ترجّع لك الكلمة قبل لا تنساها، بدون ضغط ولا درجة.","تعيد المراجعة إليك الكلمة قبل أن تنساها، دون ضغط ولا درجة.","المراجعة كترجّع ليك الكلمة قبل ما تنساها، بلا ضغط ولا نقطة."],
none:["مفيش حاجة للمراجعة النهارده 🎉","ما فيه شي للمراجعة اليوم 🎉","لا شيء للمراجعة اليوم 🎉","ماكاين والو للمراجعة اليوم 🎉"],
empty:["كمّل درس مفردات الأول وهتلاقي كلماته هنا.","كمّل درس مفردات أول وبتلقى كلماته هنا.","أكمل درس مفردات أولًا وستجد كلماته هنا.","كمّل شي درس ديال المفردات أولا وغادي تلقى الكلمات ديالو هنا."],
start:["ابدأ المراجعة","ابدأ المراجعة","ابدأ المراجعة","بدا المراجعة"],
free:["تدريب حر","تدريب حر","تدريب حر","تدريب حر"],
q_l:["اسمع واختار المعنى","اسمع واختر المعنى","استمع واختر المعنى","سمع وختار المعنى"],
q_a:["اختار الكلمة بالإنجليزي","اختر الكلمة بالإنجليزي","اختر الكلمة بالإنجليزية","ختار الكلمة بالإنجليزية"],
q_t:["اكتب الكلمة بالإنجليزي","اكتب الكلمة بالإنجليزي","اكتب الكلمة بالإنجليزية","كتب الكلمة بالإنجليزية"],
q_o:["رتّب الكلمات عشان تكوّن الجملة","رتّب الكلمات عشان تكوّن الجملة","رتّب الكلمات لتكوّن الجملة","رتب الكلمات باش تكون الجملة"],
q_s:["انطقها بصوتك","انطقها بصوتك","انطقها بصوتك","نطقها بصوتك"],
chk:["تحقق","تحقق","تحقق","تحقق"],
next:["التالي","التالي","التالي","من بعد"],
ok:["صح ✅","صح ✅","صحيح ✅","هاكا ✅"],
no:["الصح:","الصحيح:","الصحيح:","الصح:"],
fin:["خلّصت التدريب 👏","خلّصت التدريب 👏","أنهيت التدريب 👏","سالات التمرين 👏"],
res:["جاوبت صح {0} من {1}. اللي غلطت فيه هيرجعلك قريب.","جاوبت صح {0} من {1}. اللي غلطت فيه بيرجع لك قريب.","أجبت صحيحًا عن {0} من {1}. وما أخطأت فيه سيعود إليك قريبًا.","جاوبتي مزيان على {0} من {1}. لي غلطتي فيه غادي يرجع ليك قريب."],
more:["كمّل تدريب","كمّل تدريب","واصل التدريب","كمل التمرين"],
back:["العودة إلى المسار","العودة إلى المسار","العودة إلى المسار","رجوع للمسار"],
unsup:["المتصفح ده مش بيدعم التعرّف على الصوت. جرّب Chrome.","المتصفح هذا ما يدعم التعرّف على الصوت. جرّب Chrome.","هذا المتصفح لا يدعم التعرّف على الصوت. جرّب Chrome.","هاد المتصفح ما كيدعمش التعرف على الصوت. جرب Chrome."],
deny:["مش قادر أوصل للمايك. اسمح بالوصول من إعدادات المتصفح.","ما قدرت أوصل للمايك. اسمح بالوصول من إعدادات المتصفح.","تعذّر الوصول إلى الميكروفون. اسمح بالوصول من إعدادات المتصفح.","ما قدرتش نوصل للميكرو. سمح بالوصول من إعدادات المتصفح."],
heard:["سمعتك بتقول:","سمعتك تقول:","سمعتك تقول:","سمعتك كتقول:"],
good:["نطق ممتاز ✅","نطق ممتاز ✅","نطق ممتاز ✅","نطق مزيان ✅"],
retry:["قرّب منها. جرّب تاني 🎤","قريب منها. جرّب مرة ثانية 🎤","قريب منها. حاول مرة أخرى 🎤","قريب منها. عاود 🎤"],
skip:["تخطّي دلوقتي","تخطّى الحين","تخطَّ الآن","تخطى دابا"],
nothing:["ما سمعتش حاجة. جرّب تاني.","ما سمعت شي. جرّب مرة ثانية.","لم أسمع شيئًا. حاول مرة أخرى.","ما سمعت والو. عاود."],
listen:["اضغط واسمع","اضغط واسمع","اضغط واستمع","ضغط وسمع"]
};
function T(k){var a=P[k]||[k];var s=a[IX[(window.DL&&DL.code)||"eg"]||0]||a[0];for(var i=1;i<arguments.length;i++)s=s.replace("{"+(i-1)+"}",arguments[i]);return s}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return "&#"+c.charCodeAt(0)+";"})}
/* ---------- صوت ---------- */
var TTS=!!(window.speechSynthesis&&window.SpeechSynthesisUtterance),vo=null;
function pickVoice(){if(!TTS)return;var v=speechSynthesis.getVoices()||[];vo=v.filter(function(x){return /^en[-_]US/i.test(x.lang)})[0]||v.filter(function(x){return /^en/i.test(x.lang)})[0]||null}
if(TTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function speak(t){if(!TTS)return;try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="en-US";if(vo)u.voice=vo;u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
var SRC=window.SpeechRecognition||window.webkitSpeechRecognition;
function norm(t){return String(t).toLowerCase().replace(/[’‘`]/g,"'").replace(/[.,!?;:"“”]/g,"").replace(/\s+/g," ").trim()}
function listen(target,cb){/* cb(status,heard,ok) */
 if(!SRC){cb("unsup");return}
 var r=new SRC();r.lang="en-US";r.interimResults=false;r.maxAlternatives=4;var got=false;
 r.onresult=function(e){got=true;var alts=[];for(var i=0;i<e.results[0].length;i++)alts.push(e.results[0][i].transcript);
  var tg=norm(target),tw=tg.split(" "),ok=false;
  alts.forEach(function(a){var n=norm(a);if(n===tg)ok=true;else if(tw.length>2){var aw=n.split(" "),hit=tw.filter(function(w){return aw.indexOf(w)>-1}).length;if(hit/tw.length>=.8)ok=true}});
  cb("res",alts[0],ok)};
 r.onerror=function(e){got=true;cb(e.error==="not-allowed"||e.error==="service-not-allowed"?"deny":"nothing")};
 r.onend=function(){if(!got)cb("nothing")};
 try{r.start()}catch(e){cb("nothing")}}
/* ---------- المحتوى ---------- */
function pool(){var out=[],seen={};
 if(typeof LV==="undefined")return out;
 LV.forEach(function(l){l.U.forEach(function(u){u.s.forEach(function(s){
  if(S.d[s.id]!=="done")return;
  if(s.k==="w"&&s.w)s.w.split(";").forEach(function(p){var a=p.split("|");var id="w:"+a[0];if(!seen[id]){seen[id]=1;out.push({id:id,k:"w",en:a[0],ar:a[1]})}});
  var e=(window.EXPL||{})[s.id];
  if(s.k==="v"&&e&&e.ex)e.ex.forEach(function(r){var tk=String(r[0]).split(" ");var id="s:"+r[0];if(tk.length>=3&&tk.length<=9&&!seen[id]){seen[id]=1;out.push({id:id,k:"s",en:r[0],ar:xv(r[1])})}})
 })})});return out}
function allWords(){var o=[];if(typeof LV==="undefined")return o;LV.forEach(function(l){l.U.forEach(function(u){u.s.forEach(function(s){if(s.k==="w"&&s.w)s.w.split(";").forEach(function(p){var a=p.split("|");o.push({en:a[0],ar:a[1]})})})})});return o}
var INT=[1,2,4,8,16,32],DAY=864e5;
function sr(id){S.sr=S.sr||{};return S.sr[id]||(S.sr[id]={b:0,d:0})}
function dueList(pl){var n=Date.now();return pl.filter(function(x){return sr(x.id).d<=n}).sort(function(a,b){return sr(a.id).d-sr(b.id).d})}
function mark(id,ok){var r=sr(id);if(ok){r.d=Date.now()+INT[r.b]*DAY;r.b=Math.min(5,r.b+1)}else{r.b=0;r.d=Date.now()+6*36e5}try{save()}catch(e){}}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
/* ---------- بطاقة الصفحة الرئيسية ---------- */
function card(){var pl=pool();if(!pl.length)return "";var d=dueList(pl).length;
 return '<a class="card prc" href="practice.html"><span class="prc-i">🎧</span><span><b>'+T("card")+'</b><small>'+(d?T("due",d):T("none_c"))+'</small></span></a>'}
/* ---------- صفحة التدريب ---------- */
var Q=[],qi=0,right=0,again=[],wrong=[];
function page(){var A=document.getElementById("app");if(!A)return;
 var pl=pool();
 var h='<button class="back" id="pbk">→ '+T("back")+'</button><h1>'+T("title")+'</h1>';
 if(!pl.length){A.innerHTML=h+'<p class="sub">'+T("empty")+'</p>';bk();return}
 var d=dueList(pl);
 h+='<p class="sub">'+T("note")+'</p><div class="card">'+(d.length?'<b>'+T("due",d.length)+'</b>':'<b>'+T("none")+'</b>')+'<div class="row" style="margin-top:12px">'+(d.length?'<button class="btn primary" id="pgo">'+T("start")+'</button>':'')+'<button class="btn'+(d.length?'':' primary')+'" id="pfr">'+T("free")+'</button></div></div>';
 A.innerHTML=h;bk();
 if($("pgo"))$("pgo").onclick=function(){begin(d.slice(0,8))};
 $("pfr").onclick=function(){var x=d.slice(0,3);var rest=shuf(pl.filter(function(y){return x.indexOf(y)<0}));begin(x.concat(rest).slice(0,8))};
}
function $(i){return document.getElementById(i)}
function bk(){var b=$("pbk");if(b)b.onclick=function(){location.href="index.html"}}
function kindOf(it){var b=sr(it.id).b;
 if(it.k==="s")return "o";
 if(b<=0)return "l";if(b===1)return "a";if(b<=3)return "t";return SRC?"s":"t"}
function begin(items){Q=items.map(function(it){return{it:it,t:kindOf(it)}});qi=0;right=0;again=[];wrong=[];show()}
function show(){var A=$("app");
 if(qi>=Q.length){if(again.length){Q=Q.concat(again.map(function(it){return{it:it,t:it.k==="s"?"o":"a",re:1}}));again=[];}else return fin()}
 var q=Q[qi],it=q.it,h='<div class="prh"><span>'+(qi+1)+' / '+Q.length+'</span><div class="bar"><i style="width:'+Math.round(qi/Q.length*100)+'%"></i></div></div>';
 A.innerHTML=h+'<div class="card prq" id="pq"></div><div id="pfb"></div>';
 var B=$("pq");
 if(q.t==="l")exL(B,it);else if(q.t==="a")exA(B,it);else if(q.t==="t")exT(B,it);else if(q.t==="o")exO(B,it);else exS(B,it)}
function answer(ok,it,expect,extra){var fb=$("pfb");mark(it.id,ok);if(ok)right++;else{again.push(it);wrong.push(it)}
 fb.innerHTML='<div class="note'+(ok?'':' w')+'"><b>'+(ok?T("ok"):T("no")+' <span dir="ltr">'+esc(expect)+'</span>')+'</b></div>'+(extra||"")+'<div class="row"><button class="btn primary" id="pnx">'+T("next")+'</button></div>';
 var n=$("pnx");n.focus();n.onclick=function(){qi++;show()}}
function opts(it,field,n){var all=allWords().filter(function(w){return w[field]!==it[field]}),seen={},o=[];shuf(all).forEach(function(w){if(o.length<n-1&&!seen[w[field]]){seen[w[field]]=1;o.push(w[field])}});o.push(it[field]);return shuf(o)}
function choice(B,it,title,prompt,field,dir,auto){
 B.innerHTML='<p class="sub">'+title+'</p><div class="prp" dir="'+dir+'">'+prompt+'</div><div class="pro">'+opts(it,field,4).map(function(o){return '<button class="btn pob" data-v="'+esc(o)+'" dir="'+(field==="en"?"ltr":"auto")+'">'+esc(o)+'</button>'}).join("")+'</div>';
 if(auto)speak(it.en);var sp=B.querySelector(".spk");if(sp)sp.onclick=function(){speak(it.en)};
 B.querySelectorAll(".pob").forEach(function(b){b.onclick=function(){var ok=b.getAttribute("data-v")===it[field];B.querySelectorAll(".pob").forEach(function(x){x.disabled=true;if(x.getAttribute("data-v")===it[field])x.classList.add("good")});if(!ok)b.classList.add("bad");answer(ok,it,it[field])}})}
function exL(B,it){if(!TTS)return exA(B,it);choice(B,it,T("q_l"),'<button class="spk big" type="button" aria-label="'+T("listen")+'">🔊</button>',"ar","ltr",1)}
function exA(B,it){choice(B,it,T("q_a"),esc(it.ar),"en","auto",0)}
function exT(B,it){
 B.innerHTML='<p class="sub">'+T("q_t")+'</p><div class="prp">'+esc(it.ar)+'</div><input class="pin" id="pi" dir="ltr" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="row"><button class="btn primary" id="pck">'+T("chk")+'</button></div>';
 var i=$("pi");i.focus();
 function go(){var v=norm(i.value);if(!v)return;var ok=it.en.split("/").some(function(x){return norm(x)===v});i.disabled=true;$("pck").disabled=true;speak(it.en);answer(ok,it,it.en)}
 $("pck").onclick=go;i.onkeydown=function(e){if(e.key==="Enter")go()}}
function exO(B,it){var tk=it.en.split(" "),pool_=shuf(tk.map(function(w,i){return{w:w,i:i}})),pick=[];
 function draw(){B.innerHTML='<p class="sub">'+T("q_o")+'</p><div class="prp">'+esc(it.ar)+'</div><div class="pra" dir="ltr">'+pick.map(function(c,k){return '<button class="chip on" data-k="'+k+'">'+esc(c.w)+'</button>'}).join("")+'</div><div class="pra" dir="ltr">'+pool_.filter(function(c){return pick.indexOf(c)<0}).map(function(c){return '<button class="chip" data-i="'+c.i+'">'+esc(c.w)+'</button>'}).join("")+'</div><div class="row"><button class="btn primary" id="pck"'+(pick.length===tk.length?'':' disabled')+'>'+T("chk")+'</button></div>';
  B.querySelectorAll(".chip.on").forEach(function(b){b.onclick=function(){pick.splice(+b.getAttribute("data-k"),1);draw()}});
  B.querySelectorAll(".chip:not(.on)").forEach(function(b){b.onclick=function(){pick.push(pool_.filter(function(c){return c.i===+b.getAttribute("data-i")})[0]);draw()}});
  $("pck").onclick=function(){var ok=norm(pick.map(function(c){return c.w}).join(" "))===norm(it.en);speak(it.en);B.querySelectorAll(".chip").forEach(function(c){c.disabled=true});$("pck").disabled=true;answer(ok,it,it.en,SRC?'<div class="row"><button class="btn" id="pmic" type="button">🎤 '+T("q_s")+'</button></div><div id="pmr" class="sub"></div>':"");
   var m=$("pmic");if(m)m.onclick=function(){micRun(it.en,$("pmr"))}}}
 draw()}
function micRun(target,out){out.textContent="🎙️ …";listen(target,function(st,heard,ok){
 if(st==="unsup")out.textContent=T("unsup");else if(st==="deny")out.textContent=T("deny");else if(st==="nothing")out.textContent=T("nothing");
 else out.innerHTML=T("heard")+' <b dir="ltr">'+esc(heard)+'</b> — '+(ok?T("good"):T("retry"))})}
function exS(B,it){
 B.innerHTML='<p class="sub">'+T("q_s")+'</p><div class="prp">'+esc(it.ar)+'</div><div class="row"><button class="btn" id="pls" type="button">🔊</button><button class="btn primary" id="pmic" type="button">🎤</button></div><div id="pmr" class="sub"></div><div class="row"><button class="btn" id="psk" type="button">'+T("skip")+'</button></div>';
 $("pls").onclick=function(){speak(it.en)};
 $("psk").onclick=function(){exT(B,it)};
 $("pmic").onclick=function(){var out=$("pmr");out.textContent="🎙️ …";listen(it.en,function(st,heard,ok){
  if(st==="unsup"||st==="deny"||st==="nothing"){out.textContent=T(st==="unsup"?"unsup":st==="deny"?"deny":"nothing");return}
  out.innerHTML=T("heard")+' <b dir="ltr">'+esc(heard)+'</b>';
  if(ok){$("pmic").disabled=true;$("psk").disabled=true;answer(true,it,it.en)}else out.innerHTML+=' — '+T("retry")})}}
function fin(){var A=$("app");
 A.innerHTML='<h1>'+T("fin")+'</h1><div class="card"><p>'+T("res",right,Q.length)+'</p><div class="row"><button class="btn primary" id="pmr2">'+T("more")+'</button><button class="btn" id="pbk">'+T("back")+'</button></div></div>';
 bk();$("pmr2").onclick=page}
/* ---------- أزرار الصوت والنطق داخل الدروس ---------- */
function decorate(){
 if(!TTS&&!SRC)return;
 document.querySelectorAll("#app .wd:not([data-pr])").forEach(function(r){r.setAttribute("data-pr","1");var en=r.querySelector("span[dir=ltr]");if(!en)return;var t=en.textContent;
  var w=document.createElement("span");w.className="prb";
  if(TTS){var b=document.createElement("button");b.type="button";b.className="spk";b.textContent="🔊";b.setAttribute("aria-label","🔊 "+t);b.onclick=function(e){e.stopPropagation();speak(t)};w.appendChild(b)}
  if(SRC){var m=document.createElement("button");m.type="button";m.className="spk mic";m.textContent="🎤";m.setAttribute("aria-label","🎤 "+t);m.onclick=function(e){e.stopPropagation();m.textContent="…";listen(t,function(st,heard,ok){m.textContent=ok?"✅":"🎤";var o=r.querySelector(".prm");if(!o){o=document.createElement("small");o.className="prm";r.appendChild(o)}o.textContent=st==="res"?heard+(ok?" ✅":" ✗"):T(st==="unsup"?"unsup":st==="deny"?"deny":"nothing")})};w.appendChild(m)}
  r.insertBefore(w,en.nextSibling)});
 document.querySelectorAll("#app .xex li:not([data-pr])").forEach(function(li){li.setAttribute("data-pr","1");var en=li.querySelector(".xen");if(!en||!TTS)return;var b=document.createElement("button");b.type="button";b.className="spk sm";b.textContent="🔊";b.setAttribute("aria-label","🔊");b.onclick=function(){speak(en.textContent)};li.insertBefore(b,li.firstChild)})}
function watch(){var A=document.getElementById("app");if(!A||!window.MutationObserver)return;decorate();new MutationObserver(function(){decorate()}).observe(A,{childList:true})}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",watch);else watch();
window.PR={card:card,page:page,speak:speak};
})();
