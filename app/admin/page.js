"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, updateDoc, doc, increment } from "firebase/firestore";
import Header from "@/components/Header";

export default function Admin() {
  const { user, userData, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // Only fetch if admin
    if (userData?.role === 'admin') {
      fetchUsers();
    }
  }, [userData]);

  const fetchUsers = async () => {
    setFetching(true);
    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const userList = [];
      querySnapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(userList);
    } catch (err) {
      console.error(err);
    } finally {
      setFetching(false);
    }
  };

  const addCredits = async (userId) => {
    const userRef = doc(db, "users", userId);
    try {
      await updateDoc(userRef, {
        credits: increment(5)
      });
      alert("5 क्रेडिट जोड़ देहल गईल बा!");
      fetchUsers();
    } catch (err) {
      alert("गलती भइल बा.");
    }
  };

  if (loading || fetching) return <div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>लोड होत बा...</div>;

  if (userData?.role !== 'admin') {
    return (
      <main>
        <Header />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>माफ करीं, रउआ पास ई पेज खोले के अधिकार नइखे.</h2>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="container" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>एडमिन पैनल - यूजर क्रेडिट जोड़ीं</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {users.map((u) => (
            <div key={u.id} className="glass-container" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>ईमेल: {u.email}</div>
              <div style={{ color: 'var(--text-muted)' }}>UID: {u.uid}</div>
              <div style={{ marginTop: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{u.credits || 0}</span> क्रेडिट बचल बा
              </div>
              <button 
                onClick={() => addCredits(u.id)}
                className="primary-btn"
                style={{ marginTop: '1rem' }}
              >
                +5 क्रेडिट जोड़ीं
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
