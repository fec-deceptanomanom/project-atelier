import React from 'react';

const SearchBar = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="search-bar" className={CSSStyle.searchBar} onClick={props.onClick}>
      <form id="search-form" className={CSSStyle.searchForm} onSubmit={props.search} onChange={props.update}>
      <input id="search-bar-text" type="text" className={CSSStyle.searchBox} placeholder="Have a question? Search for answers..."></input>
      <button id="search-bar-button" type="submit" className={CSSStyle.searchButton}><i className="fas fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;
