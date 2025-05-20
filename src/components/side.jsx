import "../CSS/side.css";
import { useState } from "react";
const Side = ({isSideOpen}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="side-master"style={{overflow: !isSideOpen ? "auto" : "hidden"}}>
        <div className={!isSideOpen ? "part1" : "closed"}>
          <ul>
            <li>
              <a href="">
                <i className="bi bi-house-door"></i>
                <span>خانه</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-camera-reels"></i>
                <span>پخش زنده</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-tv"></i>
                <span>مرور کانال ها</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="part2" style={{visibility: !isSideOpen ? "visible" : "hidden"}}>
          <div className="div-line">
            <span>برای شما</span>
            <div className="line"></div>
          </div>
          <span>
            برای دنبال‌کردن کانال‌ها، مشاهده ویدیوهای پیشنهادی مطابق با سلیقه
            شما و تجربه‌کاربری بهتر، وارد شوید.
          </span>
          <button>
            <i className="bi bi-person"></i>ورود به آپارات
          </button>
        </div>
        <div className="part3" style={{visibility: !isSideOpen ? "visible" : "hidden"}}>
          <div className="div-line">
            <span>تنظیمات</span>
            <div className="line"></div>
          </div>
          <label htmlFor="">
            <span>
              <i className="bi bi-moon"></i>
              <span>حالت شب</span>
            </span>
            <button
              id="theme-toggle"
              className={isToggled ? "clicked" : ""}
              onClick={handleClick}
            >
              <span className="circle"></span>
            </button>
          </label>
        </div>
        <div className="part4" style={{visibility: !isSideOpen ? "visible" : "hidden"}}>
          <div className="div-line">
            <span>سرویس ها</span>
            <div className="line"></div>
          </div>
          <ul>
            <li>
              <a href="">
                <i className="bi bi-controller"></i>
                <span>آپارات گیم</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-music-note-beamed"></i>
                <span>آپارات موزیک</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-film"></i>
                <span>فیلم و سریال</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-journal-bookmark"></i>
                <span>فیلیمو مدرسه</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-headset-vr"></i>
                <span>آپارات اسپرت</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-smartwatch"></i>
                <span>آپارات استایل</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-person-arms-up"></i>
                <span>آپارات کودک</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="part5" style={{visibility: !isSideOpen ? "visible" : "hidden"}}>
          <div className="div-line">
            <span>بیشتر</span>
            <div className="line"></div>
          </div>
          <ul>
            <li>
              <a href="">
                <i className="bi bi-phone"></i>
                <span>دانلود اپلیکیشن آپارات</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-c-circle"></i>
                <span>حق نشر</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-envelope-open"></i>
                <span>پشتیبانی</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-journal-text"></i>
                <span>وبلاگ آپارات</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-exclamation-octagon"></i>
                <span>قوانین آپارات</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-wallet2"></i>
                <span>درآمد زایی از آپارات</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-megaphone"></i>
                <span>تبلیغات در آپارات</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-people"></i>
                <span>درباره ما</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="part6" style={{visibility: !isSideOpen ? "visible" : "hidden"}}>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-telegram"></i>
          </a>
          <a href="">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Side;
