import React from 'react';
import css from './App.module.css'

import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactForm />
        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
      <ContactList/>
    </div>
    );
}