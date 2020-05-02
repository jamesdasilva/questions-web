import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './to-paginate.scss';

const ToPaginate = (props) => {
  const comeBack = () => {
    const newPage = parseInt(props.currentPage) > 1 ? parseInt(props.currentPage) - 1 : props.currentPage;
    props.onPage(newPage);
  }
  const goToPage = (e) => {
    props.onPage(e.currentTarget.textContent);
  }
  const goToNext = () => {
    const count = Math.ceil(props.totalAmount / props.quantityPerPage);
    const newPage = parseInt(props.currentPage) < count ? parseInt(props.currentPage) + 1 : props.currentPage;
    props.onPage(newPage);
  }
  const generatePages = () => {
    const count = Math.ceil(props.totalAmount / props.quantityPerPage);
    const pages = [];
    for(let k = 1; k <= count; k++){
      pages.push(k);
    }
    return pages;
  }
  const setClassPageNumber = (isSelected) => {
    return `to-paginate__page-number${isSelected ? ' to-paginate__page-number--selected' : ''}`;
  }
  return (
    <div className="to-paginate">
      <div className="to-paginate__prev" onClick={ comeBack }>
        <FontAwesomeIcon icon={faChevronLeft} size="1x" />
      </div>
      { 
        generatePages().map(page => {
        return <div key={ page }
          className={setClassPageNumber( page == props.currentPage)} 
          onClick={ goToPage }>{ page }</div>
        }) 
      }
      <div className="to-paginate__next" onClick={ goToNext }>
        <FontAwesomeIcon icon={faChevronRight} size="1x" />
      </div>
    </div>
  );
};

export default ToPaginate;
