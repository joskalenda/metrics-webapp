import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../styles/continent.module.scss';

const Pagination = (props) => {
  const { countryPages, itemsPerPage, onPageChange } = props;
  const [selectedPage, setSelectedPage] = useState(0);
  const buttons = [];

  const numberOfPages = Math.ceil(countryPages / itemsPerPage);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  for (let i = 0; i < numberOfPages; i += 1) {
    buttons.push(<button type="button" key={`key-${i}`} onClick={() => handlePageChange(i)} className={i === selectedPage ? 'selected' : 'unselected'}>{i}</button>);
  }

  return (
    <div className={styles.buttons}>{buttons}</div>
  );
};

Pagination.propTypes = {
  countryPages: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.string.isRequired,
  onPageChange: PropTypes.string.isRequired,

};
export default Pagination;
