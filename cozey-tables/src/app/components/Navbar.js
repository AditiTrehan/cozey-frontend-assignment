"use client";
import productsData from "../constants/productsData";
import { toSmallCase } from "../helper";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee Tables");
  const navRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.id;
          setActiveCategory(category);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const category = toSmallCase(sectionId);
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-row h-12 bg-darkBeige gap-2.5 w-fit rounded-3xl overflow-hidden p-2">
      {productsData.map((products) => {
        return (
          <div
            className={
              activeCategory === toSmallCase(products.category)
                ? "active navbar-text"
                : "inactive navbar-text"
            }
            onClick={(e) => scrollToSection(e, products.category)}
          >
            {products.category}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
