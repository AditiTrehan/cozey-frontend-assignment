"use client";
import productsData from "../constants/productsData";
import { toSmallCase } from "../helper";
import { useState } from "react";

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee Tables");

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActiveCategory(sectionId);
    const section = document.getElementById(toSmallCase(sectionId));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(activeCategory, "activeCategory");
  return (
    <div className="flex flex-row h-12 bg-darkBeige gap-2.5 w-fit rounded-3xl overflow-hidden p-2">
      {productsData.map((products) => {
        return (
          <div
            className={
              activeCategory === products.category
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
