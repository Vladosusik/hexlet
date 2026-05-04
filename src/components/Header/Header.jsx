import { useState } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import "./Header.css";

export default function Header({ dark, onToggleDark }) {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <a href="/" className="header__logo">
            <HexletLogo />
            <span>Хекслет</span>
          </a>
          <nav className="header__nav">
            <div className="header__nav-item">
              <button
                className="header__nav-btn"
                onClick={() => { setCoursesOpen(o => !o); setAboutOpen(false); }}
              >
                Все курсы
                <ChevronDown size={14} className={`header__chevron ${coursesOpen ? "header__chevron--open" : ""}`} />
              </button>
              {coursesOpen && (
                <div className="header__dropdown">
                  <a href="#" className="header__dropdown-item">Программирование</a>
                  <a href="#" className="header__dropdown-item">Тестирование</a>
                  <a href="#" className="header__dropdown-item">DevOps</a>
                  <a href="#" className="header__dropdown-item">Аналитика</a>
                  <a href="#" className="header__dropdown-item">ИИ</a>
                </div>
              )}
            </div>
            <div className="header__nav-item">
              <button
                className="header__nav-btn"
                onClick={() => { setAboutOpen(o => !o); setCoursesOpen(false); }}
              >
                О Хекслете
                <ChevronDown size={14} className={`header__chevron ${aboutOpen ? "header__chevron--open" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="header__dropdown">
                  <a href="#" className="header__dropdown-item">О школе</a>
                  <a href="#" className="header__dropdown-item">Блог</a>
                  <a href="#" className="header__dropdown-item">Карьера</a>
                  <a href="#" className="header__dropdown-item">Контакты</a>
                </div>
              )}
            </div>
            <a href="#" className="header__nav-btn">Подписка</a>
          </nav>
        </div>

        <div className="header__right">
          <a href="#" className="header__nav-btn">Регистрация</a>
          <a href="#" className="header__nav-btn">Вход</a>
          <button
            onClick={onToggleDark}
            className="header__theme-btn"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HexletLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    </svg>
  );
}
