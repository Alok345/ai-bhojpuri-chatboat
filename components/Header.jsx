"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, logout, userData } = useAuth();

  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link href="/" className="logo">
           भोजपुरी एआई (Bhojpuri AI)
        </Link>
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                 {userData?.credits} क्रेडिट बचल बा
              </span>
              <Link href="/chat">
                <button className="primary-btn">चैट शुरू करीं</button>
              </Link>
              <button 
                onClick={logout} 
                style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                लॉगआउट
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="secondary-btn">लॉगिन</button>
              </Link>
              <Link href="/signup">
                <button className="primary-btn">साइनअप</button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
