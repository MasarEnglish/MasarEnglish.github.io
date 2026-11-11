(async()=>{const F=(window.CFG||{}).fb;if(!F||!F.apiKey)return;
const V="https://www.gstatic.com/firebasejs/10.12.2/",[A,B,C]=await Promise.all([import(V+"firebase-app.js"),import(V+"firebase-auth.js"),import(V+"firebase-firestore.js")]);
const app=A.initializeApp(F),au=B.getAuth(app),db=C.getFirestore(app);let user=null,tm;
const btn=document.getElementById("acc");btn.hidden=false;const UI='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>';const setBtn=u=>{if(u){btn.className="pill in";btn.innerHTML='<b class="av">'+((u.email||"م")[0]||"م").toUpperCase()+'</b><span class="acl">حسابي</span>';btn.setAttribute("aria-label","حسابي")}else{btn.className="pill out";btn.innerHTML=UI+'<span class="acl">تسجيل الدخول</span>';btn.setAttribute("aria-label","تسجيل الدخول")}};setBtn(null);
window.cloudSave=s=>{if(!user)return;clearTimeout(tm);tm=setTimeout(()=>C.setDoc(C.doc(db,"users",user.uid),{data:JSON.stringify(s),ts:Date.now()}),800)};
B.onAuthStateChanged(au,async u=>{user=u;window.authUser=u;setBtn(u);if(!u)return;
 try{const d=await C.getDoc(C.doc(db,"users",u.uid));const n=o=>Object.keys((o&&o.d)||{}).length;
  if(d.exists()){const r=JSON.parse(d.data().data);if(n(r)>n(S)||(n(r)===n(S)&&!S.ob&&r.ob)){Object.assign(S,r);localStorage.setItem(KEY,JSON.stringify(S));if(!sessionStorage.sy){sessionStorage.sy=1;location.reload()}return}}
  cloudSave(S)}catch(e){}});
const T={"auth/invalid-credential":D("e_cred"),"auth/user-not-found":D("e_cred"),"auth/wrong-password":D("e_cred"),"auth/email-already-in-use":D("e_used"),"auth/weak-password":D("e_weak"),"auth/invalid-email":D("e_mail")};
window.authDo=async(k,em,pw)=>{try{if(k==="su")await B.createUserWithEmailAndPassword(au,em,pw);else if(k==="si")await B.signInWithEmailAndPassword(au,em,pw);else{const g=new B.GoogleAuthProvider();try{await B.signInWithPopup(au,g)}catch(e){if(e.code==="auth/popup-blocked"||e.code==="auth/operation-not-supported-in-this-environment"){await B.signInWithRedirect(au,g);return 0}if(e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request")return 0;throw e}}return 1}catch(e){throw T[e.code]||(D("e_gen")+" ["+(e.code||"")+"]")}};
window.authReset=async em=>{try{await B.sendPasswordResetEmail(au,em);return D("e_reset")}catch(e){throw T[e.code]||(D("e_gen")+" ["+(e.code||"")+"]")}};
btn.onclick=()=>{const m=document.createElement("div");m.className="md";const out=!!user;
 m.innerHTML=out?'<div class="bx af-bx" role="dialog" aria-modal="true"><button class="af-x" id="cl" type="button" aria-label="إغلاق">✕</button><div class="af-h"><span class="af-logo">م</span><b>حسابي</b><small dir="ltr">'+(user.email||"")+'</small></div><button class="btn big" id="lo" type="button">تسجيل الخروج</button></div>':'<div class="bx af-bx" role="dialog" aria-modal="true"><button class="af-x" id="cl" type="button" aria-label="إغلاق">✕</button><div class="af-h"><span class="af-logo">م</span><b>مرحبًا بك في مسار</b><small>'+D("ob_save_s")+'</small></div>'+window.afHtml()+'</div>';
 document.body.appendChild(m);
 const ok=()=>{m.remove()};m.querySelector("#cl").onclick=ok;m.onclick=e=>{if(e.target===m)ok()};
 if(out){m.querySelector("#lo").onclick=async()=>{await B.signOut(au);sessionStorage.removeItem("sy");ok()};return}
 window.afWire(m,ok)};})();
