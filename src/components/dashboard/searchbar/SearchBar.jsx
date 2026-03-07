import React from 'react';
import SearchBox from './SearchBox';
import SearchBy from './SearchBy';
import PropTypes from 'prop-types';
import Sort from './Sort';

const SearchBar = ({
  searchValue,
  setSearchValue,
  searchFilterValue,
  setSearchFilterValue,
  sort,
  setSort
}) => {

  return <>
    <SearchBox searchVaue={searchValue} setSearchValue={setSearchValue}
    />
    <SearchBy
      searchFilterValue={searchFilterValue}
      setSearchFilterValue={setSearchFilterValue}
    />
    <Sort
      sort={sort}
      setSort={setSort}
    />
  </>;
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  searchFilterValue: PropTypes.string,
  setSearchFilterValue: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
};

export default SearchBar;