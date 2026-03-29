"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push("/chat");
    } catch (err) {
      setError("साइनअप में गड़बड़ी भइल बा. कृपया बाद में कोशिश करीं.");
    }
  };

  return (
    <main>
      <Header />
      <section style={{ maxWidth: '450px', margin: '6rem auto', padding: '0 1rem' }}>
        <div className="glass-container" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>साइनअप करीं</h2>
          {error && <p style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>ईमेल</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border)', 
                  padding: '0.8rem', 
                  borderRadius: '10px', 
                  color: 'white' 
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>पासवर्ड</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border)', 
                  padding: '0.8rem', 
                  borderRadius: '10px', 
                  color: 'white' 
                }}
              />
            </div>
            <button className="primary-btn" type="submit">साइनअप करीं</button>
          </form>
          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            एकाउंट हई? <Link href="/login" style={{ color: 'var(--primary)' }}>लॉगिन करीं</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
