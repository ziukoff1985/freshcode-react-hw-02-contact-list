import { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
    render() {
        return (
            <form className={styles.contactForm}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        name='firstName'
                        type='text'
                        placeholder='First name'
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        name='lastName'
                        type='text'
                        placeholder='Last name'
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        name='email'
                        type='email'
                        placeholder='Email'
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        name='phone'
                        type='tel'
                        placeholder='Phone'
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.formButton} type='submit'>
                        Save
                    </button>
                    <button className={styles.formButton} type='button'>
                        Delete
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
