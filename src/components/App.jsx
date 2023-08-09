import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { getContacts, getFilter } from 'redux/selectors';
// import { filterContacts, deleteContact, addContact } from 'redux/store';
// import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const dispatch = useDispatch();
  // const filterRedux = useSelector(getFilter);
  // const contactRedux = useSelector(getContacts);
  // const contacts = filterRedux === '' ? contactRedux : filteredNames();

  // const addNewContact = (id, name, number) => {
  //   if (
  //     !contacts.some(elem => elem.name.toLowerCase() === name.toLowerCase())
  //   ) {
  //     dispatch(addContact({ id, name, number }));
  //   } else {
  //     alert(`${name} is already exist! Write another one!`);
  //   }
  // };

  // const onChangeFilter = event => {
  //   dispatch(filterContacts(event.target.value.toLowerCase()));
  // };

  // function filteredNames() {
  //   return contactRedux.filter(elem =>
  //     elem.name.toLowerCase().includes(filterRedux)
  //   );
  // }

  // const onDelete = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        {/* <Filter input={filterRedux} onChange={onChangeFilter} /> */}
        <Filter/>

        {/* <ContactList contacts={contacts} onDelete={onDelete} /> */}
        <ContactList/>
      </div>
    </>
  );
};
