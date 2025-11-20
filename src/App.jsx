import { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

export class App extends Component {
    state = {
        contacts: [],
    };

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (!contacts) {
            this.setState({ contacts: [] });
        } else {
            this.setState({ contacts: contacts });
        }
    }

    addNewContact = (newContact) => {
        newContact.id = nanoid();
        this.setState((prevState) => {
            const contacts = [...prevState.contacts, newContact];
            this.saveContactsToLocalStorage(contacts);
            return { contacts: contacts };
        });
    };

    deleteContact = (contactId) => {
        this.setState((prevState) => {
            const contacts = prevState.contacts.filter(
                (contact) => contact.id !== contactId
            );
            this.saveContactsToLocalStorage(contacts);
            return { contacts: contacts };
        });
    };

    saveContactsToLocalStorage = (contacts) => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    render() {
        return (
            <>
                <ContactList
                    contacts={this.state.contacts}
                    onDeleteContact={this.deleteContact}
                />
                <ContactForm onAddNewContact={this.addNewContact} />
            </>
        );
    }
}

export default App;
