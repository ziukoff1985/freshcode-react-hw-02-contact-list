import { Component } from 'react';
import styles from './ContactItem.module.css';

export class ContactItem extends Component {
    render() {
        const { contact } = this.props;
        return (
            <li className={styles.contactItem}>
                <div className={styles.contactName}>
                    {contact.firstName} {contact.lastName}
                </div>
                <button className={styles.deleteButton} type='button'>
                    <span>❌</span>
                </button>
            </li>
        );
    }
}

export default ContactItem;
