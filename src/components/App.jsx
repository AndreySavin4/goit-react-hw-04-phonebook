import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      toast.error('Already exists in our databases');
      return true;
    }
    setContacts(prevState => [...prevState, contact]);
    return false;
  };

  const handleDeleteContact = id => {
    return setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2>Contacts</h2>
      <ContactFilter handleChange={handleChangeFilter} value={filter} />
      <ContactsList
        contacts={handleFilterContacts()}
        deleteContact={handleDeleteContact}
      />
      <Toaster />
    </>
  );
};
