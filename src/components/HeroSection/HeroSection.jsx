import { Glasses, TrendingUp, Flame, Building2 } from "lucide-react";
import heroImg from "./hero.jpg";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            Онлайн-школа<br />
            программирования<br />
            Хекслет
          </h1>
          <p className="hero__subtitle">
            Помогли стать программистами{" "}
            <strong className="hero__highlight">4500+ выпускникам</strong>.
            Пройдите путь от новичка до первой работы с поддержкой практикующих разработчиков и стажировкой
          </p>
          
        </div>

        <div className="hero__cards">
          <FeatureCard icon={<Glasses size={20} />} title="Освоить профессию с нуля" href="#" variant="default" />
          <FeatureCard icon={<TrendingUp size={20} />} title="Освоить навык и повысить грейд" href="#" variant="default" />
          <FeatureCard icon={<Flame size={20} />} title="Начать бесплатно" href="#" variant="primary" />
          <FeatureCard icon={<Building2 size={20} />} title="Обучение от компании" href="#" variant="default" />
        </div>
        <div className="hero__photo-wrap">
          <img src={heroImg} alt="Студенты Хекслет" className="hero__photo-img" />
        
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, href, variant }) => {
  return (
    <a href={href} className={`feature-card feature-card--${variant}`}>
      <span className="feature-card__icon">{icon}</span>
      <span className="feature-card__title">{title} →</span>
    </a>
  );
}



export default HeroSection