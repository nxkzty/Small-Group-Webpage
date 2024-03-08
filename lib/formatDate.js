export const formatDate = (str) => new Intl.DateTimeFormat('de-DE').format(new Date(str));
