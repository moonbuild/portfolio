import { useState } from 'react';
import { resumeService } from './resume.service';

export const useResume = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');

  const download = async () => {
    const resumeFileURL = process.env.NEXT_PUBLIC_RESUME_URL;
    if (!resumeFileURL) {
      setError('Resume URL is missing');
      return;
    }

    setisLoading(true);
    setError('');
    try {
      await resumeService.downloadResume(resumeFileURL, 'Resume Mourya Pranay.pdf');
    } catch (error) {
      setError('Failed to download file');
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  return { download, isLoading, error };
};
