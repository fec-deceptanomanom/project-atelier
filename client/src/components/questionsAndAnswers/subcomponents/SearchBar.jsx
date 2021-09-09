import React from 'react';

const SearchBar = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="Searchbar" className={CSSStyle.searchBar}>
      <form id="searchForm" onSubmit={(event) => {event.preventDefault()}}>
      <input type="text" placeholder="Have a question? Search for answers..."></input>
      <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;
