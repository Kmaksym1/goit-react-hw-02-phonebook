import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './contactForm/contactForm.jsx';
import ContactList from './contactList/contactList.jsx';

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
    const nameAlreadyInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameAlreadyInContacts) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newUser],
      }));
    }
  };

 
  // filterContact = (evt) => {
  //   const { name, value } = evt.currentTarget;
  //   this.setState({ [name]: value });
  // };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const filterNorm = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filterNorm)
    );
  };
  handleDelete = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(cont => cont.id !== id),
      };
    });
  };
  filterContact = ( contact ) => {
    this.setState(({ filter:  contact  }));
  };
  render() {
    
    console.log(this.state.contacts);
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
        {/* <Filter /> */}
        <ContactList
          contacts={this.state.contacts}
          filterContact={this.filterContact}
          getFilterContact={this.getFilterContact}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
