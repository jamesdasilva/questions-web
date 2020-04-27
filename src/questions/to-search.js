import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './to-search.scss';

const ToSearch = () => {
  return (
    <form className="to-search">
        <div className="to-search__icon">
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </div>
        <input 
          className="to-search__input"
          type="text"
          placeholder="Pequisar..." />
    </form>
  );
};

export default ToSearch;
