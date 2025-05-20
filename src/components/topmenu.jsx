import React, { useRef } from "react";
import "../CSS/main.css";
import "../CSS/responsive.css"
const categories = [
  { name: "برای شما", icon: "bi-person" },
  { name: "پخش زنده", icon: "bi-record-circle" },
  { name: "ویدئو گیم", icon: "bi-controller" },
  { name: "بازی و سرگرمی", icon: "bi-gamepad" },
  { name: "خبری", icon: "bi-newspaper" },
  { name: "فیلم، سریال و مستند", icon: "bi-film" },
  { name: "کارتون و انیمیشن", icon: "bi-tv" },
  { name: "ورزشی", icon: "bi-soccer" },
  { name: "تحصیلات و یادگیری", icon: "bi-book" },
  { name: "غذا و نوشیدنی", icon: "bi-cup" },
  { name: "مذهبی", icon: "bi-church" },
  { name: "موسیقی", icon: "bi-music-note" },
  { name: "طنز و کمدی", icon: "bi-laugh" },
  { name: "فناوری و رایانه", icon: "bi-laptop" },
  { name: "فرهنگ و هنر", icon: "bi-palette" },
  { name: "خودرو و وسایل نقلیه", icon: "bi-car" },
  { name: "قانون و سیاست", icon: "bi-gavel" },
  { name: "مالی و اقتصادی", icon: "bi-wallet" },
  { name: "کسب و کار", icon: "bi-briefcase" },
  { name: "اجتماعی", icon: "bi-people" },
  { name: "سفر و گردشگری", icon: "bi-airplane" },
  { name: "حیوانات", icon: "bi-paw" },
];

const TopMenu = () => {
  const menuRef = useRef(null);

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <nav className="top-menu">
      <div className="menu-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <ul className="menu-list" ref={menuRef}>
          {categories.map((category, index) => (
            <li key={index} className="menu-item">
              {/* <i className={`bi ${category.icon} menu-icon`}></i> */}
              <a href="">
                <span className="menu-name">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
