import { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

export class App extends Component {
    state = {
        contacts: [
            {
                id: 'id-1',
                firstName: 'Rosie',
                lastName: 'Ferguson',
                email: 'rosie.ferguson@example.com',
                phone: '459-12-56',
            },
            {
                id: 'id-2',
                firstName: 'Hermione',
                lastName: 'Granger',
                email: 'hermione.granger@example.com',
                phone: '443-89-12',
            },
            {
                id: 'id-3',
                firstName: 'Eden',
                lastName: 'Dominguez',
                email: 'eden.dominguez@example.com',
                phone: '645-17-79',
            },
        ],
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
