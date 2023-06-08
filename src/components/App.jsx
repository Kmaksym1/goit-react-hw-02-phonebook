import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './contactForm/contactForm.jsx';
import ContactList from './contactList/contactList.jsx';
import { Filter } from './contactList/filter.jsx';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createName = data => {
    const newUser = {
      ...data,
      id: nanoid(3),
    };
    const nameAlreadyInContacts = this.state.contacts.find(
      ({ name }) => name === data.name
    );
    if (nameAlreadyInContacts) {
      return Notify.info(`${data.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  changeFilter = filter => {
    this.setState({ filter: filter.toLowerCase() });
  };

  handleDelete = idDel => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== idDel),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const vicibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return (
      <div
        style={{
          width: '50vh',
          display: 'block',
          fontSize: '40px',
          // color: rgb(1, 1, 1),
          margin: 'auto',
          // display: 'flex',
          // justifyItem: 'center',
          // flexDirection: 'column',
          // alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm createName={this.createName} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList contacts={vicibleContacts} del={this.handleDelete} />
      </div>
    );
  }
}

export default App;
