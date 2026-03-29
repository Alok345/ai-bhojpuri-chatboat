"use client";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { getBhojpuriResponse } from "@/lib/gemini";
import { db } from "@/lib/firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export default function Chat() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [persona, setPersona] = useState("normal"); // 'normal' or 'bfgf'
  const chatEndRef = useRef(null);
  
  // Speech Recognition Setup
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "speechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "hi-IN"; // Closest to Bhojpuri for detection
      
      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSendMessage(transcript);
      };

      rec.onend = () => setIsListening(false);
      setRecognition(rec);
    }
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speakText = (text) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hi-IN"; // Using Hindi as fallback for Bhojpuri
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = async (textOverride = null) => {
    const text = textOverride || inputText;
    if (!text.trim() || isResponding) return;

    if (userData?.credits <= 0) {
      alert("रउआ पास क्रेडिट खतम हो गईल बा. कृपया क्रेडिट खरीदीं.");
      return;
    }

    const newMessage = { role: "user", text };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setIsResponding(true);

    try {
      // Get AI Response
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const aiText = await getBhojpuriResponse(text, history, persona);
      
      // Update credits in Firestore
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        credits: increment(-1)
      });

      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
      speakText(aiText);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "ai", text: "माफ करीं, कुछ गड़बड़ी भइल बा." }]);
    } finally {
      setIsResponding(false);
    }
  };

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    }
  };

  if (loading || !user) return <div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>लोड होत बा...</div>;

  return (
    <main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem 0', overflow: 'hidden' }}>
        
        {/* Credits & Persona Selection */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '15px' }}>
          <div>
            <strong>बचल क्रेडिट: {userData?.credits}</strong>
            {userData?.credits <= 0 && (
              <p style={{ color: 'var(--secondary)', fontSize: '0.8rem' }}>पइसा भेजीं 7991133447 पर (UPI)</p>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <button 
              onClick={() => setPersona("normal")}
              style={{ padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--primary)', background: persona === 'normal' ? 'var(--primary)' : 'transparent', color: 'white', cursor: 'pointer' }}
             >साधारण</button>
             <button 
              onClick={() => setPersona("bfgf")}
              style={{ padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--secondary)', background: persona === 'bfgf' ? 'var(--secondary)' : 'transparent', color: 'white', cursor: 'pointer' }}
             >बॉयफ्रेंड / गर्लफ्रेंड</button>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
              <h2 style={{ color: 'white' }}>का हाल बा?</h2>
              <p>कुछ बोलीं या लिखीं, हम तैयार बानी जवाब देवे खातिर.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              padding: '1rem',
              borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
              background: msg.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
              animation: 'fadeIn 0.3s ease'
            }}>
              {msg.text}
            </div>
          ))}
          {isResponding && (
            <div style={{ alignSelf: 'flex-start', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px 20px 20px 0' }}>
              एआई जवाब देअत बा...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Payment Warning Overlay */}
        {userData?.credits <= 0 && (
          <div className="glass-container" style={{ margin: '1rem', padding: '1rem', textAlign: 'center', borderColor: 'var(--secondary)' }}>
             <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>क्रेडिट खतम!</h4>
             <p style={{ fontSize: '0.9rem' }}>5 नया क्रेडिट खातिर 20 रुपया ई यूपीआई नंबर पर भेजीं: <b>7991133447</b></p>
             <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>पेमेंट कइला के बाद एडमिन 5 क्रेडिट जोड़ दीहें.</p>
          </div>
        )}

        {/* Input Area */}
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--border)' }}>
          <button 
            onClick={startListening}
            className={isListening ? "pulse-btn" : ""}
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: isListening ? 'var(--secondary)' : 'var(--primary)', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}
          >
            {isListening ? "🛑" : "🎤"}
          </button>
          <input 
            type="text" 
            placeholder="भोजपुरी में कुछू लिखीं..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            style={{ 
              flex: 1, 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--border)', 
              borderRadius: '15px', 
              padding: '0 1.5rem', 
              color: 'white',
              fontSize: '1rem'
            }}
          />
          <button 
            onClick={() => handleSendMessage()}
            className="primary-btn"
            style={{ borderRadius: '15px' }}
          >
             भेजीं
          </button>
        </div>
      </div>

      <style jsx>{`
        .pulse-btn {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </main>
  );
}
