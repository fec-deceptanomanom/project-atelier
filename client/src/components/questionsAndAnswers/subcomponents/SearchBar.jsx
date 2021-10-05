import React from 'react';

const SearchBar = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="search-bar" className={CSSStyle["search-bar"]} onClick={props.onClick}>
      <form id="search-form" onSubmit={props.search} onChange={props.update}>
      <input id="search-bar-text" type="text" placeholder="Have a question? Search for answers..." aria-label="Search Bar"></input>
      <button id="search-bar-button" aria-label="Search Bar Submit" type="submit"><i id="search-bar-btn-icon" className="fas fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;
