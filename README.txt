خطوات التشغيل:
1) Firebase: اعمل مشروع من console.firebase.google.com، فعّل Authentication (Email/Password وGoogle) وFirestore، وحط بيانات المشروع في config.js. قواعد Firestore: allow read, write: if request.auth.uid == userId; داخل match /users/{userId}.
2) ارفع فولدر site على Netlify أو Cloudflare Pages واربطه بدومين.
3) غيّر masarat.icu في sitemap.xml وrobots.txt، وغيّر YOUR-EMAIL@example.com في contact.html.
4) قدّم على AdSense بعد ما المحتوى يكبر، وحط الأرقام في config.js وads.txt.
5) اللهجات: أول زيارة بيظهر اختيار «مصر / السعودية / المغرب / الفصحى»، والاختيار بيتحفظ في المتصفح (masar_dl). كل نصوص اللهجة في dialect.js (كل مفتاح فيه [مصري, سعودي, فصحى, مغربي])، وتقدر تعدّلها من هناك.
6) الإعلانات: 3 أماكن في كل صفحة مؤهلة: فوق (slot1) والنص (slot2) وتحت (slot3)، وأرقام الوحدات بتتحط في config.js بعد قبول AdSense. الصفحات المؤهلة: صفحات الدروس والاختبارات اللي ليها نص في explain.js (قسم «شرح الدرس» ظاهر)، والصفحة الرئيسية لما تظهر خريطة الدروس. باقي الصفحات من غير إعلانات. سكربت AdSense بيتحمّل من app.js في الصفحات المؤهلة بس، ووسم التحقق google-adsense-account موجود في كل الصفحات. إعلان الـanchor الثابت بيتفعّل من لوحة AdSense (Auto ads) بعد القبول.
7) الشرح الثابت للـSEO: بعد أي تعديل أو إضافة في explain.js شغّل  node tools/build-static.js  عشان نص الشرح يتكتب جوه صفحات الدروس نفسها (جوجل وAdSense بيشوفوه حتى لو الدرس مقفول). وبعدها شغّل node tools/check-explain.js للمراجعة.
