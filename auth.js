(async()=>{const F=(window.CFG||{}).fb;if(!F||!F.apiKey)return;
const V="https://www.gstatic.com/firebasejs/10.12.2/",[A,B,C]=await Promise.all([import(V+"firebase-app.js"),import(V+"firebase-auth.js"),import(V+"firebase-firestore.js")]);
const app=A.initializeApp(F),au=B.getAuth(app),db=C.getFirestore(app);let user=null,tm;
const btn=document.getElementById("acc");btn.hidden=false;btn.textContent="تسجيل الدخول";
window.cloudSave=s=>{if(!user)return;clearTimeout(tm);tm=setTimeout(()=>C.setDoc(C.doc(db,"users",user.uid),{data:JSON.stringify(s),ts:Date.now()}),800)};
B.onAuthStateChanged(au,async u=>{user=u;btn.textContent=u?"👤 "+(u.email||"حسابي").split("@")[0]:"تسجيل الدخول";if(!u)return;
 try{const d=await C.getDoc(C.doc(db,"users",u.uid));const n=o=>Object.keys((o&&o.d)||{}).length;
  if(d.exists()){const r=JSON.parse(d.data().data);if(n(r)>n(S)||(n(r)===n(S)&&!S.ob&&r.ob)){Object.assign(S,r);localStorage.setItem(KEY,JSON.stringify(S));if(!sessionStorage.sy){sessionStorage.sy=1;location.reload()}return}}
  cloudSave(S)}catch(e){}});
const T={"auth/invalid-credential":D("e_cred"),"auth/user-not-found":D("e_cred"),"auth/wrong-password":D("e_cred"),"auth/email-already-in-use":D("e_used"),"auth/weak-password":D("e_weak"),"auth/invalid-email":D("e_mail")};
btn.onclick=()=>{const m=document.createElement("div");m.className="md";const out=!!user;
 m.innerHTML='<div class="bx"><b>'+(out?(user.email||"حسابي"):"حسابك في مسار")+'</b>'+(out?'<button class="btn" id="lo">تسجيل الخروج</button>':'<input id="em" type="email" placeholder="الإيميل" dir="ltr"><input id="pw" type="password" placeholder="كلمة السر" dir="ltr"><button class="btn" id="si">دخول</button><button class="btn" id="su">حساب جديد</button><button class="btn" id="go">الدخول بحساب جوجل</button><button class="btn" id="rp">نسيت كلمة السر</button>')+'<div class="er" id="er"></div><button class="btn" id="cl">إغلاق</button></div>';document.body.appendChild(m);
 const $=i=>m.querySelector("#"+i),er=e=>$("er").textContent=T[e.code]||(D("e_gen")+" ["+(e.code||e.message||"")+"]"),ok=()=>{m.remove()};
 $("cl").onclick=ok;if(out){$("lo").onclick=async()=>{await B.signOut(au);sessionStorage.removeItem("sy");ok()};return}
 $("si").onclick=()=>B.signInWithEmailAndPassword(au,$("em").value,$("pw").value).then(ok).catch(er);
 $("su").onclick=()=>B.createUserWithEmailAndPassword(au,$("em").value,$("pw").value).then(ok).catch(er);
 $("go").onclick=()=>{const g=new B.GoogleAuthProvider();B.signInWithPopup(au,g).then(ok).catch(e=>{if(e&&(e.code==="auth/popup-blocked"||e.code==="auth/operation-not-supported-in-this-environment"))B.signInWithRedirect(au,g).catch(er);else if(e&&(e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request"))return;else er(e)})};
 $("rp").onclick=()=>B.sendPasswordResetEmail(au,$("em").value).then(()=>$("er").textContent=D("e_reset")).catch(er)}})();