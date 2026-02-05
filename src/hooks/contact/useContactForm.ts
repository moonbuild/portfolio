import { useState } from 'react';
import { sendContactForm } from './contact.service';

const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const submit = async (data: { name: string; email: string; message: string }) => {
    setStatus('loading');
    try {
      await sendContactForm(data);
      setStatus('success');
      setErrorMessage(undefined);
      return true;
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage((error as Error).message);
      return false;
    }
  };
  return { status, errorMessage, submit };
};

export default useContactForm;
