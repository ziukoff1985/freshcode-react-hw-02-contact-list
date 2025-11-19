import { Component } from 'react';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactItem from './components/ContactItem/ContactItem';

export class App extends Component {
    render() {
        return (
            <>
                <ContactList />
                <ContactItem />
                <ContactForm />
            </>
        );
    }
}

export default App;
