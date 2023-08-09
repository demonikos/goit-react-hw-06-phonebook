import React from 'react';
// import PropTypes from 'prop-types';
import { filterContacts } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';


export const Filter = () => {

  const dispatch = useDispatch();
  const filterRedux = useSelector(getFilter);

  const onChangeFilter = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };

  return (
    <>
      <div>
        <label>
          Find contacts by name
          <input type="text" value={filterRedux} onChange={onChangeFilter} />
        </label>
      </div>
    </>
  );
};

// Filter.propTypes = {
//   // input: PropTypes.string.isRequired,
//   // onChange: PropTypes.func.isRequired,
// };
