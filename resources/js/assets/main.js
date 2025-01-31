// main.js
import logo from './logo.jpeg';
import homeillustration from './illustration-1.webp';
import avatar1 from './avatar-1.webp';
import avatar2 from './avatar-2.webp';
import avatar3 from './avatar-3.webp';
import avatar4 from './avatar-4.webp';
import avatar5 from './avatar-5.webp';
import about5 from './about-5.webp';
import about2 from './about-2.webp';


export const homeImage = {
  logo,
  homeillustration,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  about2,
  about5,
}


export const toggleScrolled = () => {
    const body = document.querySelector("body");
    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  };
  
  export const handleMobileNavToggle = (navMenuId, toggleBtnId) => {
    const mobileNavToggle = document.getElementById(toggleBtnId);
    const navMenu = document.getElementById(navMenuId);
  
    if (mobileNavToggle && navMenu) {
      navMenu.classList.toggle("hidden");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
    }
  };
  
  export const setupMobileNavLinks = (navMenuId, toggleBtnId) => {
    const navMenu = document.getElementById(navMenuId);
    const mobileNavToggle = document.getElementById(toggleBtnId);
    const links = document.querySelectorAll(`#${navMenuId} a`);
  
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu && !navMenu.classList.contains("hidden")) {
          navMenu.classList.add("hidden");
          if (mobileNavToggle) {
            mobileNavToggle.classList.add("bi-list");
            mobileNavToggle.classList.remove("bi-x");
          }
        }
      });
    });
  };
  