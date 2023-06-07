import { Component } from 'react';
import css from '../contactList/contactList.module.css';
class ContactList extends Component {
  state = {
    filter: '',
  };
  handleInput = ({ target }) => {
      this.setState({ [target.name]: target.value });
      
  };
//   findCont = () => {
//     this.props.filterContact(this.state.filter);
//   };

    render() {
    return (
      <div className="contactsContainer">
            <div className={css.findCOntacts}>
          <label htmlFor="findName" className="form-label">
            Find contacts by name
          </label>
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.inputFindContacts}
            onChange={this.handleInput}
            value={this.state.filter}
            onInput={()=>(this.props.filterContact(this.state.filter))}
          />
        </div>

        <ul>
          {this.props.getFilterContact().map(name => {
            return (
                <li key={name.id}
                className={css.liContainer}>
                {name.name}: {name.number}
                <button
                  type="button"
                  className={css.delBtn}
                  onClick={() => this.props.handleDelete(name.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
