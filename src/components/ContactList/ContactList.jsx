import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';

import styles from './ContactList.module.css';

export class ContactList extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <div className={styles.contactListWrapper}>
                <ul className={styles.contactList}>
                    {contacts.map((contact) => (
                        <ContactItem
                            key={contact.id}
                            contact={contact}
                            onDeleteContact={this.props.onDeleteContact}
                        />
                    ))}
                </ul>
                <button className={styles.addButton} type='button'>
                    New
                </button>
            </div>
        );
    }
}

export default ContactList;
