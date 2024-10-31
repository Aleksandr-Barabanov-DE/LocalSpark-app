import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function Header({
  placeholder,
  inputValue,
  onChangeEvent,
  findTheCity,
  handleKeyPress,
}) {
  const headerTitle = useRef();
  const headerInput = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      headerTitle.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      headerInput.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <header>
      <div className="header-wrapper">
        <h1 ref={headerTitle} className="header-title">
          LocalSpark
        </h1>
        <div ref={headerInput} className="header-input-container">
          <input
            type="text"
            placeholder={placeholder}
            onChange={(event) => onChangeEvent(event.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
          />
          <button className="header-button" onClick={findTheCity}>
            Find
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
