import { useCallback, useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

import './contactMe.css';

const ContactMe = () => {
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const sendToWebhook = async (data: { email: string; name: string; message: string }) => {
    await toast.promise(
      fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok && res.status !== 200) {
          throw new Error(`Failed to send message :( \n Status: ${res.status}`);
        }
      }),
      {
        loading: 'Sending your message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message :(',
      },
    );
  };
  const formSubmit = useCallback(() => {
    if (email.trim().length === 0 || name.trim().length === 0) {
      toast.error('Please enter name and email so that I can properly contact you');
      setHasInteracted(true);
      return;
    }
    if (emailErrorMessage.trim().length > 0 || nameErrorMessage.trim().length > 0) {
      toast.error('Please fill all fields correctly before senidng the message');
      setHasInteracted(true);
      return;
    }

    const data = {
      email: email,
      name: name,
      message: message,
    };
    sendToWebhook(data);
  }, [emailErrorMessage, nameErrorMessage, email, name, message]);

  return (
    <section id="contact" className="contact">
      <div className="heading">
        <div className="heading-text">
          <div className="heading-number">VI.</div>
          <div className="heading-title">Contact Me</div>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-form">
          <div className="label-input-container">
            <div className="label">
              <Mail color="var(--accent-blue)" size={18} />
              <div>
                {' '}
                Email<span className="required">*</span>
              </div>
            </div>
            <div className="input-error-wrapper">
              <input
                className={`input ${hasInteracted && emailErrorMessage.trim().length > 0 ? 'input-err' : ''}`}
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErrorMessage(
                    e.target.value.trim().length === 0 && hasInteracted
                      ? 'Please enter your email so I can contact you.'
                      : '',
                  );
                  setHasInteracted(true);
                }}
              />
              <span className="error-message">{emailErrorMessage}</span>
            </div>
          </div>
          <div className="label-input-container">
            <div className="label">
              <User color="var(--accent-blue)" size={18} />{' '}
              <div>
                Name<span className="required">*</span>
              </div>
            </div>
            <div className="input-error-wrapper">
              <input
                className={`input ${hasInteracted && nameErrorMessage.trim().length > 0 ? 'input-err' : ''}`}
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameErrorMessage(
                    e.target.value.trim().length === 0 && hasInteracted
                      ? 'Please enter your name so I can properly address you.'
                      : '',
                  );
                  setHasInteracted(true);
                }}
              />
              <span className="error-message">{nameErrorMessage}</span>
            </div>
          </div>
          <div className="label-input-container">
            <div className="label">
              <MessageSquare color="var(--accent-purple)" size={18} />
              Message
            </div>
            <div className="input-error-wrapper">
              <textarea
                className="textarea"
                placeholder="Hi, feel free to reach out"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <button className="submit-btn" onClick={formSubmit}>
            <Send size={18} />
            Submit
          </button>
        </div>
      </div>
      <Toaster />
    </section>
  );
};
export default ContactMe;
