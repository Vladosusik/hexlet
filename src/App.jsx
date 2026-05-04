import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ minHeight: "100vh", backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
        <main>
          <HeroSection />
          <CategoryTabs />
        </main>
      </div>
    </div>
  );
}
export default App