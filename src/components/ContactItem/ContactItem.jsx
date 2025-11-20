import { Component } from 'react';
import styles from './ContactItem.module.css';

export class ContactItem extends Component {
    onContactDelete = () => {
        this.props.onDeleteContact(this.props.contact.id);
    };

    onContactEdit = (event) => {
        this.props.onEditContact(this.props.contact);
        event.target.blur();
    };

    render() {
        const { contact } = this.props;
        return (
            <li
                className={styles.contactItem}
                onDoubleClick={this.onContactEdit}
            >
                <div className={styles.contactName}>
                    {contact.firstName} {contact.lastName}
                </div>
                <button
                    className={styles.deleteButton}
                    type='button'
                    onClick={this.onContactDelete}
                >
                    ❌
                </button>
            </li>
        );
    }
}

export default ContactItem;
