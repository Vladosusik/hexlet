import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs.jsx";
import ProgramsSection from "./components/ProgramsSection/ProgramsSection.jsx"

export const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ minHeight: "100vh", backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
        <main>
          <HeroSection />
          <CategoryTabs />
          <ProgramsSection/>
        </main>
      </div>
    </div>
  );
}

export default App