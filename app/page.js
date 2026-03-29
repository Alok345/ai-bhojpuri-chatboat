import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      
      <section style={{ 
        padding: '6rem 1rem', 
        textAlign: 'center', 
        maxWidth: '900px', 
        margin: '0 auto',
        animation: 'fadeIn 1s ease-out'
      }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
           रउआ के स्वागत बा <br />
          <span style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--tertiary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>भोजपुरी एआई चैटबोट</span> पर
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
           दुनिया के पहिला एआई जे खाली भोजपुरिया में बात करेला. <br />
           रउआ लिख सकीलें, बोल सकीलें आ एआई रउआ के आवाज में जवाब दी.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/chat">
            <button className="primary-btn" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
               अभी बात करीं (Start Chat)
            </button>
          </Link>
          <Link href="/signup">
            <button className="secondary-btn" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
               नया एकाउंट बनाईं
            </button>
          </Link>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <div className="glass-container">
            <h3 style={{ marginBottom: '1rem' }}>🎙️ बोल के बात करीं</h3>
            <p style={{ color: 'var(--text-muted)' }}>
               रउआ भोजपुरी में बोल सकीलें आ एआई समझी.
            </p>
          </div>
          <div className="glass-container">
            <h3 style={{ marginBottom: '1rem' }}>🗣️ आवाज में जवाब</h3>
            <p style={{ color: 'var(--text-muted)' }}>
               जवाब खाली भोजपुरिया आवाज में ही मिली.
            </p>
          </div>
          <div className="glass-container">
            <h3 style={{ marginBottom: '1rem' }}>💑 मन पसंद बात</h3>
            <p style={{ color: 'var(--text-muted)' }}>
               जेईसे मन करे बात करीं, जेके BF/GF लेखा बात करे के बा उहो होई.
            </p>
          </div>
        </div>
      </div>

      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem', 
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; 2024 भोजपुरी एआई (Bhojpuri AI) | डिजाइन बाइ गूगल डीपमाइंड</p>
      </footer>
    </main>
  );
}
