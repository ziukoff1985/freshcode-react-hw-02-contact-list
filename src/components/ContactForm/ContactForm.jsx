import { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
    render() {
        return (
            <form className={styles.contactForm}>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
                <input type='email' placeholder='Email' />
                <input type='tel' placeholder='Phone' />
                <div className={styles.buttonWrapper}>
                    <button type='submit'>Save</button>
                    <button type='button'>Delete</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
