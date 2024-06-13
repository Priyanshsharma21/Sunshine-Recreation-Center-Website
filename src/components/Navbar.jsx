import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { headerCoreValue, navItems } from '../constant';
import { logo } from '../assets';
import { gsap } from "gsap";
import { revealMenu } from "../utils/animations.js";

const Navbar = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const timeline = useRef(gsap.timeline());
  const navbarRef = useRef(null);

  useEffect(() => {
    const getRandomHeader = () => {
      const randomIndex = Math.floor(Math.random() * headerCoreValue.length);
      return headerCoreValue[randomIndex];
    };
    setRandomQuote(getRandomHeader());
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(revealMenu(), 0);
    });

    return () => context.revert();
  }, []);


  return (
    <div className="hero__top fixed w-full top-0 bg-transparent" ref={navbarRef}>
      <div className={`showNavGrad`} />

      <div className="headerFont z-50" data-menu-item data-hidden>
        <Link to="/">
          <img src={"https://cdn.sanity.io/images/s9olv7lh/production/0c46b3858ae996d961114315e78c29eef10aed24-961x348.png"} alt="Sunshine Recreation Centre Logo" className="main_logo h-auto" />
        </Link>
      </div>

      <div data-menu-item data-hidden className="navbar_nav">
        {navItems.map((item) => (
          <span key={item.key} data-menu-item data-hidden>
            <Link to={item.path} className="headerFont navLink">
              {item.name}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
