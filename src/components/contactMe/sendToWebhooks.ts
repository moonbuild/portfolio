import toast from 'react-hot-toast';

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

export default sendToWebhook;
