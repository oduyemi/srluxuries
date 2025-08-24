export const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"']/g, (match) => {
    const escapes: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return escapes[match];
  });
};