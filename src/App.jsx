import { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

export class App extends Component {
    state = {
        contacts: [],
        contactForEdit: this.createEmptyContact(),
    };

    createEmptyContact() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };
    }

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (!contacts) {
            this.setState({ contacts: [] });
        } else {
            this.setState({ contacts: contacts });
        }
    }

    deleteContact = (contactId) => {
        this.setState((prevState) => {
            const contacts = prevState.contacts.filter(
                (contact) => contact.id !== contactId
            );

            const wasEditing = prevState.contactForEdit.id === contactId;

            this.saveContactsToLocalStorage(contacts);
            return {
                contacts: contacts,
                contactForEdit: wasEditing
                    ? this.createEmptyContact()
                    : prevState.contactForEdit,
            };
        });
    };

    saveContact = (contact) => {
        if (!contact.id) {
            this.createContact(contact);
        } else {
            this.updateContact(contact);
        }
    };

    addNewContact = () => {
        this.setState({
            contactForEdit: this.createEmptyContact(),
        });
    };

    editContact = (contact) => {
        this.setState({
            contactForEdit: { ...contact },
        });
    };

    createContact = (contact) => {
        contact.id = nanoid();
        this.setState((prevState) => {
            const contacts = [...prevState.contacts, contact];
            this.saveContactsToLocalStorage(contacts);
            return {
                contacts: contacts,
                contactForEdit: this.createEmptyContact(),
            };
        });
    };

    updateContact = (contact) => {
        this.setState((prevState) => {
            const contacts = prevState.contacts.map((item) =>
                item.id === contact.id ? contact : item
            );
            this.saveContactsToLocalStorage(contacts);
            return {
                contacts: contacts,
                contactForEdit: contact,
            };
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
                    onAddNewContact={this.addNewContact}
                    onEditContact={this.editContact}
                />
                <ContactForm
                    key={this.state.contactForEdit.id}
                    contactForEdit={this.state.contactForEdit}
                    onSubmit={this.saveContact}
                    onDeleteContact={this.deleteContact}
                />
            </>
        );
    }
}

export default App;
