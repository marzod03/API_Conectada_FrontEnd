import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddContactForm from './AddContactForm';
import SearchContact from './SearchContact';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/contacts')
      .then(response => {
        const allContacts = response.data;
        setContacts(allContacts);
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Definir la función addContact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h1>Gestor de Contactos</h1>
      {/* Asegúrate de pasar la función addContact como prop */}
      <AddContactForm addContact={addContact} />
      <SearchContact onSearch={handleSearch} />
      <ContactList contacts={contacts} searchTerm={searchTerm} />
    </div>
  );
};

export default ContactApp;
