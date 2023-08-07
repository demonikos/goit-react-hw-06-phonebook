// import React, { useEffect, useState, useRef } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts, deleteContact, addContact } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsInitialState } from 'redux/initial';

// import {configureStore } from '@reduxjs/toolkit';

export const App = () => {
  // const [state, setState] = useState({
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // });
  // const [filter, setFilter] = useState('');
  // const firstRender = useRef(true);


  // const AppState = {
  //   contacts: [contactsInitialState],
  //   filter: ''
  // }

  const dispatch = useDispatch();
  const filterRedux = useSelector(getFilter);
  const contactRedux = useSelector(getContacts);

  // console.log(getFilter)

  console.log(contactRedux);
  console.log(filterRedux);

  const contacts = filterRedux === '' ? contactRedux : filteredNames();

  // useEffect(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   if (localContacts) setState({ contacts: JSON.parse(localContacts) });
  // }, []);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(state.contacts));
  // }, [state.contacts]);

  const addNewContact = (id, name, number) => {
    // console.log(state.contacts);
    if (

      // !contactRedux.some(elem => elem.name.toLowerCase() === name.toLowerCase())
      !contacts.some(elem => elem.name.toLowerCase() === name.toLowerCase())

    ) {
      dispatch(addContact({ id, name, number }));
      // setState('');
    } else {
      alert(`${name} is already exist! Write another one!`);
    }
  };

  // const onChangeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const filteredNames = () => {
  //   return state.contacts.filter(elem =>
  //     elem.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const onChangeFilter = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };

  function filteredNames () {

    return contactRedux.filter(elem =>
    // return contacts.filter(elem =>

      elem.name.toLowerCase().includes(filterRedux)
    );
  };



  // const onDelete = id => {
  //   setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(elem => elem.id !== id),
  //     };
  //   });
  // };

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} />

        <h2>Contacts</h2>
        <Filter input={filterRedux} onChange={onChangeFilter} />
        <ContactList
          // contacts={state.filter !== '' ? filteredNames() : state.contacts}
          // contacts={filterRedux === '' ? contactRedux : filteredNames()}
          contacts={contacts}

          onDelete={onDelete}
        />
      </div>
    </>
  );
};
