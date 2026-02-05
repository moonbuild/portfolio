export const sendContactForm = async (data: { name: string; email: string; message: string }) => {
  const webhookURL = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!webhookURL) throw new Error('Configuration Error');

  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Failed to send');

  return true;
};
