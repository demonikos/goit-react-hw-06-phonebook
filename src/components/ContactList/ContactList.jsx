import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterRedux = useSelector(getFilter);
  const contactRedux = useSelector(getContacts);

  const contacts = filterRedux === '' ? contactRedux : filteredNames();

  function filteredNames() {
    return contactRedux.filter(elem =>
      elem.name.toLowerCase().includes(filterRedux)
    );
  }

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
