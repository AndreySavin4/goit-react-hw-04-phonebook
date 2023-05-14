import { useState } from 'react';
import css from './ContactFilter.module.css';
import PropTypes from 'prop-types';
export const ContactFilter = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const changeValue = evt => {
    setInputValue(evt.target.value);
    handleChange(inputValue);
  };
  console.log(inputValue);
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={inputValue}
          onChange={changeValue}
        />
      </label>
    </>
  );
};

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
