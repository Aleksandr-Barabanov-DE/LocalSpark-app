import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function NavigationButtons({ previousCity, nextCity }) {
  const buttonsContainer = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      buttonsContainer.current,
      {
        x: 20,
        opacity: 0,
      },
      { x: 0, opacity: 1, delay: 0.5, duration: 1 }
    );
  }, []);

  return (
    <div ref={buttonsContainer} className="navigation-buttons-container">
      <button className="navigation-button" onClick={previousCity}>
        Previous City
      </button>
      <button className="navigation-button" onClick={nextCity}>
        Next City
      </button>
    </div>
  );
}
