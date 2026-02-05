import { useCallback, useState } from 'react';
import styles from './ContactMe.module.css';
import useContactForm from '@/hooks/contact/useContactForm';

const ContactMe = () => {
  const { status, errorMessage: submitErrorMessage, submit } = useContactForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validationErrorMessage, setValidationErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const handleSubmit = useCallback(async () => {
    if (name.trim().length === 0)
      setValidationErrorMessage('IDENTITY_REQUIRED!, I need a name to address you correctly');
    else if (email.trim().length === 0)
      setValidationErrorMessage('CONTACT VALUE IS NULL: Drop a mail so i can get back to you');
    else {
      setValidationErrorMessage(undefined);
      await submit({ name, email, message });
    }
  }, [submit, name, email, message]);
  // console.log(validationErrorMessage)
  return (
    <section id="contact-me" className={styles.contactMe}>
      <div className={`${styles.signalTag} ${styles[status]}`}>
        <span className={`${styles.signalDot} ${status === 'loading' ? 'pulse' : ''}`}>●</span>
        {status === 'idle'
          ? 'SYSTEM_READY'
          : status === 'loading'
            ? 'TRANSMITTING_PAYLOAD...'
            : status === 'success'
              ? 'SIGNAL_RECEIVED_SUCCESS'
              : status === 'error' && 'TRANSMISSION_FAILURE'}
      </div>
      <span className={styles.title}>
        SEND_
        <br />
        SIGNAL
      </span>
      <div className={styles.formContainer}>
        <div className={`${styles.inputContainer} ${styles.groupPurple}`}>
          <span className={styles.labelText}>{'>>'} ENTER_ID</span>
          <input
            className={styles.inputBox}
            placeholder="NAME_HERE"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={`${styles.inputContainer} ${styles.groupGreen}`}>
          <span className={styles.labelText}>{'>>'} RETURN_ADDRESS</span>
          <input
            className={styles.inputBox}
            placeholder="EMAIL@DOMAIN"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.inputContainer} ${styles.groupPink}`}>
          <span className={styles.labelText}>{'>>'} PAYLOAD</span>
          <textarea
            className={styles.inputBox}
            placeholder="MESSAGE CONTENT..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={status === 'loading'}
      >
        {status === 'success'
          ? 'TRANSMISSION SUCCESSFUL'
          : status == 'loading'
            ? 'SENDING...'
            : `EXECUTE_TRANSMISSION()`}
      </button>
      {(submitErrorMessage !== undefined || validationErrorMessage !== undefined) && (
        <div className={styles.errorMessage}>
          {validationErrorMessage
            ? `[!] ${validationErrorMessage}.`
            : `[!] CRITICAL_ERROR : ${submitErrorMessage}`}
        </div>
      )}
    </section>
  );
};

export default ContactMe;
