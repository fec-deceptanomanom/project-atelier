import React from 'react';

const SearchBar = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="SearchBar" className={CSSStyle.searchBar}>
      <form id="SearchForm" className={CSSStyle.searchForm} onSubmit={props.search} onChange={props.update}>
      <input type="text" className={CSSStyle.searchBox} placeholder="Have a question? Search for answers..."></input>
      <button type="submit" className={CSSStyle.searchButton}><i className="fas fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;
