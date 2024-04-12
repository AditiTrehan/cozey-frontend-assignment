"use client";
import NavBar from "./components/Navbar";
import Sections from "./components/Sections";
import productsData from "../app/constants/productsData";
import { useState, useEffect } from "react";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(prevScrollPos < currentScrollPos && currentScrollPos > 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-beige z-997 h-screen">
      <div className="relative pt-200 bg-beige">
        <div className="fixed w-full top-0 px-0 pt-0 pb-4 bg-beige transition-all duration-0.15 ease-in-out delay-0 z-9999999">
          <div className="lg:ml-auto lg:mr-auto lg:w-1440 pt-3 px-20 pb-0">
            <div className="flex flex-row justify-between p-0">
              <div className="flex flex-col gap-1">
                <h1
                  className={
                    isHidden ? "hidden" : "pb-0 m-0 text-6xl text-black block"
                  }
                >
                  Tables
                </h1>
                <span
                  className={
                    isHidden ? "hidden" : "text-blackDes text-lg mb-5 block"
                  }
                >
                  A perfect pairing to your sofa.
                </span>
                <NavBar />
              </div>
            </div>
          </div>
        </div>
        {productsData.map((data) => (
          <Sections data={data} />
        ))}
      </div>
    </div>
  );
};
export default Home;
