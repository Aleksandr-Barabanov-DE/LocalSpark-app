import React from "react";

function Header({
  placeholder,
  inputValue,
  onChangeEvent,
  findTheCity,
  handleKeyPress,
}) {
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="header-title">LocalSpark</h1>
        <div className="header-input-container">
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
