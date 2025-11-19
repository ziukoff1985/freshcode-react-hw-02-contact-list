import { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddNewContact(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };
    render() {
        return (
            <form onSubmit={this.onSubmitForm} className={styles.contactForm}>
                <div className={styles.inputWrapper}>
                    <input
                        value={this.state.firstName}
                        className={styles.input}
                        name='firstName'
                        type='text'
                        placeholder='First name'
                        onChange={this.onInputChange}
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        value={this.state.lastName}
                        className={styles.input}
                        name='lastName'
                        type='text'
                        placeholder='Last name'
                        onChange={this.onInputChange}
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        value={this.state.email}
                        className={styles.input}
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={this.onInputChange}
                    />
                    <button className={styles.deleteButton} type='button'>
                        <span>❌</span>
                    </button>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        value={this.state.phone}
                        className={styles.input}
                        name='phone'
                        type='tel'
                        placeholder='Phone'
                        onChange={this.onInputChange}
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
