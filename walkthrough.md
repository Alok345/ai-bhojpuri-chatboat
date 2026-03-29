# 🎙️ भोजपुरी एआई चैटबोट (Bhojpuri AI Chatbot)

यह एक प्रीमियम नेक्स्ट-जेएस (Next.js) एप्लिकेशन है जो पूरी तरह से भोजपुरी भाषा में संचार करता है। इसमें गूगल जेमिनी (Gemini) एआई का उपयोग किया गया है और यह स्पीच-टू-स्पीच (Speech-to-Speech) क्षमताओं से लैस है।

---

## 🌟 मुख्य विशेषताएं (Core Features)

- **भोजपुरी एआई इंजन**: जेमिनी 1.5 फ्लैश के साथ एकीकृत, जो केवल भोजपुरी में जवाब देता है।
- **आवाज से बातचीत (STT/TTS)**: आप भोजपुरी में बोल सकते हैं (Microphone) और एआई आपको भोजपुरी आवाज में जवाब देगा।
- **BF/GF मोड**: विशेष व्यक्तित्व मोड जहाँ एआई एक प्रेमी / प्रेमिका की तरह भोजपुरी में मीठी बातें करता है।
- **क्रेडिट सिस्टम**: हर यूजर को 5 फ्री बातचीत (Credits) मिलते हैं।
- **क्रेडिट भुगतान**: क्रेडिट खत्म होने पर यूजर 7991133447 पर 20 रुपये का UPI पेमेंट कर सकता है।

---

## 🏗️ प्रोजेक्ट की संरचना (Project Architecture)

- **Frontend**: Next.js (App Router, JS/JSX)
- **Styling**: Vanilla CSS (Glassmorphism & Rich Aesthetics)
- **Database & Auth**: Firebase (Auth & Firestore)
- **AI Backend**: Google Generative AI (Gemini 1.5 Flash)

---

## 🛠️ एडमिन गाइड (Admin Guide - How to Add Credits)

1. **पहला एडमिन अकाउंट**: `context/AuthContext.js` में हमने एक ईमेल `admin@chatbot.com` को एडमिन के रूप में सेट किया है। आप इसे अपनी पसंद के ईमेल से बदल सकते हैं।
2. **एडमिन पेज**: लॉगिन करने के बाद, `/admin` पेज पर जाएं।
3. **क्रेडिट जोड़ें**: यहाँ आपको सभी रजिस्टर्ड यूजर्स की लिस्ट दिखेगी। आप किसी भी यूजर के लिए `+5 क्रेडिट जोड़ीं` बटन दबाकर उनके अकाउंट में क्रेडिट जोड़ सकते हैं।

---

## 🚀 कैसे चलाएं (Deployment / Quick Start)

1. **इंस्टॉलेशन**: `npm install` (हो चूका है)।
2. **डेवलपमेंट सर्वर**: `npm run dev` चलाएं।
3. **URL**: ब्राउुजर में `http://localhost:3000` खोलें।

---

## 📝 महत्वपूर्ण फाइलें (Important Files)

- [firebase.js](file:///e:/ai%20bhojpuri%20chatboat/lib/firebase.js): फायरबेस कॉन्फ़िगरेशन।
- [gemini.js](file:///e:/ai%20bhojpuri%20chatboat/lib/gemini.js): एआई और भोजपुरी प्रॉम्प्ट लॉजिक।
- [AuthContext.js](file:///e:/ai%20bhojpuri%20chatboat/context/AuthContext.js): यूजर और क्रेडिट ट्रैकिंग।
- [chat/page.js](file:///e:/ai%20bhojpuri%20chatboat/app/chat/page.js): मुख्य चैट इंटरफेस और आवाज की सुविधा।
