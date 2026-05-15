import { useState } from "react";
import { Moon, Sun, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import "./Header.css";

export const Header = ({ dark, onToggleDark }) => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
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
                <div className="header__dropdown header__dropdown--wide">
                  <a href="#" className="header__dropdown-item header__dropdown-item--all">
                    Все что есть <span className="header__dropdown-badge">130</span>
                  </a>
                  <div className="header__dropdown-divider" />
                  <div className="header__dropdown-section">Популярные категории</div>
                  <a href="#" className="header__dropdown-item">Курсы по программированию</a>
                  <a href="#" className="header__dropdown-item">Курсы по искусственному интеллекту</a>
                  <a href="#" className="header__dropdown-item">Курсы по аналитике данных</a>
                  <a href="#" className="header__dropdown-item">Курсы по DevOps</a>
                  <a href="#" className="header__dropdown-item">Курсы по тестированию</a>
                  <div className="header__dropdown-divider" />
                  <div className="header__dropdown-section">Популярные курсы</div>
                  <a href="#" className="header__dropdown-item">AI-автоматизация</a>
                  <a href="#" className="header__dropdown-item">DevOps-инженер с нуля</a>
                  <a href="#" className="header__dropdown-item">Go-разработчик</a>
                  <a href="#" className="header__dropdown-item">Java-разработчик</a>
                  <a href="#" className="header__dropdown-item">Python-разработчик</a>
                  <a href="#" className="header__dropdown-item">Аналитик данных</a>
                  <a href="#" className="header__dropdown-item">ИИ для разработчиков</a>
                  <a href="#" className="header__dropdown-item">Фронтенд-разработчик</a>
                </div>
              )}
            </div>
            <div className="header__nav-item header__nav-item--desktop">
              <button
                className="header__nav-btn"
                onClick={() => { setAboutOpen(o => !o); setCoursesOpen(false); }}
              >
                О Хекслете
                <ChevronDown size={14} className={`header__chevron ${aboutOpen ? "header__chevron--open" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="header__dropdown">
                  <a href="#" className="header__dropdown-item">О нас</a>
                  <a href="#" className="header__dropdown-item">Блог</a>
                  <a href="#" className="header__dropdown-item">Отзывы студентов</a>
                  <div className="header__dropdown-divider" />
                  <a href="#" className="header__dropdown-item">Результаты (Исследование)</a>
                  <a href="#" className="header__dropdown-item">Хекслет Карьера</a>
                  <a href="#" className="header__dropdown-item">Поддержка (В ТГ)</a>
                  <a href="#" className="header__dropdown-item">Реферальная программа</a>
                  <a href="#" className="header__dropdown-item">🎁 Подарочные сертификаты</a>
                  <a href="#" className="header__dropdown-item">Вакансии</a>
                  <a href="#" className="header__dropdown-item">Компаниям</a>
                  <a href="#" className="header__dropdown-item">Колледж</a>
                  <a href="#" className="header__dropdown-item">Частная школа</a>
                </div>
              )}
            </div>
            <a href="#" className="header__nav-btn header__nav-btn--desktop">Подписка</a>
          </nav>
        </div>

        <div className="header__right">
           <a href="#" className="header__nav-btn header__nav-btn--desktop">Регистрация</a>
          <a href="#" className="header__nav-btn header__nav-btn--desktop">Вход</a>
          <button
            onClick={onToggleDark}
            className="header__theme-btn header__theme-btn--desktop"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="header__burger"
            aria-label="Меню"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (<div className= "header__mobile-menu">
        <a href = "#" className="header__mobile-item header__mobile-item__arrow">
          О Хекслете <ChevronRight size={16} />
        </a>
        <a href="#" className="header__mobile-item">Подписка</a>
        <div className="header__mobile-divider" />
          <a href="#" className="header__mobile-item">Регистрация</a>
          <a href="#" className="header__mobile-item">Вход</a>
          <div className="header__mobile-divider" />
          <button
            onClick={onToggleDark}
            className="header__mobile-item header__mobile-item--theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            Переключить тему
          </button>
      </div>)}
    </header>
  );
}

const HexletLogo = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    </svg>
  );
}

export default Header;