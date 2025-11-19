import { Component } from 'react';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactItem from './components/ContactItem/ContactItem';

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
    render() {
        return (
            <>
                <ContactList contacts={this.state.contacts} />

                <ContactForm />
            </>
        );
    }
}

export default App;
