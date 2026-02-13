export const resumeService = {
  async downloadResume(url: string, fileName: string): Promise<void> {
    const response = await fetch(url);
    if (!response.ok) throw new Error('URL fetch has failed!');

    const blob = await response.blob();
    const blobURL = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(url);
  },
};
