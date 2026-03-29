import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "भोजपुरी एआई चैटबोट | Bhojpuri AI Chatbot",
  description: "एगो ऐसन चैटबोट जे खाली भोजपुरिया में बात करेला. (A chatbot that only speaks in Bhojpuri)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
