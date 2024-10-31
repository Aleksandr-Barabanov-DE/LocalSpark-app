import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopSearched({ cities, setCurrentCityIndex }) {
  const sectionRef = useRef();
  const sendIndex = (index) => () => {
    setCurrentCityIndex(index);
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    // Animation and trigger
    const animation = gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleaning fucntion to remove trigger after unmounting
    return () => {
      animation.scrollTrigger.kill(); // Delete trigger
    };
  }, []);

  return (
    <div>
      <section ref={sectionRef} className="top-searched-section">
        <h3 className="top-searched-section-title">Top Searched Cities</h3>
        <ul className="top-searched-cities-container">
          {cities.slice(0, 3).map((city, index) => (
            <li className="top-city" key={index} onClick={sendIndex(index)}>
              <h4 className="top-city-name">{city.name}</h4>
              <img
                className="top-city-preview"
                src={city.image}
                alt={city.name}
              />
              <p className="top-city-rating">
                Rating:{" "}
                <span className="top-city-rating-number">
                  {(
                    city.ratings.reduce(
                      (acc, ratingObj) => acc + ratingObj.rating,
                      0
                    ) / city.ratings.length || 0
                  ).toFixed(2)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
