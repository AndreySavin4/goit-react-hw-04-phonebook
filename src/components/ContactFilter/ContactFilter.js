import css from './ContactFilter.module.css';
import PropTypes from 'prop-types';

export const ContactFilter = ({ handleChange, value }) => {
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
