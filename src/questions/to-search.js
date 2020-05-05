import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSearch } from '../_context/questions';

import './to-search.scss';

const ToSearch = () => {
  const { setSearch, queryText } = useSearch();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  }
  return (
    <form className="to-search">
      <div className="to-search__icon">
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </div>
      <input 
        className="to-search__input"
        type="text"
        placeholder="Pequisar..."
        value={ queryText }
        onChange={ onChangeHandler  } />
    </form>
  );
};

export default ToSearch;
