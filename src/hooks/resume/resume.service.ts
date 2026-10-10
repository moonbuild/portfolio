export const resumeService = {
  async downloadResume(url: string, fileName: string): Promise<void> {
    // Google Drive (and most cross-origin hosts) block fetch via CORS,
    // so we can't blob-download. Trigger the browser download directly.
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};
