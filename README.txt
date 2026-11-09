خطوات التشغيل:
1) Firebase: اعمل مشروع من console.firebase.google.com، فعّل Authentication (Email/Password وGoogle) وFirestore، وحط بيانات المشروع في config.js. قواعد Firestore: allow read, write: if request.auth.uid == userId; داخل match /users/{userId}.
2) ارفع فولدر site على Netlify أو Cloudflare Pages واربطه بدومين.
3) غيّر YOUR-DOMAIN.com في sitemap.xml وrobots.txt، وغيّر YOUR-EMAIL@example.com في contact.html.
4) قدّم على AdSense بعد ما المحتوى يكبر، وحط الأرقام في config.js وads.txt.
5) اللهجات: أول زيارة بيظهر اختيار «مصر / السعودية»، والاختيار بيتحفظ في المتصفح (masar_dl). كل نصوص اللهجة في dialect.js (كل مفتاح فيه [مصري, سعودي])، وتقدر تعدّلها من هناك.